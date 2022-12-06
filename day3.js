const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: fs.createReadStream('day3.txt'),
})

let totalPriority = 0

const checkItems = (comp1, comp2) => {
  let item = 0

  for (let i = 0; i < comp1.length; i++) {
    if (comp2.includes(comp1[i])) {
      item = comp1[i]
    }
  }

  if (item === item.toUpperCase()) {
    return item.charCodeAt(0) - 38
  } else {
    return item.charCodeAt(0) - 96
  }
}

const getPriority = (string) => {
  const half = string.length / 2
  const comp1 = string.slice(0, half)
  const comp2 = string.slice(half)

  const line = checkItems(comp1, comp2)
  return line
}

rl.on('line', (line) => {
  let linePriority = getPriority(line)
  totalPriority += linePriority
})

rl.on('close', () => console.log(totalPriority))
