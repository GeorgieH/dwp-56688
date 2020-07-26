const GeoCoordinate = require('./geo-coordinate')

describe('GeoCoordinate', () => {
  it('should not allow an out of range value for latitude', () => {
    const test = (latitude, longitude) => new GeoCoordinate(latitude, longitude)
    expect(() => test(-91, 0)).toThrow(Error)
    expect(() => test(91, 0)).toThrow(Error)
    expect(() => test(Infinity, 0)).toThrow(Error)
    expect(() => test(NaN, 0)).toThrow(Error)
  })

  it('should not allow an out of range value for longitude', () => {
    const test = (latitude, longitude) => new GeoCoordinate(latitude, longitude)
    expect(() => test(0, -181)).toThrow(Error)
    expect(() => test(0, 181)).toThrow(Error)
    expect(() => test(0, Infinity)).toThrow(Error)
    expect(() => test(0, NaN)).toThrow(Error)
  })

  it('should set latitude and longitude', () => {
    const latitude = 45
    const longitude = 90
    const g = new GeoCoordinate(latitude, longitude)
    expect(g.latitude).toEqual(latitude)
    expect(g.longitude).toEqual(longitude)
  })
})
