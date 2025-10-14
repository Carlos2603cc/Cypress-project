const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        viewportWidth: 1280,
        viewportHeight: 720,
        supportFile: false,
    },
});
