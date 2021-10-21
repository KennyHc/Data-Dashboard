import EmptyDateObject from './EmptyDateObject'

//main function
//returns an obj in the form of either 3
// [{x:'YYYY-MM-DD', y: **occurrences for date**},....]
// [{x:'YYYY-MM', y: **occurrences for date**},....]
// [{x:'YYYY', y: **occurrences for date**},....]
const Parsing = (data, fidelity, range, showAll) => {
  setFidelity(fidelity)
  all = showAll

  creatorDates = reduceToDates(getArrayOfDates(data).sort(dateSort))
  const final = createFinalData()
  const dataSize = final.length

  const start = Math.floor((range[0] * dataSize) / 100)
  const end = Math.floor((range[1] * dataSize) / 100)

  return fid === 4 ? final : final.slice(start, end)
}

//################# helpers ###############//

var creatorDates = []
var fid = 10

var all = true

const dateSort = (a, b) => {
  return new Date(a).getTime() - new Date(b).getTime()
}

const reduceToDates = (dateArray) => {
  const occurrences = dateArray.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc
  }, {})
  return occurrences
}

const getArrayOfDates = (array) => {
  return array.map((i) => i.createdAt.slice(0, fid))
}

//creates final data in the form [{x: KEY, y: VALUE},...]
const createFinalData = () => {
  const array = []

  const keys = Object.keys(creatorDates)

  if (fid === 10 && all) {
    const completeDateArray = EmptyDateObject(keys[0], keys[keys.length - 1])
    keys.forEach((d) =>
      completeDateArray.forEach((i) =>
        i.x === d ? (i.y = creatorDates[d]) : () => {}
      )
    )
    return completeDateArray
  } else {
    keys.forEach((d) => array.push({ x: d, y: creatorDates[d] }))
    return array
  }
}

//involved in which parts of the YYYY-MM-DD string we want
const setFidelity = (fidelity) => {
  if (fidelity === 'day') {
    fid = 10
  } else if (fidelity === 'month') {
    fid = 7
  } else if (fidelity === 'year') {
    fid = 4
  }
}

export default Parsing
