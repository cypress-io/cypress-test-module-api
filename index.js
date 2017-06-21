const cypress = require('cypress')
console.log('cypress is', cypress)

cypress.run({
  spec: './cypress/integration/a-spec.js'
}).then(console.log, console.error)
