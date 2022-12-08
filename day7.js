const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: fs.createReadStream('day7.txt'),
})

let total = { '/': 0 }
let currentDir = '/'
let stack = []

//make a constructor class
//every time cd, create a new object
// let ffs = {
//   parent: null,
//   children: [a],
// }

rl.on('line', (line) => {
  parseLine(line)
})

// rl.on('close', () => console.log(total))

// const addDir = (line) => {
//   const newDir = line.slice(4)
//   total[newDir] = 0
// }

// const notparseLine = (line) => {
//   if (line.includes('dir')) {
//     addDir(line)
//   }

//   if (line.includes('cd ..')) {
//     stack.pop()
//     currentDir = stack[stack.length - 1]
//   }

//   if (line.includes(`cd`) && line[5] !== '.') {
//     currentDir = line[5]
//     stack.push(currentDir)
//   }

//   if (parseInt(line)) {
//     total[currentDir] += parseInt(line)
//   }
//   console.log(total)
// }
