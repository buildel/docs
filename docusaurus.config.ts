import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import * as path from "path";

const config: Config = {
  title: "Buildel",
  tagline:
    "Boost Efficiency & Automate Tasks: Build Your AI Dream Team in Minutes without Writing a Line of Code.",
  favicon: "img/b-favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "buildel", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        api: {
          path: "openapi.json",
          routeBasePath: "api",
          apiLayoutComponent: "@theme/ApiPage",
          apiItemComponent: "@theme/ApiItem",
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  plugins: [
    "docusaurus-plugin-sass",
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api",
        docsPluginId: "default",
        config: {
          workflows: {
            specPath: "https://api.buildel.ai/api/openapi",
            outputDir: "api/workflows",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      logo: {
        alt: "My Site Logo",
        src: "img/buildel-logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        { to: "/api", label: "API", position: "left" },
        {
          href: "https://github.com/elpassion/buildel",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oceanicNext,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
