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

/* ============================== RequestUnlocKEvent =============================== */

export function isRequestUnlocKEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::events::RequestUnlocKEvent` + '<'); }

export interface RequestUnlocKEventFields<T extends PhantomTypeArgument> { deTokenId: ToField<ID>; unlockedBalance: ToField<"u64">; unlockedDuration: ToField<"u64">; unlockedAt: ToField<"u64">; timestamp: ToField<"u64"> }

export type RequestUnlocKEventReified<T extends PhantomTypeArgument> = Reified< RequestUnlocKEvent<T>, RequestUnlocKEventFields<T> >;

export class RequestUnlocKEvent<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::RequestUnlocKEvent`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = RequestUnlocKEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::RequestUnlocKEvent<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = RequestUnlocKEvent.$isPhantom;

 readonly deTokenId: ToField<ID>; readonly unlockedBalance: ToField<"u64">; readonly unlockedDuration: ToField<"u64">; readonly unlockedAt: ToField<"u64">; readonly timestamp: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: RequestUnlocKEventFields<T>, ) { this.$fullTypeName = composeSuiType( RequestUnlocKEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::RequestUnlocKEvent<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.deTokenId = fields.deTokenId;; this.unlockedBalance = fields.unlockedBalance;; this.unlockedDuration = fields.unlockedDuration;; this.unlockedAt = fields.unlockedAt;; this.timestamp = fields.timestamp; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): RequestUnlocKEventReified<ToPhantomTypeArgument<T>> { const reifiedBcs = RequestUnlocKEvent.bcs; return { typeName: RequestUnlocKEvent.$typeName, fullTypeName: composeSuiType( RequestUnlocKEvent.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::events::RequestUnlocKEvent<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: RequestUnlocKEvent.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => RequestUnlocKEvent.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RequestUnlocKEvent.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => RequestUnlocKEvent.fromFields( T, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => RequestUnlocKEvent.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => RequestUnlocKEvent.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => RequestUnlocKEvent.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => RequestUnlocKEvent.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => RequestUnlocKEvent.fetch( client, T, id, ), new: ( fields: RequestUnlocKEventFields<ToPhantomTypeArgument<T>>, ) => { return new RequestUnlocKEvent( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return RequestUnlocKEvent.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<RequestUnlocKEvent<ToPhantomTypeArgument<T>>>> { return phantom(RequestUnlocKEvent.reified( T )); } static get p() { return RequestUnlocKEvent.phantom }

 private static instantiateBcs() { return bcs.struct("RequestUnlocKEvent", {

 de_token_id: ID.bcs, unlocked_balance: bcs.u64(), unlocked_duration: bcs.u64(), unlocked_at: bcs.u64(), timestamp: bcs.u64()

}) };

 private static cachedBcs: ReturnType<typeof RequestUnlocKEvent.instantiateBcs> | null = null;

 static get bcs() { if (!RequestUnlocKEvent.cachedBcs) { RequestUnlocKEvent.cachedBcs = RequestUnlocKEvent.instantiateBcs() } return RequestUnlocKEvent.cachedBcs };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): RequestUnlocKEvent<ToPhantomTypeArgument<T>> { return RequestUnlocKEvent.reified( typeArg, ).new( { deTokenId: decodeFromFields(ID.reified(), fields.de_token_id), unlockedBalance: decodeFromFields("u64", fields.unlocked_balance), unlockedDuration: decodeFromFields("u64", fields.unlocked_duration), unlockedAt: decodeFromFields("u64", fields.unlocked_at), timestamp: decodeFromFields("u64", fields.timestamp) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): RequestUnlocKEvent<ToPhantomTypeArgument<T>> { if (!isRequestUnlocKEvent(item.type)) { throw new Error("not a RequestUnlocKEvent type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return RequestUnlocKEvent.reified( typeArg, ).new( { deTokenId: decodeFromFieldsWithTypes(ID.reified(), item.fields.de_token_id), unlockedBalance: decodeFromFieldsWithTypes("u64", item.fields.unlocked_balance), unlockedDuration: decodeFromFieldsWithTypes("u64", item.fields.unlocked_duration), unlockedAt: decodeFromFieldsWithTypes("u64", item.fields.unlocked_at), timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): RequestUnlocKEvent<ToPhantomTypeArgument<T>> { return RequestUnlocKEvent.fromFields( typeArg, RequestUnlocKEvent.bcs.parse(data) ) }

 toJSONField() { return {

 deTokenId: this.deTokenId,unlockedBalance: this.unlockedBalance.toString(),unlockedDuration: this.unlockedDuration.toString(),unlockedAt: this.unlockedAt.toString(),timestamp: this.timestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): RequestUnlocKEvent<ToPhantomTypeArgument<T>> { return RequestUnlocKEvent.reified( typeArg, ).new( { deTokenId: decodeFromJSONField(ID.reified(), field.deTokenId), unlockedBalance: decodeFromJSONField("u64", field.unlockedBalance), unlockedDuration: decodeFromJSONField("u64", field.unlockedDuration), unlockedAt: decodeFromJSONField("u64", field.unlockedAt), timestamp: decodeFromJSONField("u64", field.timestamp) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): RequestUnlocKEvent<ToPhantomTypeArgument<T>> { if (json.$typeName !== RequestUnlocKEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(RequestUnlocKEvent.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return RequestUnlocKEvent.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): RequestUnlocKEvent<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRequestUnlocKEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RequestUnlocKEvent object`); } return RequestUnlocKEvent.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): RequestUnlocKEvent<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRequestUnlocKEvent(data.bcs.type)) { throw new Error(`object at is not a RequestUnlocKEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return RequestUnlocKEvent.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return RequestUnlocKEvent.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<RequestUnlocKEvent<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RequestUnlocKEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRequestUnlocKEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RequestUnlocKEvent object`); }

 return RequestUnlocKEvent.fromSuiObjectData( typeArg, res.data ); }

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
