describe('A function fizzBuzz that ', function () {
  it('exist', function () {
    expect(fizzBuzz).toBeDefined()
  })

  it('Should return an array when fizBuzz()', function () {
    var result = fizzBuzz()
    expect(Array.isArray(result)).toEqual(true)
  })

  it('should return an array of 100 elements', function () {
    expect(fizzBuzz().length).toEqual(100)
  })

  it('should return true when fizzBuzz()[9] is equal to ¨Fizz¨', function () {
    var result = fizzBuzz()[9]
    expect(result).toEqual('Fizz')
  })

  it('should return true when fizzBuzz()[10] is equal to ¨Buzz¨', function () {
    var result = fizzBuzz()[10]
    expect(result).toEqual('Buzz')
  })
  it('should return true when fizzBuzz()[15] is equal to ¨FizzBuzz¨', function () {
    var result = fizzBuzz()[15]
    expect(result).toEqual('FizzBuzz')
  })
})
