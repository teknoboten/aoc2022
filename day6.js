// const fs = require('fs')
const { readFileSync, promises: fsPromises } = require('fs')

const stream = readFileSync('./day6.txt', 'utf-8')

const findMarker = (string) => {
  let marker = ''
  let markerIndex = 0

  for (let i = 0; i < string.length; i++) {
    if (marker.includes(string[i])) {
      markerIndex++
      i = markerIndex
      marker = ''
    }

    if (!marker.includes(string[i])) {
      marker += string[i]
    }

    if (marker.length === 4) {
      return console.log(i + 1)
    }
  }
}

findMarker(stream)
