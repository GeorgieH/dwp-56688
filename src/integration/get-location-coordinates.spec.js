const getLocationCoordinates = require('./get-location-coordinates')

describe('getLocationCoordinates', () => {
  it('should return null if not found', () => {
    expect(getLocationCoordinates('NON_EXISTENT_LOCATION')).toBeNull()
  })

  it('should get coordinates', () => {
    const test = (location) => getLocationCoordinates(location)
    const expected = { latitude: 51.507351, longitude: -0.127758 }
    expect(test('london')).toEqual(expected)
    expect(test('LONDON')).toEqual(expected)
  })
})
