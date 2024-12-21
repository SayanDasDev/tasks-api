import { apiReference } from "@scalar/hono-api-reference";

import type { AppOpenAPI } from "./types";

import packageJSON from "../../package.json";

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: packageJSON.version,
    info: {
      title: "Tasks API",
      version: "1.0.0",
    },
  });

  app.get("/reference", apiReference({
    theme: "deepSpace",
    layout: "classic",
    defaultHttpClient: {
      targetKey: "js",
      clientKey: "fetch",
    },
    spec: {
      url: "/doc",
    },
  }));
}
