import fs from "fs/promises";
import { LoadContext, PluginOptions, PluginConfig } from "@docusaurus/types";
import { assert, schema } from "./Schema";

export default async function plugin(
  context: LoadContext,
  options: PluginOptions
) {
  return {
    name: "example-plugin",
    extendCli(cli: any): void {
      cli
        .command("example-plugin")
        .description("Example plugin command")
        .action(createBlocksDocumentation);
    },
  };
}

async function createBlocksDocumentation() {
  const { data: blocks } = await fetchBlocks();
  await fs.rmdir("./docs/blocks/new", { recursive: true });
  await fs.mkdir("./docs/blocks/new", { recursive: true });
  for (const block of blocks) {
    const result = schema({
      schema: block.schema,
      name: null,
      fields: {
        array: ({ name, field }) => `
        `,
        asyncCreatableSelect: ({ name }) => name,
        asyncSelect: ({ name }) => name,
        boolean: ({ name }) => name,
        editor: ({ name }) => name,
        number: ({ name }) => name,
        string: ({ field }) => {
          assert(field.type === "string");
          return `
### ${field.title} (string)
${field.description}
        `;
        },
      },
    });

    const text = `
# ${block.type}
${block.description}
## Inputs
${block.inputs.map((input) => `### ${input.name} (${input.type})`).join("\n")}
## Fields
${joinTexts(result)}
    `;

    await fs.writeFile(`./docs/blocks/new/${block.type}.md`, text);
  }
}

async function fetchBlocks() {
  const response = await fetch("https://api.buildel.ai/api/block_types");
  return response.json();
}

function joinTexts(blockResults: Array<string | Array<string>>) {
  return blockResults
    .map((blockResult) => {
      if (Array.isArray(blockResult)) {
        return blockResult.join("\n");
      }
      return blockResult;
    })
    .join("\n");
}
