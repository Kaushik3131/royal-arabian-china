import type { SchemaTypeDefinition } from "sanity";
import { destinationType } from "./destinationType";
import { packageType } from "./packageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [destinationType, packageType],
};
