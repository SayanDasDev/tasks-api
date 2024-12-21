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
}
