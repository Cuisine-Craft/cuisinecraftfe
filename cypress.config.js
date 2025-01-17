const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {},
    experimentalStudio: true,
    retries: {
      runMode: 2,
      openMode: 0
    }
  },
})