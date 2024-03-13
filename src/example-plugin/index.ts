import fs from "fs/promises";
import { LoadContext, PluginOptions, PluginConfig } from "@docusaurus/types";
import { assert, fieldFn, schema } from "./Schema";

export default async function plugin(
  context: LoadContext,
  options: PluginOptions
) {
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
        array: ({ name, field }) => ``,
        asyncCreatableSelect: ({ name }) => name,
        asyncSelect: ({ name }) => name,
        boolean: ({ field, name }) => {
          console.log("boolean", field);
          assert(field.type === "boolean");
          return `${field.title} | ${field.description} Default: \`${field.default}\``;
        },
        editor: ({ name }) => `editor, ${name}`,
        number: ({ field, name, fields, schema }) => {
          assert(field.type === "number");
          let text = `${field.title} | ${field.description} Default: \`${field.default}\` |`;

          if (field.minimum && field.maximum) {
            text += ` from ${field.minimum} to ${field.maximum}`;
          }
          return text;
        },
        string: ({ field }) => {
          assert(field.type === "string");
          return `${field.title} | ${field.description} |`;
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
${block.inputs.map((input) => `### ${input.name} _(${input.type})_`).join("\n")}
---
## Fields
| name | description | validation |
|------|-------------|------------|
| ${joinTexts(result)} |

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
        return blockResult.filter((i) => i !== "").join("| \n |");
      }
      return blockResult;
    })
    .join("| \n |");
}
