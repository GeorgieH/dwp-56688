const { getMessage } = require('./hello-world')

describe('Hello world', () => {
  it('should return the message', () => {
    expect(getMessage()).toEqual({ message: 'Hello World!' })
  })
})
