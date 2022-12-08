const { readFileSync, promises: fsPromises } = require('fs')
const day7 = require('./day7')
// const input = readFileSync('./day7.txt', 'utf-8')

const testInput = 'a string'

test('returns input', () => {
  expect(day7(testInput)).toBe('a string')
})
