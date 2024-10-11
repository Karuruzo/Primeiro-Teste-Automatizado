const { defineConfig } = require("cypress");

module.exports = {
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
}

module.exports = defineConfig({
  projectId: 'h386n1',
  e2e: {
    browser: 'chrome',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
