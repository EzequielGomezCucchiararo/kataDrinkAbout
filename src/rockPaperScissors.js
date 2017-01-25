var game = {
  player1: 0,
  player2: 0
}

function rockPaperScissors (move1, move2) {
  var result = ''

  function randomMovement2 () {
    var posibleResults = ['PAPER', 'SCISSORS', 'ROCK']
    return posibleResults[Math.floor(Math.random() * 2)]
  }

  if (!move2) move2 = randomMovement2()

  move1 = move1.toLowerCase()
  move2 = move2.toLowerCase()

  if (move1 === 'paper') {
    if (move2 === 'paper') {
      result = 'PAPER vs PAPER => tie!'
    } else if (move2 === 'scissors') {
      result = 'PAPER vs SCISSORS => SCISSORS wins!'
    } else if (move2 === 'rock') {
      result = 'PAPER vs ROCK => PAPER wins!'
    }
  } else if (move1 === 'scissors') {
    if (move2 === 'scissors') {
      result = 'SCISSORS vs SCISSORS => tie!'
    } else if (move2 === 'paper') {
      result = 'SCISSORS vs PAPER => SCISSORS wins!'
    } else if (move2 === 'rock') {
      result = 'SCISSORS vs ROCK => ROCK wins!'
    }
  } else if (move1 === 'rock') {
    if (move2 === 'rock') {
      result = 'ROCK vs ROCK => tie!'
    } else if (move2 === 'scissors') {
      result = 'ROCK vs SCISSORS => ROCK wins!'
    } else if (move2 === 'paper') {
      result = 'ROCK vs PAPER => PAPER wins!'
    }
  }

  return result
}
