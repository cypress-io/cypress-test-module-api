const cypress = require('cypress')
const chdir = require('chdir-promise')
const fromFolder = require('path').join.bind(null, __dirname)

describe('successful tests', () => {
  beforeEach(() => {
    chdir.to(fromFolder('successful'))
  })

  afterEach(chdir.back)

  it.skip('returns with all successful tests', () =>
    // TODO verify resolved value
    cypress.run().then(console.log)
  )
})
