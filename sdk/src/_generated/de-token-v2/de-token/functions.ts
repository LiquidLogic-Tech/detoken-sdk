import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function startAt( tx: Transaction, typeArg: string, req: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_token::start_at`, typeArguments: [typeArg], arguments: [ obj(tx, req) ], }) }

export function unlockedAt( tx: Transaction, typeArg: string, req: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_token::unlocked_at`, typeArguments: [typeArg], arguments: [ obj(tx, req) ], }) }

export function withdrawal( tx: Transaction, typeArg: string, req: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_token::withdrawal`, typeArguments: [typeArg], arguments: [ obj(tx, req) ], }) }

export function penalty( tx: Transaction, typeArg: string, req: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_token::penalty`, typeArguments: [typeArg], arguments: [ obj(tx, req) ], }) }

export function lockedBalance( tx: Transaction, typeArg: string, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_token::locked_balance`, typeArguments: [typeArg], arguments: [ obj(tx, self) ], }) }

export function unlockRequests( tx: Transaction, typeArg: string, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_token::unlock_requests`, typeArguments: [typeArg], arguments: [ obj(tx, self) ], }) }

export function init( tx: Transaction, otw: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_token::init`, arguments: [ obj(tx, otw) ], }) }

export function new_( tx: Transaction, typeArg: string, lockedBalance: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_token::new`, typeArguments: [typeArg], arguments: [ obj(tx, lockedBalance) ], }) }

export interface RequestUnlockArgs { self: TransactionObjectInput; value: bigint | TransactionArgument; unlockedDuration: bigint | TransactionArgument; minDuration: bigint | TransactionArgument; maxDuration: bigint | TransactionArgument; basePercentage: number | TransactionArgument; clock: TransactionObjectInput }

export function requestUnlock( tx: Transaction, typeArg: string, args: RequestUnlockArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_token::request_unlock`, typeArguments: [typeArg], arguments: [ obj(tx, args.self), pure(tx, args.value, `u64`), pure(tx, args.unlockedDuration, `u64`), pure(tx, args.minDuration, `u64`), pure(tx, args.maxDuration, `u64`), pure(tx, args.basePercentage, `u8`), obj(tx, args.clock) ], }) }

export interface CancelUnlockRequestArgs { self: TransactionObjectInput; idx: bigint | TransactionArgument; clock: TransactionObjectInput }

export function cancelUnlockRequest( tx: Transaction, typeArg: string, args: CancelUnlockRequestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_token::cancel_unlock_request`, typeArguments: [typeArg], arguments: [ obj(tx, args.self), pure(tx, args.idx, `u64`), obj(tx, args.clock) ], }) }

export interface ClaimArgs { self: TransactionObjectInput; idx: bigint | TransactionArgument; clock: TransactionObjectInput }

export function claim( tx: Transaction, typeArg: string, args: ClaimArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_token::claim`, typeArguments: [typeArg], arguments: [ obj(tx, args.self), pure(tx, args.idx, `u64`), obj(tx, args.clock) ], }) }

export function destroy( tx: Transaction, typeArg: string, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_token::destroy`, typeArguments: [typeArg], arguments: [ obj(tx, self) ], }) }

export interface ReturnRateArgs { unlockedDuration: bigint | TransactionArgument; minDuration: bigint | TransactionArgument; maxDuration: bigint | TransactionArgument; basePercentage: number | TransactionArgument }

export function returnRate( tx: Transaction, args: ReturnRateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_token::return_rate`, arguments: [ pure(tx, args.unlockedDuration, `u64`), pure(tx, args.minDuration, `u64`), pure(tx, args.maxDuration, `u64`), pure(tx, args.basePercentage, `u8`) ], }) }

export interface PenaltyFeeArgs { value: bigint | TransactionArgument; unlockedDuration: bigint | TransactionArgument; minDuration: bigint | TransactionArgument; maxDuration: bigint | TransactionArgument; basePercentage: number | TransactionArgument }

export function penaltyFee( tx: Transaction, args: PenaltyFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_token::penalty_fee`, arguments: [ pure(tx, args.value, `u64`), pure(tx, args.unlockedDuration, `u64`), pure(tx, args.minDuration, `u64`), pure(tx, args.maxDuration, `u64`), pure(tx, args.basePercentage, `u8`) ], }) }

export interface VotingPowerArgs { self: TransactionObjectInput; clock: TransactionObjectInput }

export function votingPower( tx: Transaction, typeArg: string, args: VotingPowerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_token::voting_power`, typeArguments: [typeArg], arguments: [ obj(tx, args.self), obj(tx, args.clock) ], }) }

export interface ClaimableRequestsArgs { self: TransactionObjectInput; clock: TransactionObjectInput }

export function claimableRequests( tx: Transaction, typeArg: string, args: ClaimableRequestsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_token::claimable_requests`, typeArguments: [typeArg], arguments: [ obj(tx, args.self), obj(tx, args.clock) ], }) }

export interface ClaimableBalanceArgs { self: TransactionObjectInput; clock: TransactionObjectInput }

export function claimableBalance( tx: Transaction, typeArg: string, args: ClaimableBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_token::claimable_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.self), obj(tx, args.clock) ], }) }

export interface TransferArgs { self: TransactionObjectInput; recipient: string | TransactionArgument }

export function transfer( tx: Transaction, typeArg: string, args: TransferArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_token::transfer`, typeArguments: [typeArg], arguments: [ obj(tx, args.self), pure(tx, args.recipient, `address`) ], }) }
