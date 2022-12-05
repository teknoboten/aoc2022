const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: fs.createReadStream('day2.txt'),
})

let totalScore = 0

//calculate the score for each line
//there's probably a prettier way to do this...plz dont judge me
const getLineScore = (line) => {
  // A X -> 3 + 0 = 3
  if (line === 'A X') {
    return 3
  }
  // A Y -> 1 + 3 = 4
  if (line === 'A Y') {
    return 4
  }
  // A Z -> 2 + 6 = 8
  if (line === 'A Z') {
    return 8
  }
  // B X -> 1 + 0 = 1
  if (line === 'B X') {
    return 1
  }
  // B Y -> 2 + 3 = 5
  if (line === 'B Y') {
    return 5
  }
  // B Z -> 3 + 6 = 9
  if (line === 'B Z') {
    return 9
  }
  // C X -> 2 + 0 = 2
  if (line === 'C X') {
    return 2
  }
  // C Y -> 3 + 3 = 6
  if (line === 'C Y') {
    return 6
  }
  // C Z -> 1 + 6 = 7
  if (line === 'C Z') {
    return 7
  }
}

rl.on('line', (line) => {
  let score = getLineScore(line)
  totalScore += score
})

rl.on('close', () => console.log(totalScore))
