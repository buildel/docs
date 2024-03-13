import fs from "fs/promises";
import { assert, schema } from "./Schema";

export default async function plugin() {
  return {
    name: "gen-blocks-api",
    extendCli(cli: any): void {
      cli
        .command("gen-blocks-api")
        .description("Generate API for blocks")
        .action(createBlocksDocumentation);
    },
  };
}

async function createBlocksDocumentation() {
  const { data: blocks } = await fetchBlocks();
  for (const block of blocks) {
    const result = schema({
      schema: block.schema,
      name: null,
      fields: {
        array: ({ name, field }) => {
          assert(field.type === "array");
          return `${field.title} | ${field.description}`;
        },
        asyncCreatableSelect: ({ name }) => name,
        asyncSelect: ({ name }) => name,
        boolean: ({ field }) => {
          assert(field.type === "boolean");
          return `${field.title} | ${field.description} | Default: \`${field.default}\``;
        },
        editor: ({ name }) => `editor, ${name}`,
        number: ({ field, name, fields, schema }) => {
          assert(field.type === "number");
          let text = `${field.title} | ${field.description} | Default: \`${field.default}\``;

          if (field.minimum && field.maximum) {
            text += `, Range: ${field.minimum} - ${field.maximum}`;
          }
          return text;
        },
        string: ({ field }) => {
          assert(field.type === "string");
          return `${field.title} | ${field.description}`;
        },
      },
    });

    const parsedTitle = block.type
      .replace(/^[\s_]+|[\s_]+$/g, "")
      .replace(/[_\s]+/g, " ");

    const content = `---
title: ${parsedTitle}
---

# ${parsedTitle}
${block.description}

## Inputs
Inputs divide into public and private. Public input is for user's interaction with block. Private input is for communication between block and block. You can't use these inputs directly

| name | type | accessibility |
|------|------|---------------|
${block.inputs
  .map((input) => {
    return `| ${input.name} | ${input.type} | ${
      input.public ? "Public" : "Private"
    } |`;
  })
  .join("\n")}
---
## Fields
| name | description | details |
|------|-------------|------------|
| ${joinTexts(result)}

---
    `;

    await fs.writeFile(`./docs/blocks/${block.type}.mdx`, content);
  }
}

async function fetchBlocks() {
  const response = await fetch("https://api.buildel.ai/api/block_types");
  return response.json();
}

function joinTexts(blockResults: Array<string | Array<string>>) {
  return blockResults
    .filter((i) => i !== "")
    .map((blockResult) => {
      if (Array.isArray(blockResult)) {
        return blockResult.filter((i) => i !== "").join("| \n");
      }
      return blockResult;
    })
    .join("\n");
}
