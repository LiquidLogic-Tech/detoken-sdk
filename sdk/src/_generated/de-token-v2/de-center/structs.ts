import {TypeName} from "../../_dependencies/source/0x1/type-name/structs";
import {Balance} from "../../_dependencies/source/0x2/balance/structs";
import {ID, UID} from "../../_dependencies/source/0x2/object/structs";
import {VecMap} from "../../_dependencies/source/0x2/vec-map/structs";
import {VecSet} from "../../_dependencies/source/0x2/vec-set/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== AdminCap =============================== */

export function isAdminCap(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::de_center::AdminCap`; }

export interface AdminCapFields { id: ToField<UID>; registry: ToField<VecMap<TypeName, ID>> }

export type AdminCapReified = Reified< AdminCap, AdminCapFields >;

export class AdminCap implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::de_center::AdminCap`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = AdminCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::de_center::AdminCap`; readonly $typeArgs: []; readonly $isPhantom = AdminCap.$isPhantom;

 readonly id: ToField<UID>; readonly registry: ToField<VecMap<TypeName, ID>>

 private constructor(typeArgs: [], fields: AdminCapFields, ) { this.$fullTypeName = composeSuiType( AdminCap.$typeName, ...typeArgs ) as `${typeof PKG_V1}::de_center::AdminCap`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.registry = fields.registry; }

 static reified( ): AdminCapReified { const reifiedBcs = AdminCap.bcs; return { typeName: AdminCap.$typeName, fullTypeName: composeSuiType( AdminCap.$typeName, ...[] ) as `${typeof PKG_V1}::de_center::AdminCap`, typeArgs: [ ] as [], isPhantom: AdminCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AdminCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AdminCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AdminCap.fromFields( reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => AdminCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AdminCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AdminCap.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => AdminCap.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => AdminCap.fetch( client, id, ), new: ( fields: AdminCapFields, ) => { return new AdminCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AdminCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AdminCap>> { return phantom(AdminCap.reified( )); } static get p() { return AdminCap.phantom() }

 private static instantiateBcs() { return bcs.struct("AdminCap", {

 id: UID.bcs, registry: VecMap.bcs(TypeName.bcs, ID.bcs)

}) };

 private static cachedBcs: ReturnType<typeof AdminCap.instantiateBcs> | null = null;

 static get bcs() { if (!AdminCap.cachedBcs) { AdminCap.cachedBcs = AdminCap.instantiateBcs() } return AdminCap.cachedBcs };

 static fromFields( fields: Record<string, any> ): AdminCap { return AdminCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), registry: decodeFromFields(VecMap.reified(TypeName.reified(), ID.reified()), fields.registry) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AdminCap { if (!isAdminCap(item.type)) { throw new Error("not a AdminCap type");

 }

 return AdminCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), registry: decodeFromFieldsWithTypes(VecMap.reified(TypeName.reified(), ID.reified()), item.fields.registry) } ) }

 static fromBcs( data: Uint8Array ): AdminCap { return AdminCap.fromFields( AdminCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,registry: this.registry.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AdminCap { return AdminCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), registry: decodeFromJSONField(VecMap.reified(TypeName.reified(), ID.reified()), field.registry) } ) }

 static fromJSON( json: Record<string, any> ): AdminCap { if (json.$typeName !== AdminCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AdminCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AdminCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAdminCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AdminCap object`); } return AdminCap.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): AdminCap { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isAdminCap(data.bcs.type)) { throw new Error(`object at is not a AdminCap object`); }

 return AdminCap.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return AdminCap.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<AdminCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AdminCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAdminCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AdminCap object`); }

 return AdminCap.fromSuiObjectData( res.data ); }

 }

/* ============================== LockedConfig =============================== */

export function isLockedConfig(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::de_center::LockedConfig`; }

export interface LockedConfigFields { minDuration: ToField<"u64">; maxDuration: ToField<"u64">; minReturnPercentageRate: ToField<"u8"> }

export type LockedConfigReified = Reified< LockedConfig, LockedConfigFields >;

