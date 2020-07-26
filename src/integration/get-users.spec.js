const axios = require('axios')
const getUsers = require('./get-users')

jest.mock('axios')

describe('getUsers', () => {
  it('should get users', async () => {
    const expectedUsers = [
      { id: 1, first_name: 'Joe' },
      { id: 2, first_name: 'Fred' }
    ]
    const res = { data: expectedUsers }
    axios.get.mockResolvedValue(res)
    const actualUsers = await getUsers()
    expect(axios.get).toHaveBeenCalledWith('https://bpdts-test-app.herokuapp.com/users', { accept: 'application/json' })
    expect(actualUsers).toEqual(expectedUsers)
  })
})
