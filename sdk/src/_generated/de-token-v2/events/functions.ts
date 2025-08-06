import {PUBLISHED_AT} from "..";
import {ID} from "../../_dependencies/source/0x2/object/structs";
import {pure} from "../../_framework/util";
import {Transaction, TransactionArgument} from "@mysten/sui/transactions";

export interface EmitNewCenterEventArgs { id: string | TransactionArgument; minUnlockingDuration: bigint | TransactionArgument; maxUnlockingDuration: bigint | TransactionArgument; basePercentage: number | TransactionArgument }

export function emitNewCenterEvent( tx: Transaction, typeArg: string, args: EmitNewCenterEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_new_center_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.id, `${ID.$typeName}`), pure(tx, args.minUnlockingDuration, `u64`), pure(tx, args.maxUnlockingDuration, `u64`), pure(tx, args.basePercentage, `u8`) ], }) }

export interface EmitUpdateDurationArgs { deCenterId: string | TransactionArgument; minDuration: bigint | TransactionArgument; maxDuration: bigint | TransactionArgument }

export function emitUpdateDuration( tx: Transaction, typeArg: string, args: EmitUpdateDurationArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_update_duration`, typeArguments: [typeArg], arguments: [ pure(tx, args.deCenterId, `${ID.$typeName}`), pure(tx, args.minDuration, `u64`), pure(tx, args.maxDuration, `u64`) ], }) }

export interface EmitUpdateMinReturnPercentageRateArgs { deCenterId: string | TransactionArgument; minReturnPercentageRate: number | TransactionArgument }

export function emitUpdateMinReturnPercentageRate( tx: Transaction, typeArg: string, args: EmitUpdateMinReturnPercentageRateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_update_min_return_percentage_rate`, typeArguments: [typeArg], arguments: [ pure(tx, args.deCenterId, `${ID.$typeName}`), pure(tx, args.minReturnPercentageRate, `u8`) ], }) }

export interface EmitWithdrawPenaltyFeeArgs { deCenterId: string | TransactionArgument; value: bigint | TransactionArgument }

export function emitWithdrawPenaltyFee( tx: Transaction, typeArg: string, args: EmitWithdrawPenaltyFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_withdraw_penalty_fee`, typeArguments: [typeArg], arguments: [ pure(tx, args.deCenterId, `${ID.$typeName}`), pure(tx, args.value, `u64`) ], }) }

export interface EmitLockEventArgs { deTokenId: string | TransactionArgument; lockedBalance: bigint | TransactionArgument }

export function emitLockEvent( tx: Transaction, typeArg: string, args: EmitLockEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_lock_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.deTokenId, `${ID.$typeName}`), pure(tx, args.lockedBalance, `u64`) ], }) }

export interface EmitRequestUnlockEventArgs { deTokenId: string | TransactionArgument; unlockedBalance: bigint | TransactionArgument; unlockedDuration: bigint | TransactionArgument; unlockedAt: bigint | TransactionArgument; timestamp: bigint | TransactionArgument }

export function emitRequestUnlockEvent( tx: Transaction, typeArg: string, args: EmitRequestUnlockEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_request_unlock_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.deTokenId, `${ID.$typeName}`), pure(tx, args.unlockedBalance, `u64`), pure(tx, args.unlockedDuration, `u64`), pure(tx, args.unlockedAt, `u64`), pure(tx, args.timestamp, `u64`) ], }) }

export interface EmitCancelUnlockEventArgs { deTokenId: string | TransactionArgument; unlockedBalance: bigint | TransactionArgument; unlockedDuration: bigint | TransactionArgument; startAt: bigint | TransactionArgument; unlockedAt: bigint | TransactionArgument; timestamp: bigint | TransactionArgument }

export function emitCancelUnlockEvent( tx: Transaction, typeArg: string, args: EmitCancelUnlockEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_cancel_unlock_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.deTokenId, `${ID.$typeName}`), pure(tx, args.unlockedBalance, `u64`), pure(tx, args.unlockedDuration, `u64`), pure(tx, args.startAt, `u64`), pure(tx, args.unlockedAt, `u64`), pure(tx, args.timestamp, `u64`) ], }) }

export interface EmitClaimEventArgs { deTokenId: string | TransactionArgument; withdrawal: bigint | TransactionArgument; penalty: bigint | TransactionArgument; startAt: bigint | TransactionArgument; unlockedAt: bigint | TransactionArgument; timestamp: bigint | TransactionArgument }

export function emitClaimEvent( tx: Transaction, typeArg: string, args: EmitClaimEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_claim_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.deTokenId, `${ID.$typeName}`), pure(tx, args.withdrawal, `u64`), pure(tx, args.penalty, `u64`), pure(tx, args.startAt, `u64`), pure(tx, args.unlockedAt, `u64`), pure(tx, args.timestamp, `u64`) ], }) }

export function emitBurnEvent( tx: Transaction, typeArg: string, deTokenId: string | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_burn_event`, typeArguments: [typeArg], arguments: [ pure(tx, deTokenId, `${ID.$typeName}`) ], }) }
