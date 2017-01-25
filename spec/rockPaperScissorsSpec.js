describe('The function rockPaperScissors ', function () {
  it('exist', function () {
    expect(rockPaperScissors).toBeDefined()
  })

  it('must return a string', function () {
    var result = rockPaperScissors('paper', 'scissors')
    expect(typeof result).toEqual('string')
  })

  it('must return "PAPER vs SCISSORS => SCISSORS wins! when rockPaperScissors(\'paper\', \'scissors\')"', function () {
    var result = rockPaperScissors('paper', 'scissors')
    expect(result).toEqual('PAPER vs SCISSORS => SCISSORS wins!')
  })

  it('must return "ROCK vs SCISSORS => ROCK wins! when rockPaperScissors(\'rock\', \'scissors\')"', function () {
    var result = rockPaperScissors('rock', 'scissors')
    expect(result).toEqual('ROCK vs SCISSORS => ROCK wins!')
  })

  it('must return "ROCK vs SCISSORS => ROCK wins! when rockPaperScissors(\'ROCK\', \'SCISSORS\')"', function () {
    var result = rockPaperScissors('ROCK', 'SCISSORS')
    expect(result).toEqual('ROCK vs SCISSORS => ROCK wins!')
  })

  it('must return "ROCK vs \'[ROCK/SCISSORS/PAPER]\' => [ROCK/SCISSORS/PAPER] wins! when rockPaperScissors(\'ROCK\')"', function () {
    var result = rockPaperScissors('ROCK').split(' ')
    expect(result[2]).toMatch(/ROCK|PAPER|SCISSORS/)
  })
})

describe('The object \'game\' ', function () {
  it('exist', function () {
    expect(game).toBeDefined()
  })

  it('must have a player1 attribute', function () {
    expect(game.player1).toBeDefined()
  })

  it('must have a player2 attribute', function () {
    expect(game.player2).toBeDefined()
  })
})
