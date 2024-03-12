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
        {
          type: "doc",
          id: "workflows/buildel-web-organization-tool-chunk-controller-create",
          label: "Create file chunks",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "pipeline",
      items: [
        {
          type: "doc",
          id: "workflows/buildel-web-organization-pipeline-controller-index",
          label: "List user organization pipelines",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-organization-pipeline-controller-create",
          label: "Create pipeline",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-organization-pipeline-controller-delete",
          label: "Delete pipeline",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-organization-pipeline-controller-show",
          label: "Show user organization pipeline",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-organization-pipeline-controller-update",
          label: "Update pipeline",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "alias",
      items: [
        {
          type: "doc",
          id: "workflows/buildel-web-organization-pipeline-alias-controller-index",
          label: "List pipeline aliases",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-organization-pipeline-alias-controller-create",
          label: "Create pipeline alias",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-organization-pipeline-alias-controller-delete",
          label: "Delete pipeline alias",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-organization-pipeline-alias-controller-show",
          label: "Show pipeline alias",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-organization-pipeline-alias-controller-update-2",
          label: "Update pipeline alias",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-organization-pipeline-alias-controller-update",
          label: "Update pipeline alias",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "block",
      items: [
        {
          type: "doc",
          id: "workflows/buildel-web-organization-pipeline-block-controller-create",
          label: "Create block",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "run",
      items: [
        {
          type: "doc",
          id: "workflows/buildel-web-organization-pipeline-run-controller-index",
          label: "List pipeline runs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-organization-pipeline-run-controller-create",
          label: "Create pipeline run",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-organization-pipeline-run-controller-show",
          label: "Show pipeline run",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-organization-pipeline-run-controller-input",
          label: "Add run input",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-organization-pipeline-run-controller-start",
          label: "Start pipeline run",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-organization-pipeline-run-controller-stop",
          label: "Stop pipeline run",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "secret",
      items: [
        {
          type: "doc",
          id: "workflows/buildel-web-secret-controller-index",
          label: "List user organization secrets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-secret-controller-create",
          label: "Creates a secret",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-secret-controller-delete",
          label: "Deletes a secret",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-secret-controller-show",
          label: "Get user organization secret",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-secret-controller-update-2",
          label: "Updates a secret",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-secret-controller-update",
          label: "Updates a secret",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "user",
      items: [
        {
          type: "doc",
          id: "workflows/buildel-web-user-session-controller-create-google",
          label: "Sign in with google",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-user-session-controller-create",
          label: "Sign in user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "workflows/buildel-web-user-session-controller-delete",
          label: "Logout",
          className: "api-method delete",
        },
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
        {
          type: "doc",
          id: "workflows/buildel-web-user-registration-controller-create",
          label: "Create user forgot password request",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
