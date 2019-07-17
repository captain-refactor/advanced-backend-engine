export type Schema =
  | ObjectSchema
  | ArraySchema
  | FloatSchema
  | IntegerSchema
  | BooleanSchema
  | EnumSchema
  | DateSchema;

export interface SchemaCommon {
  nullable?: boolean;
  required?: boolean;
  default?: string;
}

export interface ArraySchema extends SchemaCommon {
  type: "array";
  items: Schema;
}

export interface ObjectSchema extends SchemaCommon {
  type: "object";
  properties: Record<string, Schema>;
}

export interface FloatSchema extends SchemaCommon {
  type: "float";
  min?: number;
  max?: number;
}

export interface IntegerSchema extends SchemaCommon {
  type: "integer";
  min?: number;
  max?: number;
}

export interface BooleanSchema extends SchemaCommon {
  type: "boolean";
}

export interface EnumSchema {
  type: "enum";
  values: string[];
}

export interface DateSchema {
  type: "date";
}