export class LockedConfig implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::de_center::LockedConfig`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = LockedConfig.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::de_center::LockedConfig`; readonly $typeArgs: []; readonly $isPhantom = LockedConfig.$isPhantom;

 readonly minDuration: ToField<"u64">; readonly maxDuration: ToField<"u64">; readonly minReturnPercentageRate: ToField<"u8">

 private constructor(typeArgs: [], fields: LockedConfigFields, ) { this.$fullTypeName = composeSuiType( LockedConfig.$typeName, ...typeArgs ) as `${typeof PKG_V1}::de_center::LockedConfig`; this.$typeArgs = typeArgs;

 this.minDuration = fields.minDuration;; this.maxDuration = fields.maxDuration;; this.minReturnPercentageRate = fields.minReturnPercentageRate; }

 static reified( ): LockedConfigReified { const reifiedBcs = LockedConfig.bcs; return { typeName: LockedConfig.$typeName, fullTypeName: composeSuiType( LockedConfig.$typeName, ...[] ) as `${typeof PKG_V1}::de_center::LockedConfig`, typeArgs: [ ] as [], isPhantom: LockedConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => LockedConfig.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => LockedConfig.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => LockedConfig.fromFields( reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => LockedConfig.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => LockedConfig.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => LockedConfig.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => LockedConfig.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => LockedConfig.fetch( client, id, ), new: ( fields: LockedConfigFields, ) => { return new LockedConfig( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return LockedConfig.reified() }

 static phantom( ): PhantomReified<ToTypeStr<LockedConfig>> { return phantom(LockedConfig.reified( )); } static get p() { return LockedConfig.phantom() }

 private static instantiateBcs() { return bcs.struct("LockedConfig", {

 min_duration: bcs.u64(), max_duration: bcs.u64(), min_return_percentage_rate: bcs.u8()

}) };

 private static cachedBcs: ReturnType<typeof LockedConfig.instantiateBcs> | null = null;

 static get bcs() { if (!LockedConfig.cachedBcs) { LockedConfig.cachedBcs = LockedConfig.instantiateBcs() } return LockedConfig.cachedBcs };

 static fromFields( fields: Record<string, any> ): LockedConfig { return LockedConfig.reified( ).new( { minDuration: decodeFromFields("u64", fields.min_duration), maxDuration: decodeFromFields("u64", fields.max_duration), minReturnPercentageRate: decodeFromFields("u8", fields.min_return_percentage_rate) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): LockedConfig { if (!isLockedConfig(item.type)) { throw new Error("not a LockedConfig type");

 }

 return LockedConfig.reified( ).new( { minDuration: decodeFromFieldsWithTypes("u64", item.fields.min_duration), maxDuration: decodeFromFieldsWithTypes("u64", item.fields.max_duration), minReturnPercentageRate: decodeFromFieldsWithTypes("u8", item.fields.min_return_percentage_rate) } ) }

 static fromBcs( data: Uint8Array ): LockedConfig { return LockedConfig.fromFields( LockedConfig.bcs.parse(data) ) }

 toJSONField() { return {

 minDuration: this.minDuration.toString(),maxDuration: this.maxDuration.toString(),minReturnPercentageRate: this.minReturnPercentageRate,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): LockedConfig { return LockedConfig.reified( ).new( { minDuration: decodeFromJSONField("u64", field.minDuration), maxDuration: decodeFromJSONField("u64", field.maxDuration), minReturnPercentageRate: decodeFromJSONField("u8", field.minReturnPercentageRate) } ) }

 static fromJSON( json: Record<string, any> ): LockedConfig { if (json.$typeName !== LockedConfig.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return LockedConfig.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): LockedConfig { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLockedConfig(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LockedConfig object`); } return LockedConfig.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): LockedConfig { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isLockedConfig(data.bcs.type)) { throw new Error(`object at is not a LockedConfig object`); }

 return LockedConfig.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return LockedConfig.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<LockedConfig> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LockedConfig object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLockedConfig(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LockedConfig object`); }

 return LockedConfig.fromSuiObjectData( res.data ); }

 }

/* ============================== DeCenter =============================== */

export function isDeCenter(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::de_center::DeCenter` + '<'); }

export interface DeCenterFields<T extends PhantomTypeArgument> { id: ToField<UID>; versions: ToField<VecSet<"u64">>; config: ToField<LockedConfig>; mintedEscrow: ToField<"u64">; lockedTotal: ToField<"u64">; unlockingTotal: ToField<"u64">; penaltyFeeBalance: ToField<Balance<T>> }

export type DeCenterReified<T extends PhantomTypeArgument> = Reified< DeCenter<T>, DeCenterFields<T> >;

export class DeCenter<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::de_center::DeCenter`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = DeCenter.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::de_center::DeCenter<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = DeCenter.$isPhantom;

 readonly id: ToField<UID>; readonly versions: ToField<VecSet<"u64">>; readonly config: ToField<LockedConfig>; readonly mintedEscrow: ToField<"u64">; readonly lockedTotal: ToField<"u64">; readonly unlockingTotal: ToField<"u64">; readonly penaltyFeeBalance: ToField<Balance<T>>

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: DeCenterFields<T>, ) { this.$fullTypeName = composeSuiType( DeCenter.$typeName, ...typeArgs ) as `${typeof PKG_V1}::de_center::DeCenter<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.versions = fields.versions;; this.config = fields.config;; this.mintedEscrow = fields.mintedEscrow;; this.lockedTotal = fields.lockedTotal;; this.unlockingTotal = fields.unlockingTotal;; this.penaltyFeeBalance = fields.penaltyFeeBalance; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): DeCenterReified<ToPhantomTypeArgument<T>> { const reifiedBcs = DeCenter.bcs; return { typeName: DeCenter.$typeName, fullTypeName: composeSuiType( DeCenter.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::de_center::DeCenter<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: DeCenter.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => DeCenter.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DeCenter.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => DeCenter.fromFields( T, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => DeCenter.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => DeCenter.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => DeCenter.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => DeCenter.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => DeCenter.fetch( client, T, id, ), new: ( fields: DeCenterFields<ToPhantomTypeArgument<T>>, ) => { return new DeCenter( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return DeCenter.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<DeCenter<ToPhantomTypeArgument<T>>>> { return phantom(DeCenter.reified( T )); } static get p() { return DeCenter.phantom }

 private static instantiateBcs() { return bcs.struct("DeCenter", {

 id: UID.bcs, versions: VecSet.bcs(bcs.u64()), config: LockedConfig.bcs, minted_escrow: bcs.u64(), locked_total: bcs.u64(), unlocking_total: bcs.u64(), penalty_fee_balance: Balance.bcs

}) };

 private static cachedBcs: ReturnType<typeof DeCenter.instantiateBcs> | null = null;

 static get bcs() { if (!DeCenter.cachedBcs) { DeCenter.cachedBcs = DeCenter.instantiateBcs() } return DeCenter.cachedBcs };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): DeCenter<ToPhantomTypeArgument<T>> { return DeCenter.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), versions: decodeFromFields(VecSet.reified("u64"), fields.versions), config: decodeFromFields(LockedConfig.reified(), fields.config), mintedEscrow: decodeFromFields("u64", fields.minted_escrow), lockedTotal: decodeFromFields("u64", fields.locked_total), unlockingTotal: decodeFromFields("u64", fields.unlocking_total), penaltyFeeBalance: decodeFromFields(Balance.reified(typeArg), fields.penalty_fee_balance) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): DeCenter<ToPhantomTypeArgument<T>> { if (!isDeCenter(item.type)) { throw new Error("not a DeCenter type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return DeCenter.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), versions: decodeFromFieldsWithTypes(VecSet.reified("u64"), item.fields.versions), config: decodeFromFieldsWithTypes(LockedConfig.reified(), item.fields.config), mintedEscrow: decodeFromFieldsWithTypes("u64", item.fields.minted_escrow), lockedTotal: decodeFromFieldsWithTypes("u64", item.fields.locked_total), unlockingTotal: decodeFromFieldsWithTypes("u64", item.fields.unlocking_total), penaltyFeeBalance: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.penalty_fee_balance) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): DeCenter<ToPhantomTypeArgument<T>> { return DeCenter.fromFields( typeArg, DeCenter.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,versions: this.versions.toJSONField(),config: this.config.toJSONField(),mintedEscrow: this.mintedEscrow.toString(),lockedTotal: this.lockedTotal.toString(),unlockingTotal: this.unlockingTotal.toString(),penaltyFeeBalance: this.penaltyFeeBalance.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): DeCenter<ToPhantomTypeArgument<T>> { return DeCenter.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), versions: decodeFromJSONField(VecSet.reified("u64"), field.versions), config: decodeFromJSONField(LockedConfig.reified(), field.config), mintedEscrow: decodeFromJSONField("u64", field.mintedEscrow), lockedTotal: decodeFromJSONField("u64", field.lockedTotal), unlockingTotal: decodeFromJSONField("u64", field.unlockingTotal), penaltyFeeBalance: decodeFromJSONField(Balance.reified(typeArg), field.penaltyFeeBalance) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): DeCenter<ToPhantomTypeArgument<T>> { if (json.$typeName !== DeCenter.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(DeCenter.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return DeCenter.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): DeCenter<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDeCenter(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DeCenter object`); } return DeCenter.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): DeCenter<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDeCenter(data.bcs.type)) { throw new Error(`object at is not a DeCenter object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return DeCenter.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DeCenter.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<DeCenter<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DeCenter object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDeCenter(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DeCenter object`); }

 return DeCenter.fromSuiObjectData( typeArg, res.data ); }

 }
