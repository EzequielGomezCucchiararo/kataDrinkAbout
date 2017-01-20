// Kata: Drink About

// Problem Description

// Kids drink toddy. Teens drink coke. Young adults drink beer. Adults drink whisky.

// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old. Teens under 18 old. Young under 21 old. Adults have 21 or more.

// Examples:

// peopleWithAgeDrink(13) === "drink toddy"
// peopleWithAgeDrink(17) === "drink coke"
// peopleWithAgeDrink(18) === "drink beer"
// peopleWithAgeDrink(20) === "drink beer"
// peopleWithAgeDrink(30) === "drink whisky"

function peopleWithAgeDrink (age) {
  var intAge = parseInt(age, 10)

  swhich(intAge){

    case

  if (intAge < 14) {
    return 'drink toddy'
  }

  if (intAge >= 14 && intAge < 18) {
    return 'drink coke'
  }

  if (intAge >= 18 && intAge < 21) {
    return 'drink beer'
  }

  if (intAge >= 21) {
    return 'drink whisky'
  }
}
