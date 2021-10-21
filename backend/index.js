const {
  Application,
  ApplicationMessages,
  Users,
  Listing,
  Company,
  Category,
  Campaign,
  Creators,
  CompanyManagers,
  UserCategory,
} = require('./db/sequelize')

const express = require('express')
const app = express()

app.use(express.json())

//get all users
const getAllUsers = async () => {
  console
  try {
    const allUsers = await Users.findAll()

    return allUsers
  } catch (error) {}
}

const getAllCampaign = async () => {
  console
  try {
    return await Campaign.findAll()
  } catch (error) {
    console.log('Error: ', error)
  }
}

//get all applications
const getAllApplications = async () => {
  console
  try {
    const allApplications = await Application.findAll()

    return allApplications
  } catch (error) {
    console.log('Error: ', error)
  }
}

const getCreators = async () => {
  console
  try {
    const allCreators = await Creators.findAll()

    return allCreators
  } catch (error) {
    console.log('Error: ', error)
  }
}

const getCategories = async () => {
  console
  try {
    return await Category.findAll()
  } catch (error) {
    console.log('Error: ', error)
  }
}

const getUserCategories = async () => {
  console
  try {
    return await UserCategory.findAll()
  } catch (error) {
    console.log('Error: ', error)
  }
}

//get all application dates
const getAllAppDates = async () => {
  console
  try {
    const allAppDates = await Application.findAll({
      attributes: ['createdAt'],
    })

    return allAppDates
  } catch (error) {
    console.log('Error: ', error)
  }
}

app.get('/users', (req, res) => {
  getAllUsers().then((users) => res.json(users))
})

app.get('/usercategories', (req, res) => {
  getUserCategories().then((users) => res.json(users))
})

app.get('/categories', (req, res) => {
  getCategories().then((users) => res.json(users))
})

app.get('/creators', (req, res) => {
  getCreators().then((c) => res.json(c))
})

app.get('/applications', (req, res) => {
  getAllApplications().then((app) => res.json(app))
})

app.get('/campaigns', (req, res) => {
  getAllCampaign().then((c) => res.json(c))
})

app.get('/applications/dates', (req, res) => {
  getAllAppDates().then((date) => res.json(date))
})

app.listen(5001, () => {
  console.log('Server is running on port 5001')
})
