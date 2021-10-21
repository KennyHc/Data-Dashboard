//main function
//returns an obj in the form of
// [{x:'YYYY-MM-DD', y: 0},....]
// with all dates from start to end
const EmptyDateObject = (start, end) => {
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf())
    date.setDate(date.getDate() + days)
    return date
  }

  //################# helpers ###############//

  function getDates(startDate, stopDate) {
    var dateArray = new Array()
    var currentDate = startDate
    while (currentDate <= stopDate) {
      dateArray.push(new Date(currentDate))
      currentDate = currentDate.addDays(1)
    }
    return dateArray
  }

  const completeDateArray = getDates(new Date(start), new Date(end))

  const completeDataObject = []

  completeDateArray.forEach((i) =>
    completeDataObject.push({ x: i.toISOString().split('T')[0], y: 0 })
  )

  console.log(completeDataObject)
  return completeDataObject
}

export default EmptyDateObject
