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
    baseUrl: process.env.CYPRESS_baseUrl || 'https://parabank.parasoft.com/parabank/',
    setupNodeEvents(on, config) {
      // const { generate } = require('mochawesome-report-generator');
      // const { addMochawesome } = require('cypress-mochawesome-reporter/plugin');
      // addMochawesome(on, config);
      // on('after:run', () => {
      //   generate('./mochawesome-report/mochawesome.json', {
      //     reportDir: 'mochawesome-report'
      //   });
      // });
      // return config;
    },
  },
});
