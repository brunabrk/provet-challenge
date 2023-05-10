import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    baseUrl: "https://www.provet.cloud/provet-cloud-request-a-demo",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      embeddedScreenshots: true,
      overwrite: false,
      inlineAssets: true,
      html: false,
      json: true,
    },
    screenshotsFolder: "cypress/reports",
    viewportWidth: 2000,
    viewportHeight: 1320,
    defaultCommandTimeout: 5000,
    projectId: "b5ie4m",
  },
});
