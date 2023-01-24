const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://happy-field-011ab7b10.2.azurestaticapps.net/',
  },
  // types: ["cypress", "@percy/cypress"],
});
