// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: affixes.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "affixes";

export enum PrefixAwesomeEnumSuffix {
  AWESOME_ENUM_AWESOME = 0,
  AWESOME_ENUM_COOL = 1,
  AWESOME_ENUM_JUST_OKAY = 2,
  UNRECOGNIZED = -1,
}

export function prefixAwesomeEnumSuffixFromJSON(object: any): PrefixAwesomeEnumSuffix {
  switch (object) {
    case 0:
    case "AWESOME_ENUM_AWESOME":
      return PrefixAwesomeEnumSuffix.AWESOME_ENUM_AWESOME;
    case 1:
    case "AWESOME_ENUM_COOL":
      return PrefixAwesomeEnumSuffix.AWESOME_ENUM_COOL;
    case 2:
    case "AWESOME_ENUM_JUST_OKAY":
      return PrefixAwesomeEnumSuffix.AWESOME_ENUM_JUST_OKAY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PrefixAwesomeEnumSuffix.UNRECOGNIZED;
  }
}

export function prefixAwesomeEnumSuffixToJSON(object: PrefixAwesomeEnumSuffix): string {
  switch (object) {
    case PrefixAwesomeEnumSuffix.AWESOME_ENUM_AWESOME:
      return "AWESOME_ENUM_AWESOME";
    case PrefixAwesomeEnumSuffix.AWESOME_ENUM_COOL:
      return "AWESOME_ENUM_COOL";
    case PrefixAwesomeEnumSuffix.AWESOME_ENUM_JUST_OKAY:
      return "AWESOME_ENUM_JUST_OKAY";
    case PrefixAwesomeEnumSuffix.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface PrefixAwesomeMessageSuffix {
}

export interface PrefixAwesomeMessage_InnerSuffix {
}

function createBasePrefixAwesomeMessageSuffix(): PrefixAwesomeMessageSuffix {
  return {};
}

export const PrefixAwesomeMessageSuffix = {
  encode(_: PrefixAwesomeMessageSuffix, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PrefixAwesomeMessageSuffix {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrefixAwesomeMessageSuffix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): PrefixAwesomeMessageSuffix {
    return {};
  },

  toJSON(_: PrefixAwesomeMessageSuffix): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<PrefixAwesomeMessageSuffix>, I>>(base?: I): PrefixAwesomeMessageSuffix {
    return PrefixAwesomeMessageSuffix.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PrefixAwesomeMessageSuffix>, I>>(_: I): PrefixAwesomeMessageSuffix {
    const message = createBasePrefixAwesomeMessageSuffix();
    return message;
  },
};

function createBasePrefixAwesomeMessage_InnerSuffix(): PrefixAwesomeMessage_InnerSuffix {
  return {};
}

export const PrefixAwesomeMessage_InnerSuffix = {
  encode(_: PrefixAwesomeMessage_InnerSuffix, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PrefixAwesomeMessage_InnerSuffix {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrefixAwesomeMessage_InnerSuffix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): PrefixAwesomeMessage_InnerSuffix {
    return {};
  },

  toJSON(_: PrefixAwesomeMessage_InnerSuffix): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<PrefixAwesomeMessage_InnerSuffix>, I>>(
    base?: I,
  ): PrefixAwesomeMessage_InnerSuffix {
    return PrefixAwesomeMessage_InnerSuffix.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PrefixAwesomeMessage_InnerSuffix>, I>>(
    _: I,
  ): PrefixAwesomeMessage_InnerSuffix {
    const message = createBasePrefixAwesomeMessage_InnerSuffix();
    return message;
  },
};

export interface AwesomeService {
}

export const AwesomeServiceServiceName = "affixes.AwesomeService";
export class AwesomeServiceClientImpl implements AwesomeService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || AwesomeServiceServiceName;
    this.rpc = rpc;
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };
