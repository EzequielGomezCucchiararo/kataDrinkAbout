describe('The function peopleWithAgeDrink ', function () {
  it('exist', function () {
    expect(peopleWithAgeDrink).toBeDefined()
  })

  it('return "drink toddy" when peopleWithAgeDrink(13)', function () {
    var result = peopleWithAgeDrink(13)
    expect(result).toEqual('drink toddy')
  })

  it('return "drink toddy" when peopleWithAgeDrink("13")', function () {
    var result = peopleWithAgeDrink('13')
    expect(result).toEqual('drink toddy')
  })

  it('return "drink coke" when peopleWithAgeDrink(14)', function () {
    var result = peopleWithAgeDrink(14)
    expect(result).toEqual('drink coke')
  })

  it('return "drink beer" when peopleWithAgeDrink(18)', function () {
    var result = peopleWithAgeDrink(18)
    expect(result).toEqual('drink beer')
  })

  it('return "drink whisky" when peopleWithAgeDrink(18)', function () {
    var result = peopleWithAgeDrink(22)
    expect(result).toEqual('drink whisky')
  })

  it('return a typeOf String when peopleWithAgeDrink(54)', function () {
    var result = peopleWithAgeDrink(54)
    expect(typeof result).toEqual('string')
  })
})
