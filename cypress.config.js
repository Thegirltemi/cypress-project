const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://ogc404gswg4oogcc0g088wsk.185.198.27.143.sslip.io/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/e2e/Features/*.feature",

    env: {
      email: "stephen@almondcareers.com",
      password: "Test1234",
    },
  },
});
