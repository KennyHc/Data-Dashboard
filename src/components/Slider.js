import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'

const RangeSlider = ({ range, setRange }) => {
  const useStyles = makeStyles({
    root: {
      width: 500,
    },
  })
  function valuetext(value) {
    return `${value}`
  }
  const classes = useStyles()

  const handleChange = (event, newValue) => {
    setRange(newValue)
  }
  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom></Typography>
      <Slider
        value={range}
        onChange={handleChange}
        valueLabelDisplay="off"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  )
}

export default RangeSlider
