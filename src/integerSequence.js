// Your task is to process a sequence of integer numbers
// to determine the following statistics:

//     o) minimum value
//     o) maximum value
//     o) number of elements in the sequence
//     o) average value

// For example: [6, 9, 15, -2, 92, 11]

//     o) minimum value = -2
//     o) maximum value = 92
//     o) number of elements in the sequence = 6
//     o) average value = 21.833333

function integerStatics (integerSequence) {
  var result
  var minimum
  var minimumString
  var maximum
  var maximumString
  var numOfElements
  var sumOfElements
  var average
  var averageString

  minimum = integerSequence[0]
  maximum = integerSequence[0]
  sumOfElements = 0
  average = 0

  for (var i = 0; i < integerSequence.length; i += 1) {
    if (integerSequence[i] < minimum) minimum = integerSequence[i]
    if (integerSequence[i] > maximum) maximum = integerSequence[i]
    sumOfElements += integerSequence[i]
  }

  average = (sumOfElements / integerSequence.length).toFixed(6)

  minimumString = 'o) minimum value = ' + minimum + '\n'
  maximumString = 'o) maximum value = ' + maximum + '\n'
  numOfElements = 'o) number of elements in the sequence = ' + integerSequence.length + '\n'
  averageString = 'o) average value = ' + average

  result = minimumString + maximumString + numOfElements + averageString

  return result
}

