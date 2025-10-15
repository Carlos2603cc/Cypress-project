const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nq3cdc',
    e2e: {
        baseUrl: null,
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: false,
    },
});
