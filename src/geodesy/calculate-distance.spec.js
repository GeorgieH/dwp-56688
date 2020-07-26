const calculateDistance = require('./calculate-distance')

describe('calculateDistance', () => {
  it('should correctly calculate distance', () => {
    const test = (c1, c2) => calculateDistance(c1, c2)
    // Test upper/lower bounds
    expect(test({ latitude: 0, longitude: 0 }, { latitude: 0, longitude: 0 })).toEqual(0)
    expect(test({ latitude: -90, longitude: -180 }, { latitude: 90, longitude: 180 })).toBeCloseTo(20015086.796)
    expect(test({ latitude: 90, longitude: 180 }, { latitude: -90, longitude: -180 })).toBeCloseTo(20015086.796)
    expect(test({ latitude: 0, longitude: 180 }, { latitude: 0, longitude: -180 })).toBeCloseTo(0)
    expect(test({ latitude: 90, longitude: 0 }, { latitude: -90, longitude: 0 })).toBeCloseTo(20015086.796)
    // Distance between Blackpool and London
    expect(test({ latitude: 53.814178, longitude: -3.053540 }, { latitude: 51.507351, longitude: -0.127758 })).toBeCloseTo(323566.647)
  })
})
