import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "workflows/buildel-api",
    },
    {
      type: "category",
      label: "Workflows",
      items: [
        {
          type: "doc",
          id: "workflows/create-workflow",
          label: "Create workflow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "workflows/update-workflow",
          label: "Update workflow",
          className: "api-method patch",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
