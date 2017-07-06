const cypress = require('cypress')
const chdir = require('chdir-promise')
const fromFolder = require('path').join.bind(null, __dirname)
const snapshot = require('snap-shot')

describe('successful tests', () => {
  beforeEach(() => {
    chdir.to(fromFolder('successful'))
  })

  afterEach(chdir.back)

  it('returns with all successful tests', () =>
    snapshot(cypress.run())
  )
})

describe('failing test', () => {
  beforeEach(() => {
    chdir.to(fromFolder('failing'))
  })

  afterEach(chdir.back)

  it('returns correct number of failing tests', () =>
    snapshot(cypress.run())
  )
})

// https://github.com/cypress-io/cypress-test-module-api/issues/3
describe.skip('invalid malformed spec file', () => {
  beforeEach(() => {
    chdir.to(fromFolder('invalid'))
  })

  afterEach(chdir.back)

  it('returns with error code', () =>
    snapshot(cypress.run())
  )
})
