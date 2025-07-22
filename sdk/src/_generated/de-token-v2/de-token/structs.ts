import * as reified from "../../_framework/reified";
import {Balance} from "../../_dependencies/source/0x2/balance/structs";
import {UID} from "../../_dependencies/source/0x2/object/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {Vector} from "../../_framework/vector";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== DE_TOKEN =============================== */

export function isDE_TOKEN(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::de_token::DE_TOKEN`; }

export interface DE_TOKENFields { dummyField: ToField<"bool"> }

export type DE_TOKENReified = Reified< DE_TOKEN, DE_TOKENFields >;

export class DE_TOKEN implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::de_token::DE_TOKEN`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DE_TOKEN.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::de_token::DE_TOKEN`; readonly $typeArgs: []; readonly $isPhantom = DE_TOKEN.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: DE_TOKENFields, ) { this.$fullTypeName = composeSuiType( DE_TOKEN.$typeName, ...typeArgs ) as `${typeof PKG_V1}::de_token::DE_TOKEN`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): DE_TOKENReified { const reifiedBcs = DE_TOKEN.bcs; return { typeName: DE_TOKEN.$typeName, fullTypeName: composeSuiType( DE_TOKEN.$typeName, ...[] ) as `${typeof PKG_V1}::de_token::DE_TOKEN`, typeArgs: [ ] as [], isPhantom: DE_TOKEN.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DE_TOKEN.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DE_TOKEN.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DE_TOKEN.fromFields( reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => DE_TOKEN.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DE_TOKEN.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DE_TOKEN.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DE_TOKEN.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DE_TOKEN.fetch( client, id, ), new: ( fields: DE_TOKENFields, ) => { return new DE_TOKEN( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DE_TOKEN.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DE_TOKEN>> { return phantom(DE_TOKEN.reified( )); } static get p() { return DE_TOKEN.phantom() }

 private static instantiateBcs() { return bcs.struct("DE_TOKEN", {

 dummy_field: bcs.bool()

}) };

 private static cachedBcs: ReturnType<typeof DE_TOKEN.instantiateBcs> | null = null;

 static get bcs() { if (!DE_TOKEN.cachedBcs) { DE_TOKEN.cachedBcs = DE_TOKEN.instantiateBcs() } return DE_TOKEN.cachedBcs };

 static fromFields( fields: Record<string, any> ): DE_TOKEN { return DE_TOKEN.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DE_TOKEN { if (!isDE_TOKEN(item.type)) { throw new Error("not a DE_TOKEN type");

 }

 return DE_TOKEN.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): DE_TOKEN { return DE_TOKEN.fromFields( DE_TOKEN.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DE_TOKEN { return DE_TOKEN.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): DE_TOKEN { if (json.$typeName !== DE_TOKEN.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DE_TOKEN.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DE_TOKEN { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDE_TOKEN(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DE_TOKEN object`); } return DE_TOKEN.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DE_TOKEN { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDE_TOKEN(data.bcs.type)) { throw new Error(`object at is not a DE_TOKEN object`); }

 return DE_TOKEN.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DE_TOKEN.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DE_TOKEN> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DE_TOKEN object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDE_TOKEN(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DE_TOKEN object`); }

 return DE_TOKEN.fromSuiObjectData( res.data ); }

 }

/* ============================== UnlockRequest =============================== */

export function isUnlockRequest(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::de_token::UnlockRequest` + '<'); }

export interface UnlockRequestFields<T extends PhantomTypeArgument> { startAt: ToField<"u64">; unlockedAt: ToField<"u64">; withdrawal: ToField<Balance<T>>; penalty: ToField<Balance<T>> }

export type UnlockRequestReified<T extends PhantomTypeArgument> = Reified< UnlockRequest<T>, UnlockRequestFields<T> >;

