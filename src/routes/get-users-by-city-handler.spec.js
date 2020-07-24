const getUsersByCity = require('../integration/get-users-by-city')
const getUsersByCityHandler = require('./get-users-by-city-handler')

jest.mock('../integration/get-users-by-city')

describe('getUsersByCityHandler', () => {
  it('should respond with users', async () => {
    const city = 'London'
    const users = [
      { id: 1, first_name: 'Joe' },
      { id: 2, first_name: 'Fred' }
    ]
    getUsersByCity.mockResolvedValue(users)
    const req = { params: { city } }
    const res = { json: jest.fn() }
    await getUsersByCityHandler(req, res)
    expect(getUsersByCity).toHaveBeenCalledWith({ city })
    expect(res.json).toHaveBeenCalledWith(users)
  })
})
