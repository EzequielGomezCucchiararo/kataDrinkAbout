function fizzBuzz () {
  var myArray = []

  for (var i = 0; i < 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      myArray.push('FizzBuzz')
    } else if (i % 3 === 0) {
      myArray.push('Fizz')
    } else if (i % 5 === 0) {
      myArray.push('Buzz')
    } else {
      myAr ray.push(i)
    }
  }

  return myArray
}
