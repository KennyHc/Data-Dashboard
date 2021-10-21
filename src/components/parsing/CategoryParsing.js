//main function
//returns an obj in the form of
// [{x:**category**, y: **value**},....]
const CategoryParsing = (categories, userCategories) => {
  cats = categories
  const obj = reduceToCategories(getArrayOfCategories(userCategories))
  return obj
}

//################# helpers ###############//

//categories
var cats = []

const reduceToCategories = (arr) => {
  const occurrences = arr.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc
  }, {})
  const array = []
  const keys = Object.keys(occurrences)
  keys.forEach((d) => array.push({ x: d, y: occurrences[d] }))
  return array
}

const getArrayOfCategories = (array) => {
  return array.map((i) => getCategoryString(i.category_id))
}

const getCategoryString = (id) => {
  return cats.find((c) => c.id === id).value
}

export default CategoryParsing
