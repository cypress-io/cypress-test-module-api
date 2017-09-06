const cypress = require('cypress')
const chdir = require('chdir-promise')
const fromFolder = require('path').join.bind(null, __dirname)
const snapshot = require('snap-shot-it')
const la = require('lazy-ass')
const is = require('check-more-types')

const normalize = output => {
  la(is.unemptyString(output.version), 'has version', output)
  output.version = '0.0.0'
  return output
}

describe('successful tests', () => {
  beforeEach(() => {
    chdir.to(fromFolder('successful'))
  })

  afterEach(chdir.back)

  it('returns with all successful tests', () =>
    cypress.run().then(normalize).then(snapshot)
  )
})

describe('failing test', () => {
  beforeEach(() => {
    chdir.to(fromFolder('failing'))
  })

  afterEach(chdir.back)

  it('returns correct number of failing tests', () =>
    cypress.run().then(normalize).then(snapshot)
  )
})

// https://github.com/cypress-io/cypress-test-module-api/issues/3
describe('invalid malformed spec file', () => {
  beforeEach(() => {
    chdir.to(fromFolder('invalid'))
  })

  afterEach(chdir.back)

  it('returns with error code', () =>
    // test has reference error on load
    cypress.run({
      spec: './cypress/integration/a-spec.js'
    }).then(normalize).then(snapshot)
  )
})
