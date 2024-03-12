import fs from "fs/promises";
import { LoadContext, PluginOptions, PluginConfig } from "@docusaurus/types";

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
    await fs.writeFile(
      `./docs/blocks/new/${block.type}.mdx`,
      JSON.stringify(block, null, 2)
    );
  }
}

async function fetchBlocks() {
  const response = await fetch("https://api.buildel.ai/api/block_types");
  return response.json();
}
