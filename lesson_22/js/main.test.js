const obj = require('./main')

describe('getDiscriminant', function () {
  test('SHOULD return -48 when a = 4, b = 4, c = 4', function () {
    expect(obj.getDiscriminant(4, 4, 4)).toEqual(-48)
  })

  test('SHOULD return 0 when a = 1, b = -2, c = 1', function () {
    expect(obj.getDiscriminant(1, -2, 1)).toEqual(0)
  })

  test('SHOULD return 12 when a = -5, b = 4, c = 1', function () {
    expect(obj.getDiscriminant(-5, 4, 1)).toEqual(36)
  })
})

