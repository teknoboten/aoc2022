const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: fs.createReadStream('day3.txt'),
})

let totalPriority = 0

const findBadges = (arr) => {
  let badge = 0

  for (let i = 0; i < arr[0].length; i++) {
    if (arr[1].includes(arr[0][i]) && arr[2].includes(arr[0][i])) {
      badge = arr[0][i]
    }
  }

  if (badge === badge.toUpperCase()) {
    return badge.charCodeAt(0) - 38
  } else {
    return badge.charCodeAt(0) - 96
  }
}

let group = []

rl.on('line', (line) => {
  group.push(line)

  if (group.length === 3) {
    let groupPriority = findBadges(group)
    totalPriority += groupPriority
    group = []
  }
})

rl.on('close', () => console.log(totalPriority))
