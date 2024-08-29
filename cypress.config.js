const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: {
    runMode: 2,  
    openMode: 1   
  },
  env: {
    username: process.env.CYPRESS_USERNAME || "Orjibra",
    password: process.env.CYPRESS_PASSWORD || "123456"
  },
  e2e: {
    baseUrl: 'https://parabank.parasoft.com/parabank/',
    setupNodeEvents(on, config) {
    },
  },
});
