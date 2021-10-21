import CategoryParsing from './components/parsing/CategoryParsing'
import ListingParsing from './components/parsing/ListingParsing'
import ChartDisplay from './components/ChartDisplay'
import Parsing from './components/parsing/Parsing'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import axios from 'axios'
import './App.css'

function App() {
  //DROPDOWN MENU STATES
  const [dataOption, setDataOption] = useState('')
  const [fidelity, setFidelity] = useState('day')
  const [showAll, setShowAll] = useState(true)
  const [fill, setFill] = useState(false)

  //CHART COMPONENT STATES
  const [chartData, setChartData] = useState([])
  const [title, setTitle] = useState('')
  const [label, setLabel] = useState('')
  const [range, setRange] = useState([0, 100])

  useEffect(() => {
    //get user data from express server
    const fetchUserData = async () => {
      const res = await axios.get('/users')
      const data = await res.data.filter(
        (data) => data.user_type[0] === 'creator'
      )
      setChartData(Parsing(data, fidelity, range, showAll))
    }

    //get application data from express server
    const fetchApplicationData = async () => {
      const res = await axios.get('/applications')
      const data = await res.data
      setChartData(Parsing(data, fidelity, range, showAll))
    }

    //get application data from express server
    const fetchListingData = async () => {
      const res = await axios.get('/applications')
      const data = await res.data
      setChartData(ListingParsing(data, fidelity, range, showAll))
    }

    //get campaign data from express server
    const fetchCampaignData = async () => {
      const res = await axios.get('/campaigns')
      const data = await res.data
      setChartData(Parsing(data, fidelity, range, showAll))
    }

    //get category data form express server
    const fetchCategoryData = async () => {
      const res1 = await axios.get('/categories')
      const categories = await res1.data
      const res2 = await axios.get('/usercategories')
      const userCategories = await res2.data

      setChartData(CategoryParsing(categories, userCategories))
    }

    setChartData([])

    //fetch and set chart according to selected option
    if (dataOption === 'applications') {
      fetchApplicationData()
      setLabel('# of applications')
      setTitle(`Creator applications per ${fidelity}`)
    } else if (dataOption === 'newUsers') {
      fetchUserData()
      setLabel('# of new users')
      setTitle(`New Corcus creator accounts per ${fidelity}`)
    } else if (dataOption === 'avgAppPerListing') {
      fetchListingData()
      setLabel('# of average applications per listing')
      setTitle(`Average number of applications per listing per ${fidelity}`)
    } else if (dataOption === 'campaigns') {
      fetchCampaignData()
      setLabel('# of campaigns')
      setTitle(`Number of new Campaigns per ${fidelity}`)
    } else if (dataOption === 'categories') {
      setLabel('# of creators')
      fetchCategoryData()
      setTitle('Creator categories distribution')
    }
    //use effect dependency list:
  }, [dataOption, fidelity, range, showAll])

  return (
    <div className="container">
      <Container className="centered">
        <Header
          setFidelity={setFidelity}
          setDataOption={setDataOption}
          dataOption={dataOption}
          setShowAll={setShowAll}
          fill={fill}
          setFill={setFill}
        />
      </Container>
      <ChartDisplay
        dataOption={dataOption}
        chartData={chartData}
        title={title}
        label={label}
        range={range}
        setRange={setRange}
        fill={fill}
        fidelity={fidelity}
      />
    </div>
  )
}

export default App
