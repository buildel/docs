import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "workflows/buildel",
    },
    {
      type: "category",
      label: "organization",
      items: [
        {
          type: "doc",
          id: "workflows/buildel-web-organization-controller-index",
          label: "List organizations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-organization-controller-create",
          label: "Create organization",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-organization-controller-show",
          label: "Get organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-organization-controller-update",
          label: "Update organization",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-organization-controller-get-api-key",
          label: "Get organization API key",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-organization-controller-reset-api-key",
          label: "Reset organization API key",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "user",
      items: [
        {
          type: "doc",
          id: "workflows/buildel-web-user-controller-me",
          label: "Get me",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-user-password-controller-update",
          label: "Update user password",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-user-password-reset-controller-create",
          label: "Create user forgot password request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-user-password-reset-controller-update",
          label: "Update forgotten password",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
