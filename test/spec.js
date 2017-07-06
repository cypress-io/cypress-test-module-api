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
