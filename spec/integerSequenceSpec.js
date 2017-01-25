describe('The function integerStatics', function () {
  var result
  var integerSequence = [6, 9, 15, -2, 92, 11]

  beforeEach(function () {
    result = integerStatics(integerSequence)
  })

  it('Exists', function () {
    expect(typeof result === 'string').toBeTruthy()
  })

  it('must return a string', function () {
    expect().toEqual()
  })

  describe('when pass as an argument like: [6, 9, 15, -2, 92, 11]', function () {
    beforeEach(function () {
      result = result.split('\n')
    })

    it('must return "o) minimum value = -2"', function () {
      expect(result[0]).toEqual('o) minimum value = -2')
    })

    it('must return "o) maximum value = 92"', function () {
      expect(result[1]).toEqual('o) maximum value = 92')
    })

    it('must return "o) number of elements in the sequence = 6"', function () {
      expect(result[2]).toEqual('o) number of elements in the sequence = 6')
    })

    it('must return "o) average value = 21.833333"', function () {
      expect(result[3]).toEqual('o) average value = 21.833333')
    })
  })

  describe('when pass as an argument like: [1, 10]', function () {
    beforeEach(function () {
      result = result = integerStatics([1, 10]).split('\n')
    })

    it('must return "o) minimum value = 1"', function () {
      expect(result[0]).toEqual('o) minimum value = 1')
    })

    it('must return "o) maximum value = 10"', function () {
      expect(result[1]).toEqual('o) maximum value = 10')
    })
  })
})
