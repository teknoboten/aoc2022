const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: fs.createReadStream('day2.txt'),
})

let totalScore = 0

const shapes = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
}

const win = ['A Y', 'C X', 'B Z']
const draw = ['C Z', 'A X', 'B Y']
const loss = ['B X', 'C Y', 'A Z']

//calculate the score for each line
const getLineScore = (line) => {
  let lineScore = 0

  //value of char2
  lineScore += shapes[line[2]]

  if (win.includes(line)) {
    lineScore += 6
  }

  if (draw.includes(line)) {
    lineScore += 3
  }

  if (loss.includes(line)) {
  }

  return lineScore
}

//read and calculate the score for each line
//add result to the total score
rl.on('line', (line) => {
  let score = getLineScore(line)
  totalScore += score
})

rl.on('close', () => console.log(totalScore))
