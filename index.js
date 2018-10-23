const banner = require('terminal-banner').terminalBanner
const allPaths = require('@bahmutov/all-paths')
const cypress = require('cypress')
console.log('cypress is', cypress)

const onSuccess = (runResult) => {
  banner('Cypresss results')
  console.log('%o', runResult)
  banner('Results paths')
  allPaths(runResult)
}

cypress.run({
  spec: './cypress/integration/a-spec.js'
})
.then(onSuccess)
.catch(console.error)
