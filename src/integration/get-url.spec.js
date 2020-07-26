const getUrl = require('./get-url')

describe('getUrl', () => {
  it('should get base URL', () => {
    expect(getUrl()).toEqual('https://bpdts-test-app.herokuapp.com/')
  })

  it('should get custom URL', () => {
    expect(getUrl('some/path')).toEqual('https://bpdts-test-app.herokuapp.com/some/path')
  })
})
