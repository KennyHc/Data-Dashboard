import Parsing from './Parsing.js'

//main function
//returns an obj in the form of either 3
// [{x:'YYYY-MM-DD', y: **average applications per Listing for date**},....]
// [{x:'YYYY-MM', y: **average applications per Listing for date**},....]
// [{x:'YYYY', y: **average applications per Listing for date**},....]

const ListingParsing = (data, fidelity, range, showAll) => {
  setFidelity(fidelity)
  const dateList = Parsing(data, fidelity, range, showAll)
  dateList.forEach((date) => {
    date.y === 0
      ? (date.y = 0)
      : (date.y = date.y / findNumListingsForDate(data, date.x, fid))
  })
  return dateList
}

//################# helpers ###############//

var fid = 10

const setFidelity = (fidelity) => {
  if (fidelity === 'day') {
    fid = 10
  } else if (fidelity === 'month') {
    fid = 7
  } else if (fidelity === 'year') {
    fid = 4
  }
}

//find the number of unique listings for each date
const findNumListingsForDate = (data, date, fid) => {
  const currentDate = data.filter((n) => {
    return n.createdAt.slice(0, fid) === date
  })
  const set = new Set()
  currentDate.forEach((i) => set.add(i.listing_id))
  return set.size
}

export default ListingParsing