export class UnlockRequest<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::de_token::UnlockRequest`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = UnlockRequest.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::de_token::UnlockRequest<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = UnlockRequest.$isPhantom;

 readonly startAt: ToField<"u64">; readonly unlockedAt: ToField<"u64">; readonly withdrawal: ToField<Balance<T>>; readonly penalty: ToField<Balance<T>>

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: UnlockRequestFields<T>, ) { this.$fullTypeName = composeSuiType( UnlockRequest.$typeName, ...typeArgs ) as `${typeof PKG_V1}::de_token::UnlockRequest<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.startAt = fields.startAt;; this.unlockedAt = fields.unlockedAt;; this.withdrawal = fields.withdrawal;; this.penalty = fields.penalty; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): UnlockRequestReified<ToPhantomTypeArgument<T>> { const reifiedBcs = UnlockRequest.bcs; return { typeName: UnlockRequest.$typeName, fullTypeName: composeSuiType( UnlockRequest.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::de_token::UnlockRequest<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: UnlockRequest.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => UnlockRequest.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UnlockRequest.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => UnlockRequest.fromFields( T, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => UnlockRequest.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => UnlockRequest.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => UnlockRequest.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => UnlockRequest.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => UnlockRequest.fetch( client, T, id, ), new: ( fields: UnlockRequestFields<ToPhantomTypeArgument<T>>, ) => { return new UnlockRequest( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return UnlockRequest.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<UnlockRequest<ToPhantomTypeArgument<T>>>> { return phantom(UnlockRequest.reified( T )); } static get p() { return UnlockRequest.phantom }

 private static instantiateBcs() { return bcs.struct("UnlockRequest", {

 start_at: bcs.u64(), unlocked_at: bcs.u64(), withdrawal: Balance.bcs, penalty: Balance.bcs

}) };

 private static cachedBcs: ReturnType<typeof UnlockRequest.instantiateBcs> | null = null;

 static get bcs() { if (!UnlockRequest.cachedBcs) { UnlockRequest.cachedBcs = UnlockRequest.instantiateBcs() } return UnlockRequest.cachedBcs };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): UnlockRequest<ToPhantomTypeArgument<T>> { return UnlockRequest.reified( typeArg, ).new( { startAt: decodeFromFields("u64", fields.start_at), unlockedAt: decodeFromFields("u64", fields.unlocked_at), withdrawal: decodeFromFields(Balance.reified(typeArg), fields.withdrawal), penalty: decodeFromFields(Balance.reified(typeArg), fields.penalty) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): UnlockRequest<ToPhantomTypeArgument<T>> { if (!isUnlockRequest(item.type)) { throw new Error("not a UnlockRequest type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return UnlockRequest.reified( typeArg, ).new( { startAt: decodeFromFieldsWithTypes("u64", item.fields.start_at), unlockedAt: decodeFromFieldsWithTypes("u64", item.fields.unlocked_at), withdrawal: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.withdrawal), penalty: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.penalty) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): UnlockRequest<ToPhantomTypeArgument<T>> { return UnlockRequest.fromFields( typeArg, UnlockRequest.bcs.parse(data) ) }

 toJSONField() { return {

 startAt: this.startAt.toString(),unlockedAt: this.unlockedAt.toString(),withdrawal: this.withdrawal.toJSONField(),penalty: this.penalty.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): UnlockRequest<ToPhantomTypeArgument<T>> { return UnlockRequest.reified( typeArg, ).new( { startAt: decodeFromJSONField("u64", field.startAt), unlockedAt: decodeFromJSONField("u64", field.unlockedAt), withdrawal: decodeFromJSONField(Balance.reified(typeArg), field.withdrawal), penalty: decodeFromJSONField(Balance.reified(typeArg), field.penalty) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): UnlockRequest<ToPhantomTypeArgument<T>> { if (json.$typeName !== UnlockRequest.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(UnlockRequest.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return UnlockRequest.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): UnlockRequest<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUnlockRequest(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UnlockRequest object`); } return UnlockRequest.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): UnlockRequest<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUnlockRequest(data.bcs.type)) { throw new Error(`object at is not a UnlockRequest object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return UnlockRequest.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UnlockRequest.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<UnlockRequest<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UnlockRequest object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUnlockRequest(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UnlockRequest object`); }

 return UnlockRequest.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== DeToken =============================== */

export function isDeToken(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::de_token::DeToken` + '<'); }

export interface DeTokenFields<T extends PhantomTypeArgument> { id: ToField<UID>; lockedBalance: ToField<Balance<T>>; unlockRequests: ToField<Vector<UnlockRequest<T>>> }

export type DeTokenReified<T extends PhantomTypeArgument> = Reified< DeToken<T>, DeTokenFields<T> >;

export class DeToken<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::de_token::DeToken`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = DeToken.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::de_token::DeToken<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = DeToken.$isPhantom;

 readonly id: ToField<UID>; readonly lockedBalance: ToField<Balance<T>>; readonly unlockRequests: ToField<Vector<UnlockRequest<T>>>

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: DeTokenFields<T>, ) { this.$fullTypeName = composeSuiType( DeToken.$typeName, ...typeArgs ) as `${typeof PKG_V1}::de_token::DeToken<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.lockedBalance = fields.lockedBalance;; this.unlockRequests = fields.unlockRequests; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): DeTokenReified<ToPhantomTypeArgument<T>> { const reifiedBcs = DeToken.bcs; return { typeName: DeToken.$typeName, fullTypeName: composeSuiType( DeToken.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::de_token::DeToken<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: DeToken.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => DeToken.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DeToken.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => DeToken.fromFields( T, reifiedBcs.parse(data) ), bcs: reifiedBcs, fromJSONField: (field: any) => DeToken.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => DeToken.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => DeToken.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => DeToken.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => DeToken.fetch( client, T, id, ), new: ( fields: DeTokenFields<ToPhantomTypeArgument<T>>, ) => { return new DeToken( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return DeToken.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<DeToken<ToPhantomTypeArgument<T>>>> { return phantom(DeToken.reified( T )); } static get p() { return DeToken.phantom }

 private static instantiateBcs() { return bcs.struct("DeToken", {

 id: UID.bcs, locked_balance: Balance.bcs, unlock_requests: bcs.vector(UnlockRequest.bcs)

}) };

 private static cachedBcs: ReturnType<typeof DeToken.instantiateBcs> | null = null;

 static get bcs() { if (!DeToken.cachedBcs) { DeToken.cachedBcs = DeToken.instantiateBcs() } return DeToken.cachedBcs };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): DeToken<ToPhantomTypeArgument<T>> { return DeToken.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), lockedBalance: decodeFromFields(Balance.reified(typeArg), fields.locked_balance), unlockRequests: decodeFromFields(reified.vector(UnlockRequest.reified(typeArg)), fields.unlock_requests) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): DeToken<ToPhantomTypeArgument<T>> { if (!isDeToken(item.type)) { throw new Error("not a DeToken type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return DeToken.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), lockedBalance: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.locked_balance), unlockRequests: decodeFromFieldsWithTypes(reified.vector(UnlockRequest.reified(typeArg)), item.fields.unlock_requests) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): DeToken<ToPhantomTypeArgument<T>> { return DeToken.fromFields( typeArg, DeToken.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,lockedBalance: this.lockedBalance.toJSONField(),unlockRequests: fieldToJSON<Vector<UnlockRequest<T>>>(`vector<${UnlockRequest.$typeName}<${this.$typeArgs[0]}>>`, this.unlockRequests),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): DeToken<ToPhantomTypeArgument<T>> { return DeToken.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), lockedBalance: decodeFromJSONField(Balance.reified(typeArg), field.lockedBalance), unlockRequests: decodeFromJSONField(reified.vector(UnlockRequest.reified(typeArg)), field.unlockRequests) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): DeToken<ToPhantomTypeArgument<T>> { if (json.$typeName !== DeToken.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(DeToken.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return DeToken.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): DeToken<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDeToken(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DeToken object`); } return DeToken.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): DeToken<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDeToken(data.bcs.type)) { throw new Error(`object at is not a DeToken object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return DeToken.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DeToken.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<DeToken<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DeToken object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDeToken(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DeToken object`); }

 return DeToken.fromSuiObjectData( typeArg, res.data ); }

 }
