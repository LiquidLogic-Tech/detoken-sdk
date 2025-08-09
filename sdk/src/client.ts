import { type SuiClient } from "@mysten/sui/client";
import { AdminCap, DeCenter } from "./_generated/de-token-v2/de-center/structs";
import { ADMIN_CAP_OBJECT_ID, UPGRADE_CAP_OBJECT_ID } from "./lib/constant";
import { normalizeStructTag, normalizeSuiObjectId } from "@mysten/sui/utils";
import { phantom } from "./_generated/_framework/reified";
import { setPublishedAt } from "./_generated/de-token-v2";
import {
  type Transaction,
  type TransactionObjectInput,
} from "@mysten/sui/dist/cjs/transactions";
import {
  burn,
  cancelUnlockRequest,
  claim,
  increaseLockedAmount,
  lock,
  requestUnlock,
  updateDuration,
  updateMinReturnPercentageRate,
  withdrawPenaltyFee,
} from "./_generated/de-token-v2/de-center/functions";
import { DeToken } from "./_generated/de-token-v2/de-token/structs";
import { composeSuiType } from "./_generated/_framework/util";

export class DeTokenClient {
  deCenter: DeCenter<string>;
  client: SuiClient;

  constructor(client: SuiClient, deCenter: DeCenter<string>) {
    this.deCenter = deCenter;
    this.client = client;
  }

  static async initialize(client: SuiClient, tokenType: string) {
    const suiObjectResponse = await client.getObject({
      id: ADMIN_CAP_OBJECT_ID,
      options: { showContent: true },
    });
    if (
      !suiObjectResponse.data?.content ||
      suiObjectResponse.data.content.dataType !== "moveObject"
    )
      throw new Error(`Fail to parse AdminCap: ${ADMIN_CAP_OBJECT_ID}`);

    const adminCap = AdminCap.fromSuiObjectData(suiObjectResponse.data);

    const deCenterField = adminCap.registry.contents.find(
      (r) => normalizeStructTag(r.key.name) == normalizeStructTag(tokenType),
    );

    if (!deCenterField) throw Error(`DeCenter for ${tokenType} doesn't exist`);

    const deCenterId = normalizeSuiObjectId(deCenterField.value);
    const deCenterObjectResponse = await client.getObject({
      id: deCenterId,
      options: { showContent: true },
    });

    if (
      !deCenterObjectResponse.data?.content ||
      deCenterObjectResponse.data.content.dataType !== "moveObject"
    )
      throw new Error(`Fail to parse DeCenter: ${deCenterId}`);

    const deCenter = DeCenter.fromSuiObjectData(
      phantom(tokenType),
      deCenterObjectResponse.data,
    );

    await DeTokenClient.updateToLatestPackage(client);
    return new DeTokenClient(client, deCenter);
  }

  static async getLatestPackageId(suiClient: SuiClient) {
    const object = await suiClient.getObject({
      id: UPGRADE_CAP_OBJECT_ID,
      options: {
        showContent: true,
      },
    });

    /* eslint-disable  @typescript-eslint/no-explicit-any */
    return (object.data?.content as any).fields.package;
  }

  static async updateToLatestPackage(suiClient: SuiClient) {
    const latestPackageId = await DeTokenClient.getLatestPackageId(suiClient);

    setPublishedAt(latestPackageId);
  }

  async refetchDeCenter() {
    const deCenter = await DeCenter.fetch(
      this.client,
      phantom(this.deCenter.$typeArgs[0]),
      this.deCenter.id,
    );

    this.deCenter = deCenter;
  }

  // --- Getter ---
  async getDeTokenById(id: string) {
    return await DeToken.fetch(
      this.client,
      phantom(this.deCenter.$typeArgs[0]),
      id,
    );
  }

  async getOwnedDeTokens(owner: string) {
    const suiObjectResponses = [];
    let hasNextPage = true;
    let nextCursor = undefined;

    while (hasNextPage) {
      const res_ = await this.client.getOwnedObjects({
        owner,
        filter: {
          StructType: composeSuiType(
            DeToken.$typeName,
            this.deCenter.$typeArgs[0],
          ),
        },
        options: {
          showContent: true,
        },
        cursor: nextCursor,
      });

      suiObjectResponses.push(...res_.data);

      hasNextPage = res_.hasNextPage;
      nextCursor = res_.nextCursor;
    }

    return suiObjectResponses
      .filter((res) => Boolean(res.data))
      .map((res) =>
        DeToken.fromSuiObjectData(
          phantom(this.deCenter.$typeArgs[0]),
          res.data!,
        ),
      );
  }

