export type JSONSchemaField =
  | {
      type: "object";
      properties: { [key: string]: JSONSchemaField };
      required?: string[];
    }
  | {
      type: "string";
      title: string;
      description: string;
      minLength?: number;
      maxLength?: number;
      default?: string;
      regex?: {
        pattern: string;
        errorMessage: string;
      };
      defaultWhen?: Record<string, Record<string, string>>;
    }
  | {
      type: "string";
      title: string;
      description: string;
      minLength?: number;
      maxLength?: number;
      presentAs: "password";
    }
  | {
      type: "string";
      title: string;
      description: string;
      presentAs: "editor";
      editorLanguage: "json" | "custom";
      minLength?: number;
      maxLength?: number;
      default?: string;
    }
  | {
      type: "string";
      title: string;
      description: string;
      minLength?: number;
      maxLength?: number;
      enum: string[];
      enumPresentAs: "checkbox" | "radio";
      default?: string;
    }
  | {
      type: "string";
      title: string;
      description: string;
      presentAs: "async-select";
      url: string;
      default?: string;
    }
  | {
      type: "string";
      title: string;
      description: string;
      presentAs: "async-creatable-select";
      url: string;
      default?: string;
      schema: JSONSchemaField;
    }
  | {
      type: "number" | "integer";
      title: string;
      description: string;
      minimum?: number;
      maximum?: number;
      step?: number;
      default?: number;
    }
  | {
      type: "array";
      title: string;
      description: string;
      items: JSONSchemaField;
      minItems: number;
      default?: unknown[];
    }
  | {
      type: "boolean";
      title: string;
      description: string;
      default?: boolean;
    };

export function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg);
  }
}

export function schema({
  schema,
  name,
  fields,
}: {
  schema: JSONSchemaField;
  name: string | null;
  fields: {
    string: FieldFn;
    number: FieldFn;
    array: FieldFn;
    boolean: FieldFn;
    editor: FieldFn;
    asyncSelect: FieldFn;
    asyncCreatableSelect: FieldFn;
  };
}) {
  assert(schema.type === "object");

  return fieldFn({ field: schema, name, schema, fields });
}

export function fieldFn({ field, name, schema, fields }: FieldProps) {
  if (field.type === "string") {
    return fields.string({ field, name, schema, fields });
  }
  if (field.type === "number" || field.type === "integer") {
    return fields.number({ field, name, schema, fields });
  } else if (field.type === "object") {
    return Object.entries(field.properties).map(([propertyKey, value]) => {
      const fieldKey =
        name === null || name === "" ? propertyKey : `${name}.${propertyKey}`;

      return fieldFn({ field: value, name: fieldKey, schema, fields });
    });
  } else if (field.type === "boolean") {
    return fields.boolean({ field, name, schema, fields });
  } else if (field.type === "array") {
    return fields.array({ field, name, schema, fields });
  }
  console.warn("Unknown field type", field);
  return null;
}

export interface FieldProps {
  field: JSONSchemaField;
  name: string | null;
  schema: JSONSchemaField;
  fields: {
    string: FieldFn;
    number: FieldFn;
    array: FieldFn;
    boolean: FieldFn;
    editor: FieldFn;
    asyncSelect: FieldFn;
    asyncCreatableSelect: FieldFn;
  };
}

type FieldFn = (props: FieldProps) => string;
