import {ID} from "../../_dependencies/source/0x2/object/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== NewCenterEvent =============================== */

export function isNewCenterEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::events::NewCenterEvent` + '<'); }

export interface NewCenterEventFields<T extends PhantomTypeArgument> { id: ToField<ID>; minUnlockingDuration: ToField<"u64">; maxUnlockingDuration: ToField<"u64">; basePercentage: ToField<"u8"> }

export type NewCenterEventReified<T extends PhantomTypeArgument> = Reified< NewCenterEvent<T>, NewCenterEventFields<T> >;

export class NewCenterEvent<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::NewCenterEvent`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = NewCenterEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::NewCenterEvent<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = NewCenterEvent.$isPhantom;

 readonly id: ToField<ID>; readonly minUnlockingDuration: ToField<"u64">; readonly maxUnlockingDuration: ToField<"u64">; readonly basePercentage: ToField<"u8">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: NewCenterEventFields<T>, ) { this.$fullTypeName = composeSuiType( NewCenterEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::NewCenterEvent<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.minUnlockingDuration = fields.minUnlockingDuration;; this.maxUnlockingDuration = fields.maxUnlockingDuration;; this.basePercentage = fields.basePercentage; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): NewCenterEventReified<ToPhantomTypeArgument<T>> { const reifiedBcs = NewCenterEvent.bcs; return { typeName: NewCenterEvent.$typeName, fullTypeName: composeSuiType( NewCenterEvent.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::events::NewCenterEvent<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: NewCenterEvent.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => NewCenterEvent.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NewCenterEvent.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => NewCenterEvent.fromFields( T, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => NewCenterEvent.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => NewCenterEvent.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => NewCenterEvent.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => NewCenterEvent.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => NewCenterEvent.fetch( client, T, id, ), new: ( fields: NewCenterEventFields<ToPhantomTypeArgument<T>>, ) => { return new NewCenterEvent( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return NewCenterEvent.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<NewCenterEvent<ToPhantomTypeArgument<T>>>> { return phantom(NewCenterEvent.reified( T )); } static get p() { return NewCenterEvent.phantom }

 private static instantiateBcs() { return bcs.struct("NewCenterEvent", {

 id: ID.bcs, min_unlocking_duration: bcs.u64(), max_unlocking_duration: bcs.u64(), base_percentage: bcs.u8()

}) };

 private static cachedBcs: ReturnType<typeof NewCenterEvent.instantiateBcs> | null = null;

 static get bcs() { if (!NewCenterEvent.cachedBcs) { NewCenterEvent.cachedBcs = NewCenterEvent.instantiateBcs() } return NewCenterEvent.cachedBcs };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): NewCenterEvent<ToPhantomTypeArgument<T>> { return NewCenterEvent.reified( typeArg, ).new( { id: decodeFromFields(ID.reified(), fields.id), minUnlockingDuration: decodeFromFields("u64", fields.min_unlocking_duration), maxUnlockingDuration: decodeFromFields("u64", fields.max_unlocking_duration), basePercentage: decodeFromFields("u8", fields.base_percentage) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): NewCenterEvent<ToPhantomTypeArgument<T>> { if (!isNewCenterEvent(item.type)) { throw new Error("not a NewCenterEvent type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return NewCenterEvent.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id), minUnlockingDuration: decodeFromFieldsWithTypes("u64", item.fields.min_unlocking_duration), maxUnlockingDuration: decodeFromFieldsWithTypes("u64", item.fields.max_unlocking_duration), basePercentage: decodeFromFieldsWithTypes("u8", item.fields.base_percentage) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): NewCenterEvent<ToPhantomTypeArgument<T>> { return NewCenterEvent.fromFields( typeArg, NewCenterEvent.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,minUnlockingDuration: this.minUnlockingDuration.toString(),maxUnlockingDuration: this.maxUnlockingDuration.toString(),basePercentage: this.basePercentage,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): NewCenterEvent<ToPhantomTypeArgument<T>> { return NewCenterEvent.reified( typeArg, ).new( { id: decodeFromJSONField(ID.reified(), field.id), minUnlockingDuration: decodeFromJSONField("u64", field.minUnlockingDuration), maxUnlockingDuration: decodeFromJSONField("u64", field.maxUnlockingDuration), basePercentage: decodeFromJSONField("u8", field.basePercentage) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): NewCenterEvent<ToPhantomTypeArgument<T>> { if (json.$typeName !== NewCenterEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(NewCenterEvent.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return NewCenterEvent.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): NewCenterEvent<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewCenterEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewCenterEvent object`); } return NewCenterEvent.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): NewCenterEvent<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isNewCenterEvent(data.bcs.type)) { throw new Error(`object at is not a NewCenterEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return NewCenterEvent.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return NewCenterEvent.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<NewCenterEvent<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewCenterEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewCenterEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewCenterEvent object`); }

 return NewCenterEvent.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== UpdateDuration =============================== */

export function isUpdateDuration(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::events::UpdateDuration` + '<'); }

export interface UpdateDurationFields<T extends PhantomTypeArgument> { deCenterId: ToField<ID>; minDuration: ToField<"u64">; maxDuration: ToField<"u64"> }

export type UpdateDurationReified<T extends PhantomTypeArgument> = Reified< UpdateDuration<T>, UpdateDurationFields<T> >;

export class UpdateDuration<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::UpdateDuration`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = UpdateDuration.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::UpdateDuration<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = UpdateDuration.$isPhantom;

 readonly deCenterId: ToField<ID>; readonly minDuration: ToField<"u64">; readonly maxDuration: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: UpdateDurationFields<T>, ) { this.$fullTypeName = composeSuiType( UpdateDuration.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::UpdateDuration<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.deCenterId = fields.deCenterId;; this.minDuration = fields.minDuration;; this.maxDuration = fields.maxDuration; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): UpdateDurationReified<ToPhantomTypeArgument<T>> { const reifiedBcs = UpdateDuration.bcs; return { typeName: UpdateDuration.$typeName, fullTypeName: composeSuiType( UpdateDuration.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::events::UpdateDuration<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: UpdateDuration.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => UpdateDuration.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateDuration.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => UpdateDuration.fromFields( T, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => UpdateDuration.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => UpdateDuration.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => UpdateDuration.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => UpdateDuration.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => UpdateDuration.fetch( client, T, id, ), new: ( fields: UpdateDurationFields<ToPhantomTypeArgument<T>>, ) => { return new UpdateDuration( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return UpdateDuration.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<UpdateDuration<ToPhantomTypeArgument<T>>>> { return phantom(UpdateDuration.reified( T )); } static get p() { return UpdateDuration.phantom }

 private static instantiateBcs() { return bcs.struct("UpdateDuration", {

 de_center_id: ID.bcs, min_duration: bcs.u64(), max_duration: bcs.u64()

}) };

 private static cachedBcs: ReturnType<typeof UpdateDuration.instantiateBcs> | null = null;

 static get bcs() { if (!UpdateDuration.cachedBcs) { UpdateDuration.cachedBcs = UpdateDuration.instantiateBcs() } return UpdateDuration.cachedBcs };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): UpdateDuration<ToPhantomTypeArgument<T>> { return UpdateDuration.reified( typeArg, ).new( { deCenterId: decodeFromFields(ID.reified(), fields.de_center_id), minDuration: decodeFromFields("u64", fields.min_duration), maxDuration: decodeFromFields("u64", fields.max_duration) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): UpdateDuration<ToPhantomTypeArgument<T>> { if (!isUpdateDuration(item.type)) { throw new Error("not a UpdateDuration type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return UpdateDuration.reified( typeArg, ).new( { deCenterId: decodeFromFieldsWithTypes(ID.reified(), item.fields.de_center_id), minDuration: decodeFromFieldsWithTypes("u64", item.fields.min_duration), maxDuration: decodeFromFieldsWithTypes("u64", item.fields.max_duration) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): UpdateDuration<ToPhantomTypeArgument<T>> { return UpdateDuration.fromFields( typeArg, UpdateDuration.bcs.parse(data) ) }

 toJSONField() { return {

 deCenterId: this.deCenterId,minDuration: this.minDuration.toString(),maxDuration: this.maxDuration.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): UpdateDuration<ToPhantomTypeArgument<T>> { return UpdateDuration.reified( typeArg, ).new( { deCenterId: decodeFromJSONField(ID.reified(), field.deCenterId), minDuration: decodeFromJSONField("u64", field.minDuration), maxDuration: decodeFromJSONField("u64", field.maxDuration) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): UpdateDuration<ToPhantomTypeArgument<T>> { if (json.$typeName !== UpdateDuration.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(UpdateDuration.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return UpdateDuration.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): UpdateDuration<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUpdateDuration(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UpdateDuration object`); } return UpdateDuration.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): UpdateDuration<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUpdateDuration(data.bcs.type)) { throw new Error(`object at is not a UpdateDuration object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return UpdateDuration.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UpdateDuration.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<UpdateDuration<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UpdateDuration object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateDuration(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UpdateDuration object`); }

 return UpdateDuration.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== UpdateMinReturnPercentageRate =============================== */

export function isUpdateMinReturnPercentageRate(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::events::UpdateMinReturnPercentageRate` + '<'); }

export interface UpdateMinReturnPercentageRateFields<T extends PhantomTypeArgument> { deCenterId: ToField<ID>; minReturnPercentageRate: ToField<"u8"> }

export type UpdateMinReturnPercentageRateReified<T extends PhantomTypeArgument> = Reified< UpdateMinReturnPercentageRate<T>, UpdateMinReturnPercentageRateFields<T> >;

export class UpdateMinReturnPercentageRate<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::UpdateMinReturnPercentageRate`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = UpdateMinReturnPercentageRate.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::UpdateMinReturnPercentageRate<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = UpdateMinReturnPercentageRate.$isPhantom;

 readonly deCenterId: ToField<ID>; readonly minReturnPercentageRate: ToField<"u8">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: UpdateMinReturnPercentageRateFields<T>, ) { this.$fullTypeName = composeSuiType( UpdateMinReturnPercentageRate.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::UpdateMinReturnPercentageRate<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.deCenterId = fields.deCenterId;; this.minReturnPercentageRate = fields.minReturnPercentageRate; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): UpdateMinReturnPercentageRateReified<ToPhantomTypeArgument<T>> { const reifiedBcs = UpdateMinReturnPercentageRate.bcs; return { typeName: UpdateMinReturnPercentageRate.$typeName, fullTypeName: composeSuiType( UpdateMinReturnPercentageRate.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::events::UpdateMinReturnPercentageRate<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: UpdateMinReturnPercentageRate.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => UpdateMinReturnPercentageRate.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateMinReturnPercentageRate.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => UpdateMinReturnPercentageRate.fromFields( T, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => UpdateMinReturnPercentageRate.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => UpdateMinReturnPercentageRate.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => UpdateMinReturnPercentageRate.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => UpdateMinReturnPercentageRate.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => UpdateMinReturnPercentageRate.fetch( client, T, id, ), new: ( fields: UpdateMinReturnPercentageRateFields<ToPhantomTypeArgument<T>>, ) => { return new UpdateMinReturnPercentageRate( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return UpdateMinReturnPercentageRate.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<UpdateMinReturnPercentageRate<ToPhantomTypeArgument<T>>>> { return phantom(UpdateMinReturnPercentageRate.reified( T )); } static get p() { return UpdateMinReturnPercentageRate.phantom }

 private static instantiateBcs() { return bcs.struct("UpdateMinReturnPercentageRate", {

 de_center_id: ID.bcs, min_return_percentage_rate: bcs.u8()

}) };

 private static cachedBcs: ReturnType<typeof UpdateMinReturnPercentageRate.instantiateBcs> | null = null;

 static get bcs() { if (!UpdateMinReturnPercentageRate.cachedBcs) { UpdateMinReturnPercentageRate.cachedBcs = UpdateMinReturnPercentageRate.instantiateBcs() } return UpdateMinReturnPercentageRate.cachedBcs };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): UpdateMinReturnPercentageRate<ToPhantomTypeArgument<T>> { return UpdateMinReturnPercentageRate.reified( typeArg, ).new( { deCenterId: decodeFromFields(ID.reified(), fields.de_center_id), minReturnPercentageRate: decodeFromFields("u8", fields.min_return_percentage_rate) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): UpdateMinReturnPercentageRate<ToPhantomTypeArgument<T>> { if (!isUpdateMinReturnPercentageRate(item.type)) { throw new Error("not a UpdateMinReturnPercentageRate type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return UpdateMinReturnPercentageRate.reified( typeArg, ).new( { deCenterId: decodeFromFieldsWithTypes(ID.reified(), item.fields.de_center_id), minReturnPercentageRate: decodeFromFieldsWithTypes("u8", item.fields.min_return_percentage_rate) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): UpdateMinReturnPercentageRate<ToPhantomTypeArgument<T>> { return UpdateMinReturnPercentageRate.fromFields( typeArg, UpdateMinReturnPercentageRate.bcs.parse(data) ) }

 toJSONField() { return {

 deCenterId: this.deCenterId,minReturnPercentageRate: this.minReturnPercentageRate,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): UpdateMinReturnPercentageRate<ToPhantomTypeArgument<T>> { return UpdateMinReturnPercentageRate.reified( typeArg, ).new( { deCenterId: decodeFromJSONField(ID.reified(), field.deCenterId), minReturnPercentageRate: decodeFromJSONField("u8", field.minReturnPercentageRate) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): UpdateMinReturnPercentageRate<ToPhantomTypeArgument<T>> { if (json.$typeName !== UpdateMinReturnPercentageRate.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(UpdateMinReturnPercentageRate.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return UpdateMinReturnPercentageRate.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): UpdateMinReturnPercentageRate<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUpdateMinReturnPercentageRate(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UpdateMinReturnPercentageRate object`); } return UpdateMinReturnPercentageRate.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): UpdateMinReturnPercentageRate<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUpdateMinReturnPercentageRate(data.bcs.type)) { throw new Error(`object at is not a UpdateMinReturnPercentageRate object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return UpdateMinReturnPercentageRate.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UpdateMinReturnPercentageRate.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<UpdateMinReturnPercentageRate<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UpdateMinReturnPercentageRate object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateMinReturnPercentageRate(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UpdateMinReturnPercentageRate object`); }

 return UpdateMinReturnPercentageRate.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== WithdrawPenaltyFee =============================== */

export function isWithdrawPenaltyFee(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::events::WithdrawPenaltyFee` + '<'); }

export interface WithdrawPenaltyFeeFields<T extends PhantomTypeArgument> { deCenterId: ToField<ID>; value: ToField<"u64"> }

export type WithdrawPenaltyFeeReified<T extends PhantomTypeArgument> = Reified< WithdrawPenaltyFee<T>, WithdrawPenaltyFeeFields<T> >;

export class WithdrawPenaltyFee<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::WithdrawPenaltyFee`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = WithdrawPenaltyFee.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::WithdrawPenaltyFee<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = WithdrawPenaltyFee.$isPhantom;

 readonly deCenterId: ToField<ID>; readonly value: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: WithdrawPenaltyFeeFields<T>, ) { this.$fullTypeName = composeSuiType( WithdrawPenaltyFee.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::WithdrawPenaltyFee<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.deCenterId = fields.deCenterId;; this.value = fields.value; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): WithdrawPenaltyFeeReified<ToPhantomTypeArgument<T>> { const reifiedBcs = WithdrawPenaltyFee.bcs; return { typeName: WithdrawPenaltyFee.$typeName, fullTypeName: composeSuiType( WithdrawPenaltyFee.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::events::WithdrawPenaltyFee<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: WithdrawPenaltyFee.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => WithdrawPenaltyFee.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => WithdrawPenaltyFee.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => WithdrawPenaltyFee.fromFields( T, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => WithdrawPenaltyFee.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => WithdrawPenaltyFee.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => WithdrawPenaltyFee.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => WithdrawPenaltyFee.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => WithdrawPenaltyFee.fetch( client, T, id, ), new: ( fields: WithdrawPenaltyFeeFields<ToPhantomTypeArgument<T>>, ) => { return new WithdrawPenaltyFee( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return WithdrawPenaltyFee.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<WithdrawPenaltyFee<ToPhantomTypeArgument<T>>>> { return phantom(WithdrawPenaltyFee.reified( T )); } static get p() { return WithdrawPenaltyFee.phantom }

 private static instantiateBcs() { return bcs.struct("WithdrawPenaltyFee", {

 de_center_id: ID.bcs, value: bcs.u64()

}) };

 private static cachedBcs: ReturnType<typeof WithdrawPenaltyFee.instantiateBcs> | null = null;

 static get bcs() { if (!WithdrawPenaltyFee.cachedBcs) { WithdrawPenaltyFee.cachedBcs = WithdrawPenaltyFee.instantiateBcs() } return WithdrawPenaltyFee.cachedBcs };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): WithdrawPenaltyFee<ToPhantomTypeArgument<T>> { return WithdrawPenaltyFee.reified( typeArg, ).new( { deCenterId: decodeFromFields(ID.reified(), fields.de_center_id), value: decodeFromFields("u64", fields.value) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): WithdrawPenaltyFee<ToPhantomTypeArgument<T>> { if (!isWithdrawPenaltyFee(item.type)) { throw new Error("not a WithdrawPenaltyFee type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return WithdrawPenaltyFee.reified( typeArg, ).new( { deCenterId: decodeFromFieldsWithTypes(ID.reified(), item.fields.de_center_id), value: decodeFromFieldsWithTypes("u64", item.fields.value) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): WithdrawPenaltyFee<ToPhantomTypeArgument<T>> { return WithdrawPenaltyFee.fromFields( typeArg, WithdrawPenaltyFee.bcs.parse(data) ) }

 toJSONField() { return {

 deCenterId: this.deCenterId,value: this.value.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): WithdrawPenaltyFee<ToPhantomTypeArgument<T>> { return WithdrawPenaltyFee.reified( typeArg, ).new( { deCenterId: decodeFromJSONField(ID.reified(), field.deCenterId), value: decodeFromJSONField("u64", field.value) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): WithdrawPenaltyFee<ToPhantomTypeArgument<T>> { if (json.$typeName !== WithdrawPenaltyFee.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(WithdrawPenaltyFee.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return WithdrawPenaltyFee.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): WithdrawPenaltyFee<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isWithdrawPenaltyFee(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a WithdrawPenaltyFee object`); } return WithdrawPenaltyFee.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): WithdrawPenaltyFee<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isWithdrawPenaltyFee(data.bcs.type)) { throw new Error(`object at is not a WithdrawPenaltyFee object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return WithdrawPenaltyFee.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return WithdrawPenaltyFee.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<WithdrawPenaltyFee<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching WithdrawPenaltyFee object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isWithdrawPenaltyFee(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a WithdrawPenaltyFee object`); }

 return WithdrawPenaltyFee.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== LockEvent =============================== */

export function isLockEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::events::LockEvent` + '<'); }

export interface LockEventFields<T extends PhantomTypeArgument> { deTokenId: ToField<ID>; lockedBalance: ToField<"u64"> }

export type LockEventReified<T extends PhantomTypeArgument> = Reified< LockEvent<T>, LockEventFields<T> >;

export class LockEvent<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::LockEvent`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = LockEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::LockEvent<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = LockEvent.$isPhantom;

 readonly deTokenId: ToField<ID>; readonly lockedBalance: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: LockEventFields<T>, ) { this.$fullTypeName = composeSuiType( LockEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::LockEvent<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.deTokenId = fields.deTokenId;; this.lockedBalance = fields.lockedBalance; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): LockEventReified<ToPhantomTypeArgument<T>> { const reifiedBcs = LockEvent.bcs; return { typeName: LockEvent.$typeName, fullTypeName: composeSuiType( LockEvent.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::events::LockEvent<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: LockEvent.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => LockEvent.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => LockEvent.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => LockEvent.fromFields( T, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => LockEvent.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => LockEvent.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => LockEvent.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => LockEvent.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => LockEvent.fetch( client, T, id, ), new: ( fields: LockEventFields<ToPhantomTypeArgument<T>>, ) => { return new LockEvent( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return LockEvent.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<LockEvent<ToPhantomTypeArgument<T>>>> { return phantom(LockEvent.reified( T )); } static get p() { return LockEvent.phantom }

 private static instantiateBcs() { return bcs.struct("LockEvent", {

 de_token_id: ID.bcs, locked_balance: bcs.u64()

}) };

 private static cachedBcs: ReturnType<typeof LockEvent.instantiateBcs> | null = null;

 static get bcs() { if (!LockEvent.cachedBcs) { LockEvent.cachedBcs = LockEvent.instantiateBcs() } return LockEvent.cachedBcs };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): LockEvent<ToPhantomTypeArgument<T>> { return LockEvent.reified( typeArg, ).new( { deTokenId: decodeFromFields(ID.reified(), fields.de_token_id), lockedBalance: decodeFromFields("u64", fields.locked_balance) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): LockEvent<ToPhantomTypeArgument<T>> { if (!isLockEvent(item.type)) { throw new Error("not a LockEvent type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return LockEvent.reified( typeArg, ).new( { deTokenId: decodeFromFieldsWithTypes(ID.reified(), item.fields.de_token_id), lockedBalance: decodeFromFieldsWithTypes("u64", item.fields.locked_balance) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): LockEvent<ToPhantomTypeArgument<T>> { return LockEvent.fromFields( typeArg, LockEvent.bcs.parse(data) ) }

 toJSONField() { return {

 deTokenId: this.deTokenId,lockedBalance: this.lockedBalance.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): LockEvent<ToPhantomTypeArgument<T>> { return LockEvent.reified( typeArg, ).new( { deTokenId: decodeFromJSONField(ID.reified(), field.deTokenId), lockedBalance: decodeFromJSONField("u64", field.lockedBalance) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): LockEvent<ToPhantomTypeArgument<T>> { if (json.$typeName !== LockEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(LockEvent.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return LockEvent.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): LockEvent<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLockEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LockEvent object`); } return LockEvent.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): LockEvent<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isLockEvent(data.bcs.type)) { throw new Error(`object at is not a LockEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return LockEvent.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return LockEvent.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<LockEvent<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LockEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLockEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LockEvent object`); }

 return LockEvent.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== RequestUnlockEvent =============================== */

export function isRequestUnlockEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::events::RequestUnlockEvent` + '<'); }

export interface RequestUnlockEventFields<T extends PhantomTypeArgument> { deTokenId: ToField<ID>; unlockedBalance: ToField<"u64">; unlockedDuration: ToField<"u64">; unlockedAt: ToField<"u64">; timestamp: ToField<"u64"> }

export type RequestUnlockEventReified<T extends PhantomTypeArgument> = Reified< RequestUnlockEvent<T>, RequestUnlockEventFields<T> >;

export class RequestUnlockEvent<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::RequestUnlockEvent`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = RequestUnlockEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::RequestUnlockEvent<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = RequestUnlockEvent.$isPhantom;

 readonly deTokenId: ToField<ID>; readonly unlockedBalance: ToField<"u64">; readonly unlockedDuration: ToField<"u64">; readonly unlockedAt: ToField<"u64">; readonly timestamp: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: RequestUnlockEventFields<T>, ) { this.$fullTypeName = composeSuiType( RequestUnlockEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::RequestUnlockEvent<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.deTokenId = fields.deTokenId;; this.unlockedBalance = fields.unlockedBalance;; this.unlockedDuration = fields.unlockedDuration;; this.unlockedAt = fields.unlockedAt;; this.timestamp = fields.timestamp; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): RequestUnlockEventReified<ToPhantomTypeArgument<T>> { const reifiedBcs = RequestUnlockEvent.bcs; return { typeName: RequestUnlockEvent.$typeName, fullTypeName: composeSuiType( RequestUnlockEvent.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::events::RequestUnlockEvent<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: RequestUnlockEvent.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => RequestUnlockEvent.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RequestUnlockEvent.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => RequestUnlockEvent.fromFields( T, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => RequestUnlockEvent.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => RequestUnlockEvent.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => RequestUnlockEvent.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => RequestUnlockEvent.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => RequestUnlockEvent.fetch( client, T, id, ), new: ( fields: RequestUnlockEventFields<ToPhantomTypeArgument<T>>, ) => { return new RequestUnlockEvent( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return RequestUnlockEvent.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<RequestUnlockEvent<ToPhantomTypeArgument<T>>>> { return phantom(RequestUnlockEvent.reified( T )); } static get p() { return RequestUnlockEvent.phantom }

 private static instantiateBcs() { return bcs.struct("RequestUnlockEvent", {

 de_token_id: ID.bcs, unlocked_balance: bcs.u64(), unlocked_duration: bcs.u64(), unlocked_at: bcs.u64(), timestamp: bcs.u64()

}) };

 private static cachedBcs: ReturnType<typeof RequestUnlockEvent.instantiateBcs> | null = null;

 static get bcs() { if (!RequestUnlockEvent.cachedBcs) { RequestUnlockEvent.cachedBcs = RequestUnlockEvent.instantiateBcs() } return RequestUnlockEvent.cachedBcs };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): RequestUnlockEvent<ToPhantomTypeArgument<T>> { return RequestUnlockEvent.reified( typeArg, ).new( { deTokenId: decodeFromFields(ID.reified(), fields.de_token_id), unlockedBalance: decodeFromFields("u64", fields.unlocked_balance), unlockedDuration: decodeFromFields("u64", fields.unlocked_duration), unlockedAt: decodeFromFields("u64", fields.unlocked_at), timestamp: decodeFromFields("u64", fields.timestamp) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): RequestUnlockEvent<ToPhantomTypeArgument<T>> { if (!isRequestUnlockEvent(item.type)) { throw new Error("not a RequestUnlockEvent type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return RequestUnlockEvent.reified( typeArg, ).new( { deTokenId: decodeFromFieldsWithTypes(ID.reified(), item.fields.de_token_id), unlockedBalance: decodeFromFieldsWithTypes("u64", item.fields.unlocked_balance), unlockedDuration: decodeFromFieldsWithTypes("u64", item.fields.unlocked_duration), unlockedAt: decodeFromFieldsWithTypes("u64", item.fields.unlocked_at), timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): RequestUnlockEvent<ToPhantomTypeArgument<T>> { return RequestUnlockEvent.fromFields( typeArg, RequestUnlockEvent.bcs.parse(data) ) }

 toJSONField() { return {

 deTokenId: this.deTokenId,unlockedBalance: this.unlockedBalance.toString(),unlockedDuration: this.unlockedDuration.toString(),unlockedAt: this.unlockedAt.toString(),timestamp: this.timestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): RequestUnlockEvent<ToPhantomTypeArgument<T>> { return RequestUnlockEvent.reified( typeArg, ).new( { deTokenId: decodeFromJSONField(ID.reified(), field.deTokenId), unlockedBalance: decodeFromJSONField("u64", field.unlockedBalance), unlockedDuration: decodeFromJSONField("u64", field.unlockedDuration), unlockedAt: decodeFromJSONField("u64", field.unlockedAt), timestamp: decodeFromJSONField("u64", field.timestamp) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): RequestUnlockEvent<ToPhantomTypeArgument<T>> { if (json.$typeName !== RequestUnlockEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(RequestUnlockEvent.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return RequestUnlockEvent.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): RequestUnlockEvent<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRequestUnlockEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RequestUnlockEvent object`); } return RequestUnlockEvent.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): RequestUnlockEvent<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRequestUnlockEvent(data.bcs.type)) { throw new Error(`object at is not a RequestUnlockEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return RequestUnlockEvent.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return RequestUnlockEvent.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<RequestUnlockEvent<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RequestUnlockEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRequestUnlockEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RequestUnlockEvent object`); }

 return RequestUnlockEvent.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== CancelUnlocKEvent =============================== */

export function isCancelUnlocKEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::events::CancelUnlocKEvent` + '<'); }

export interface CancelUnlocKEventFields<T extends PhantomTypeArgument> { deTokenId: ToField<ID>; unlockedBalance: ToField<"u64">; unlockedDuration: ToField<"u64">; startAt: ToField<"u64">; unlockedAt: ToField<"u64">; timestamp: ToField<"u64"> }

export type CancelUnlocKEventReified<T extends PhantomTypeArgument> = Reified< CancelUnlocKEvent<T>, CancelUnlocKEventFields<T> >;

export class CancelUnlocKEvent<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::CancelUnlocKEvent`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = CancelUnlocKEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::CancelUnlocKEvent<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = CancelUnlocKEvent.$isPhantom;

 readonly deTokenId: ToField<ID>; readonly unlockedBalance: ToField<"u64">; readonly unlockedDuration: ToField<"u64">; readonly startAt: ToField<"u64">; readonly unlockedAt: ToField<"u64">; readonly timestamp: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: CancelUnlocKEventFields<T>, ) { this.$fullTypeName = composeSuiType( CancelUnlocKEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::CancelUnlocKEvent<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.deTokenId = fields.deTokenId;; this.unlockedBalance = fields.unlockedBalance;; this.unlockedDuration = fields.unlockedDuration;; this.startAt = fields.startAt;; this.unlockedAt = fields.unlockedAt;; this.timestamp = fields.timestamp; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): CancelUnlocKEventReified<ToPhantomTypeArgument<T>> { const reifiedBcs = CancelUnlocKEvent.bcs; return { typeName: CancelUnlocKEvent.$typeName, fullTypeName: composeSuiType( CancelUnlocKEvent.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::events::CancelUnlocKEvent<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: CancelUnlocKEvent.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => CancelUnlocKEvent.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => CancelUnlocKEvent.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => CancelUnlocKEvent.fromFields( T, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => CancelUnlocKEvent.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => CancelUnlocKEvent.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => CancelUnlocKEvent.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => CancelUnlocKEvent.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => CancelUnlocKEvent.fetch( client, T, id, ), new: ( fields: CancelUnlocKEventFields<ToPhantomTypeArgument<T>>, ) => { return new CancelUnlocKEvent( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return CancelUnlocKEvent.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<CancelUnlocKEvent<ToPhantomTypeArgument<T>>>> { return phantom(CancelUnlocKEvent.reified( T )); } static get p() { return CancelUnlocKEvent.phantom }

 private static instantiateBcs() { return bcs.struct("CancelUnlocKEvent", {

 de_token_id: ID.bcs, unlocked_balance: bcs.u64(), unlocked_duration: bcs.u64(), start_at: bcs.u64(), unlocked_at: bcs.u64(), timestamp: bcs.u64()

}) };

 private static cachedBcs: ReturnType<typeof CancelUnlocKEvent.instantiateBcs> | null = null;

 static get bcs() { if (!CancelUnlocKEvent.cachedBcs) { CancelUnlocKEvent.cachedBcs = CancelUnlocKEvent.instantiateBcs() } return CancelUnlocKEvent.cachedBcs };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): CancelUnlocKEvent<ToPhantomTypeArgument<T>> { return CancelUnlocKEvent.reified( typeArg, ).new( { deTokenId: decodeFromFields(ID.reified(), fields.de_token_id), unlockedBalance: decodeFromFields("u64", fields.unlocked_balance), unlockedDuration: decodeFromFields("u64", fields.unlocked_duration), startAt: decodeFromFields("u64", fields.start_at), unlockedAt: decodeFromFields("u64", fields.unlocked_at), timestamp: decodeFromFields("u64", fields.timestamp) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): CancelUnlocKEvent<ToPhantomTypeArgument<T>> { if (!isCancelUnlocKEvent(item.type)) { throw new Error("not a CancelUnlocKEvent type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return CancelUnlocKEvent.reified( typeArg, ).new( { deTokenId: decodeFromFieldsWithTypes(ID.reified(), item.fields.de_token_id), unlockedBalance: decodeFromFieldsWithTypes("u64", item.fields.unlocked_balance), unlockedDuration: decodeFromFieldsWithTypes("u64", item.fields.unlocked_duration), startAt: decodeFromFieldsWithTypes("u64", item.fields.start_at), unlockedAt: decodeFromFieldsWithTypes("u64", item.fields.unlocked_at), timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): CancelUnlocKEvent<ToPhantomTypeArgument<T>> { return CancelUnlocKEvent.fromFields( typeArg, CancelUnlocKEvent.bcs.parse(data) ) }

 toJSONField() { return {

 deTokenId: this.deTokenId,unlockedBalance: this.unlockedBalance.toString(),unlockedDuration: this.unlockedDuration.toString(),startAt: this.startAt.toString(),unlockedAt: this.unlockedAt.toString(),timestamp: this.timestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): CancelUnlocKEvent<ToPhantomTypeArgument<T>> { return CancelUnlocKEvent.reified( typeArg, ).new( { deTokenId: decodeFromJSONField(ID.reified(), field.deTokenId), unlockedBalance: decodeFromJSONField("u64", field.unlockedBalance), unlockedDuration: decodeFromJSONField("u64", field.unlockedDuration), startAt: decodeFromJSONField("u64", field.startAt), unlockedAt: decodeFromJSONField("u64", field.unlockedAt), timestamp: decodeFromJSONField("u64", field.timestamp) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): CancelUnlocKEvent<ToPhantomTypeArgument<T>> { if (json.$typeName !== CancelUnlocKEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(CancelUnlocKEvent.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return CancelUnlocKEvent.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): CancelUnlocKEvent<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCancelUnlocKEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CancelUnlocKEvent object`); } return CancelUnlocKEvent.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): CancelUnlocKEvent<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isCancelUnlocKEvent(data.bcs.type)) { throw new Error(`object at is not a CancelUnlocKEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return CancelUnlocKEvent.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return CancelUnlocKEvent.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<CancelUnlocKEvent<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CancelUnlocKEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCancelUnlocKEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CancelUnlocKEvent object`); }

 return CancelUnlocKEvent.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== ClaimEvent =============================== */

export function isClaimEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::events::ClaimEvent` + '<'); }

export interface ClaimEventFields<T extends PhantomTypeArgument> { deTokenId: ToField<ID>; withdrawal: ToField<"u64">; penalty: ToField<"u64">; startAt: ToField<"u64">; unlockedAt: ToField<"u64">; timestamp: ToField<"u64"> }

export type ClaimEventReified<T extends PhantomTypeArgument> = Reified< ClaimEvent<T>, ClaimEventFields<T> >;

export class ClaimEvent<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::ClaimEvent`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = ClaimEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::ClaimEvent<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = ClaimEvent.$isPhantom;

 readonly deTokenId: ToField<ID>; readonly withdrawal: ToField<"u64">; readonly penalty: ToField<"u64">; readonly startAt: ToField<"u64">; readonly unlockedAt: ToField<"u64">; readonly timestamp: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: ClaimEventFields<T>, ) { this.$fullTypeName = composeSuiType( ClaimEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::ClaimEvent<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.deTokenId = fields.deTokenId;; this.withdrawal = fields.withdrawal;; this.penalty = fields.penalty;; this.startAt = fields.startAt;; this.unlockedAt = fields.unlockedAt;; this.timestamp = fields.timestamp; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): ClaimEventReified<ToPhantomTypeArgument<T>> { const reifiedBcs = ClaimEvent.bcs; return { typeName: ClaimEvent.$typeName, fullTypeName: composeSuiType( ClaimEvent.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::events::ClaimEvent<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: ClaimEvent.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => ClaimEvent.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ClaimEvent.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => ClaimEvent.fromFields( T, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => ClaimEvent.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => ClaimEvent.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => ClaimEvent.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => ClaimEvent.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => ClaimEvent.fetch( client, T, id, ), new: ( fields: ClaimEventFields<ToPhantomTypeArgument<T>>, ) => { return new ClaimEvent( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return ClaimEvent.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<ClaimEvent<ToPhantomTypeArgument<T>>>> { return phantom(ClaimEvent.reified( T )); } static get p() { return ClaimEvent.phantom }

 private static instantiateBcs() { return bcs.struct("ClaimEvent", {

 de_token_id: ID.bcs, withdrawal: bcs.u64(), penalty: bcs.u64(), start_at: bcs.u64(), unlocked_at: bcs.u64(), timestamp: bcs.u64()

}) };

 private static cachedBcs: ReturnType<typeof ClaimEvent.instantiateBcs> | null = null;

 static get bcs() { if (!ClaimEvent.cachedBcs) { ClaimEvent.cachedBcs = ClaimEvent.instantiateBcs() } return ClaimEvent.cachedBcs };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): ClaimEvent<ToPhantomTypeArgument<T>> { return ClaimEvent.reified( typeArg, ).new( { deTokenId: decodeFromFields(ID.reified(), fields.de_token_id), withdrawal: decodeFromFields("u64", fields.withdrawal), penalty: decodeFromFields("u64", fields.penalty), startAt: decodeFromFields("u64", fields.start_at), unlockedAt: decodeFromFields("u64", fields.unlocked_at), timestamp: decodeFromFields("u64", fields.timestamp) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): ClaimEvent<ToPhantomTypeArgument<T>> { if (!isClaimEvent(item.type)) { throw new Error("not a ClaimEvent type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return ClaimEvent.reified( typeArg, ).new( { deTokenId: decodeFromFieldsWithTypes(ID.reified(), item.fields.de_token_id), withdrawal: decodeFromFieldsWithTypes("u64", item.fields.withdrawal), penalty: decodeFromFieldsWithTypes("u64", item.fields.penalty), startAt: decodeFromFieldsWithTypes("u64", item.fields.start_at), unlockedAt: decodeFromFieldsWithTypes("u64", item.fields.unlocked_at), timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): ClaimEvent<ToPhantomTypeArgument<T>> { return ClaimEvent.fromFields( typeArg, ClaimEvent.bcs.parse(data) ) }

 toJSONField() { return {

 deTokenId: this.deTokenId,withdrawal: this.withdrawal.toString(),penalty: this.penalty.toString(),startAt: this.startAt.toString(),unlockedAt: this.unlockedAt.toString(),timestamp: this.timestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): ClaimEvent<ToPhantomTypeArgument<T>> { return ClaimEvent.reified( typeArg, ).new( { deTokenId: decodeFromJSONField(ID.reified(), field.deTokenId), withdrawal: decodeFromJSONField("u64", field.withdrawal), penalty: decodeFromJSONField("u64", field.penalty), startAt: decodeFromJSONField("u64", field.startAt), unlockedAt: decodeFromJSONField("u64", field.unlockedAt), timestamp: decodeFromJSONField("u64", field.timestamp) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): ClaimEvent<ToPhantomTypeArgument<T>> { if (json.$typeName !== ClaimEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(ClaimEvent.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return ClaimEvent.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): ClaimEvent<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isClaimEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ClaimEvent object`); } return ClaimEvent.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): ClaimEvent<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isClaimEvent(data.bcs.type)) { throw new Error(`object at is not a ClaimEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return ClaimEvent.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ClaimEvent.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<ClaimEvent<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ClaimEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isClaimEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ClaimEvent object`); }

 return ClaimEvent.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== BurnEvent =============================== */

export function isBurnEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::events::BurnEvent` + '<'); }

export interface BurnEventFields<T extends PhantomTypeArgument> { deTokenId: ToField<ID> }

export type BurnEventReified<T extends PhantomTypeArgument> = Reified< BurnEvent<T>, BurnEventFields<T> >;

export class BurnEvent<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::BurnEvent`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = BurnEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::BurnEvent<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = BurnEvent.$isPhantom;

 readonly deTokenId: ToField<ID>

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: BurnEventFields<T>, ) { this.$fullTypeName = composeSuiType( BurnEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::BurnEvent<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.deTokenId = fields.deTokenId; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): BurnEventReified<ToPhantomTypeArgument<T>> { const reifiedBcs = BurnEvent.bcs; return { typeName: BurnEvent.$typeName, fullTypeName: composeSuiType( BurnEvent.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::events::BurnEvent<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: BurnEvent.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => BurnEvent.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BurnEvent.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => BurnEvent.fromFields( T, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => BurnEvent.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => BurnEvent.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => BurnEvent.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => BurnEvent.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => BurnEvent.fetch( client, T, id, ), new: ( fields: BurnEventFields<ToPhantomTypeArgument<T>>, ) => { return new BurnEvent( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return BurnEvent.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<BurnEvent<ToPhantomTypeArgument<T>>>> { return phantom(BurnEvent.reified( T )); } static get p() { return BurnEvent.phantom }

 private static instantiateBcs() { return bcs.struct("BurnEvent", {

 de_token_id: ID.bcs

}) };

 private static cachedBcs: ReturnType<typeof BurnEvent.instantiateBcs> | null = null;

 static get bcs() { if (!BurnEvent.cachedBcs) { BurnEvent.cachedBcs = BurnEvent.instantiateBcs() } return BurnEvent.cachedBcs };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): BurnEvent<ToPhantomTypeArgument<T>> { return BurnEvent.reified( typeArg, ).new( { deTokenId: decodeFromFields(ID.reified(), fields.de_token_id) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): BurnEvent<ToPhantomTypeArgument<T>> { if (!isBurnEvent(item.type)) { throw new Error("not a BurnEvent type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return BurnEvent.reified( typeArg, ).new( { deTokenId: decodeFromFieldsWithTypes(ID.reified(), item.fields.de_token_id) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): BurnEvent<ToPhantomTypeArgument<T>> { return BurnEvent.fromFields( typeArg, BurnEvent.bcs.parse(data) ) }

 toJSONField() { return {

 deTokenId: this.deTokenId,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): BurnEvent<ToPhantomTypeArgument<T>> { return BurnEvent.reified( typeArg, ).new( { deTokenId: decodeFromJSONField(ID.reified(), field.deTokenId) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): BurnEvent<ToPhantomTypeArgument<T>> { if (json.$typeName !== BurnEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(BurnEvent.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return BurnEvent.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): BurnEvent<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBurnEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BurnEvent object`); } return BurnEvent.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): BurnEvent<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBurnEvent(data.bcs.type)) { throw new Error(`object at is not a BurnEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return BurnEvent.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BurnEvent.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<BurnEvent<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BurnEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBurnEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BurnEvent object`); }

 return BurnEvent.fromSuiObjectData( typeArg, res.data ); }

 }