  getTotalVotingPower() {
    const balanceWithUnlocking =
      this.deCenter.lockedTotal - this.deCenter.unlockingTotal;

    return balanceWithUnlocking + this.deCenter.unlockingTotal / BigInt(2);
  }

  getDeTokenVotingPower(deToken: DeToken<string>) {
    const unlockingBalances = deToken.unlockRequests.reduce(
      (acc, req) => acc + req.withdrawal.value + req.penalty.value,
      BigInt(0),
    );

    return deToken.lockedBalance.value + unlockingBalances / BigInt(2);
  }

  getReturnRate(unlockedDuration: bigint) {
    const config = this.deCenter.config;
    return (
      (config.minReturnPercentageRate +
        ((100 - config.minReturnPercentageRate) *
          (Number(unlockedDuration) - Number(config.minDuration))) /
          (Number(config.maxDuration) - Number(config.minDuration))) /
      100
    );
  }

  calculateReturnedValue(value: bigint, unlockedDuration: bigint) {
    const returnRate = this.getReturnRate(unlockedDuration);
    return BigInt((Number(value) * returnRate).toFixed(0));
  }

  calculatePenaltyValue(value: bigint, unlockedDuration: bigint) {
    const returnRate = this.getReturnRate(unlockedDuration);
    return BigInt((Number(value) * (1 - returnRate)).toFixed(0));
  }

  // --- Move call ---
  lockMoveCall(
    tx: Transaction,
    lockedBalance: TransactionObjectInput,
    recipient: string,
  ) {
    lock(tx, this.deCenter.$typeArgs[0], {
      self: tx.object(this.deCenter.id),
      lockedBalance,
      recipient,
    });
  }

  increaseLockedAmountMoveCall(
    tx: Transaction,
    deTokenId: string,
    lockedBalance: TransactionObjectInput,
  ) {
    increaseLockedAmount(tx, this.deCenter.$typeArgs[0], {
      self: tx.object(this.deCenter.id),
      deToken: tx.object(deTokenId),
      lockedBalance,
    });
  }

  requestUnlockMoveCall(
    tx: Transaction,
    deTokenId: string,
    value: bigint,
    unlockedDuration: bigint,
  ) {
    requestUnlock(tx, this.deCenter.$typeArgs[0], {
      self: tx.object(this.deCenter.id),
      deToken: tx.object(deTokenId),
      value,
      unlockedDuration,
      clock: tx.object.clock(),
    });
  }

  cancelUnlockRequestMoveCall(tx: Transaction, deTokenId: string, idx: bigint) {
    cancelUnlockRequest(tx, this.deCenter.$typeArgs[0], {
      self: tx.object(this.deCenter.id),
      deToken: tx.object(deTokenId),
      idx,
      clock: tx.object.clock(),
    });
  }

  claimMoveCall(tx: Transaction, deTokenId: string, idx: bigint) {
    return claim(tx, this.deCenter.$typeArgs[0], {
      self: tx.object(this.deCenter.id),
      deToken: tx.object(deTokenId),
      idx,
      clock: tx.object.clock(),
    });
  }

  burnMoveCall(tx: Transaction, deTokenId: string) {
    burn(tx, this.deCenter.$typeArgs[0], {
      self: tx.object(this.deCenter.id),
      deToken: tx.object(deTokenId),
    });
  }

  // --> admin
  updateDurationMoveCall(
    tx: Transaction,
    minDuration: bigint,
    maxDuration: bigint,
  ) {
    updateDuration(tx, this.deCenter.$typeArgs[0], {
      self: tx.object(this.deCenter.id),
      adminCap: tx.object(ADMIN_CAP_OBJECT_ID),
      minDuration,
      maxDuration,
    });
  }

  updateMinReturnPercentageRateMoveCall(
    tx: Transaction,
    minReturnPercentageRate: number,
  ) {
    updateMinReturnPercentageRate(tx, this.deCenter.$typeArgs[0], {
      self: tx.object(this.deCenter.id),
      adminCap: tx.object(ADMIN_CAP_OBJECT_ID),
      minReturnPercentageRate,
    });
  }

  withdrawPenaltyFeeMoveCall(tx: Transaction, value: bigint) {
    withdrawPenaltyFee(tx, this.deCenter.$typeArgs[0], {
      self: tx.object(this.deCenter.id),
      cap: tx.object(ADMIN_CAP_OBJECT_ID),
      value,
    });
  }
}
