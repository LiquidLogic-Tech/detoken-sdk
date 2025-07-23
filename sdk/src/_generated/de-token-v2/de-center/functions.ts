import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function centerOf( tx: Transaction, typeArg: string, cap: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::center_of`, typeArguments: [typeArg], arguments: [ obj(tx, cap) ], }) }

export function minDuration( tx: Transaction, config: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::min_duration`, arguments: [ obj(tx, config) ], }) }

export function maxDuration( tx: Transaction, config: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::max_duration`, arguments: [ obj(tx, config) ], }) }

export function minReturnPercentageRate( tx: Transaction, config: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::min_return_percentage_rate`, arguments: [ obj(tx, config) ], }) }

export function config( tx: Transaction, typeArg: string, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::config`, typeArguments: [typeArg], arguments: [ obj(tx, self) ], }) }

export function mintedEscrow( tx: Transaction, typeArg: string, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::minted_escrow`, typeArguments: [typeArg], arguments: [ obj(tx, self) ], }) }

export function lockedTotal( tx: Transaction, typeArg: string, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::locked_total`, typeArguments: [typeArg], arguments: [ obj(tx, self) ], }) }

export function unlockingTotal( tx: Transaction, typeArg: string, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::unlocking_total`, typeArguments: [typeArg], arguments: [ obj(tx, self) ], }) }

export function penaltyFeeBalance( tx: Transaction, typeArg: string, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::penalty_fee_balance`, typeArguments: [typeArg], arguments: [ obj(tx, self) ], }) }

export function init( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::init`, arguments: [ ], }) }

export interface AddVersionArgs { self: TransactionObjectInput; adminCap: TransactionObjectInput; version: bigint | TransactionArgument }

export function addVersion( tx: Transaction, typeArg: string, args: AddVersionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::add_version`, typeArguments: [typeArg], arguments: [ obj(tx, args.self), obj(tx, args.adminCap), pure(tx, args.version, `u64`) ], }) }

export interface RemoveVersionArgs { self: TransactionObjectInput; adminCap: TransactionObjectInput; version: bigint | TransactionArgument }

export function removeVersion( tx: Transaction, typeArg: string, args: RemoveVersionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::remove_version`, typeArguments: [typeArg], arguments: [ obj(tx, args.self), obj(tx, args.adminCap), pure(tx, args.version, `u64`) ], }) }

export interface UpdateDurationArgs { self: TransactionObjectInput; adminCap: TransactionObjectInput; minDuration: bigint | TransactionArgument; maxDuration: bigint | TransactionArgument }

export function updateDuration( tx: Transaction, typeArg: string, args: UpdateDurationArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::update_duration`, typeArguments: [typeArg], arguments: [ obj(tx, args.self), obj(tx, args.adminCap), pure(tx, args.minDuration, `u64`), pure(tx, args.maxDuration, `u64`) ], }) }

export interface UpdateMinReturnPercentageRateArgs { self: TransactionObjectInput; adminCap: TransactionObjectInput; minReturnPercentageRate: number | TransactionArgument }

export function updateMinReturnPercentageRate( tx: Transaction, typeArg: string, args: UpdateMinReturnPercentageRateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::update_min_return_percentage_rate`, typeArguments: [typeArg], arguments: [ obj(tx, args.self), obj(tx, args.adminCap), pure(tx, args.minReturnPercentageRate, `u8`) ], }) }

export interface WithdrawPenaltyFeeArgs { self: TransactionObjectInput; cap: TransactionObjectInput; value: bigint | TransactionArgument }

export function withdrawPenaltyFee( tx: Transaction, typeArg: string, args: WithdrawPenaltyFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::withdraw_penalty_fee`, typeArguments: [typeArg], arguments: [ obj(tx, args.self), obj(tx, args.cap), pure(tx, args.value, `u64`) ], }) }

export interface DefaultArgs { cap: TransactionObjectInput; minUnlockingPeriod: bigint | TransactionArgument; maxUnlockingPeriod: bigint | TransactionArgument; minReturnPercentageRate: number | TransactionArgument }

export function default_( tx: Transaction, typeArg: string, args: DefaultArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::default`, typeArguments: [typeArg], arguments: [ obj(tx, args.cap), pure(tx, args.minUnlockingPeriod, `u64`), pure(tx, args.maxUnlockingPeriod, `u64`), pure(tx, args.minReturnPercentageRate, `u8`) ], }) }

export interface NewArgs { cap: TransactionObjectInput; minUnlockingDuration: bigint | TransactionArgument; maxUnlockingDuration: bigint | TransactionArgument; minReturnPercentageRate: number | TransactionArgument }

export function new_( tx: Transaction, typeArg: string, args: NewArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::new`, typeArguments: [typeArg], arguments: [ obj(tx, args.cap), pure(tx, args.minUnlockingDuration, `u64`), pure(tx, args.maxUnlockingDuration, `u64`), pure(tx, args.minReturnPercentageRate, `u8`) ], }) }

export interface LockArgs { self: TransactionObjectInput; lockedBalance: TransactionObjectInput; recipient: string | TransactionArgument }

export function lock( tx: Transaction, typeArg: string, args: LockArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::lock`, typeArguments: [typeArg], arguments: [ obj(tx, args.self), obj(tx, args.lockedBalance), pure(tx, args.recipient, `address`) ], }) }

export interface RequestUnlockArgs { self: TransactionObjectInput; deToken: TransactionObjectInput; value: bigint | TransactionArgument; unlockedDuration: bigint | TransactionArgument; clock: TransactionObjectInput }

export function requestUnlock( tx: Transaction, typeArg: string, args: RequestUnlockArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::request_unlock`, typeArguments: [typeArg], arguments: [ obj(tx, args.self), obj(tx, args.deToken), pure(tx, args.value, `u64`), pure(tx, args.unlockedDuration, `u64`), obj(tx, args.clock) ], }) }

export interface CancelUnlockRequestArgs { self: TransactionObjectInput; deToken: TransactionObjectInput; idx: bigint | TransactionArgument; clock: TransactionObjectInput }

export function cancelUnlockRequest( tx: Transaction, typeArg: string, args: CancelUnlockRequestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::cancel_unlock_request`, typeArguments: [typeArg], arguments: [ obj(tx, args.self), obj(tx, args.deToken), pure(tx, args.idx, `u64`), obj(tx, args.clock) ], }) }

export interface ClaimArgs { self: TransactionObjectInput; deToken: TransactionObjectInput; idx: bigint | TransactionArgument; clock: TransactionObjectInput }

export function claim( tx: Transaction, typeArg: string, args: ClaimArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::claim`, typeArguments: [typeArg], arguments: [ obj(tx, args.self), obj(tx, args.deToken), pure(tx, args.idx, `u64`), obj(tx, args.clock) ], }) }

export interface BurnArgs { self: TransactionObjectInput; deToken: TransactionObjectInput }

export function burn( tx: Transaction, typeArg: string, args: BurnArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::burn`, typeArguments: [typeArg], arguments: [ obj(tx, args.self), obj(tx, args.deToken) ], }) }

export function assertVersion( tx: Transaction, typeArg: string, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::de_center::assert_version`, typeArguments: [typeArg], arguments: [ obj(tx, self) ], }) }
