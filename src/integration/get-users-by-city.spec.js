const axios = require('axios')
const getUsersByCity = require('./get-users-by-city')

jest.mock('axios')

describe('getUsersByCity', () => {
  it('should get users by city', async () => {
    const expectedUsers = [
      { id: 1, first_name: 'Joe' },
      { id: 2, first_name: 'Fred' }
    ]
    const res = { data: expectedUsers }
    axios.get.mockResolvedValue(res)
    const actualUsers = await getUsersByCity({ city: 'London' })
    expect(axios.get).toHaveBeenCalledWith('https://bpdts-test-app.herokuapp.com/city/London/users', { accept: 'application/json' })
    expect(actualUsers).toEqual(expectedUsers)
  })
})
