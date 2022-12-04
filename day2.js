const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: fs.createReadStream('day2.txt'),
  // output: process.stdout,
  // terminal: false
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

const win = ['A Y']
const draw = ['C Z']
const loss = ['B X']

// A X
// B X
// C X
// A Y
// B Y
// C Y
// A Z
// B Z
// C Z

const getLineScore = (line) => {
  let lineScore = 0

  //value of char2
  lineScore += shapes[line[2]]

  // if (line === 'A Y'){
  //   console.log('win!')
  //   totalScore += 6
  // }

  // if (line === 'B X'){
  //   console.log('loss!')
  // }

  // if (line === 'C Z'){
  //   console.log('draw!')
  //   totalScore += 3
  // }

  if (win.includes(line)) {
    // console.log('win!')
    lineScore += 6
  }

  if (draw.includes(line)) {
    // console.log('draw!')
    lineScore += 3
  }

  if (loss.includes(line)) {
    // console.log('loss!')
  }

  // console.log('line score', lineScore)
  return lineScore
}

rl.on('line', (line) => {
  // console.log('get score:', getScore(line))

  let score = getLineScore(line)
  totalScore += score

  // totalScore += getScore(line)
})

rl.on('close', () => console.log(totalScore))

// module.exports = getTotalScore
