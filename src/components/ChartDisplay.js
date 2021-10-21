import React from 'react'
import LineChart from './LineChart'
import VerticalBar from './VerticalBar'
import Start from './Start'
import Slider from './Slider'
import { Container } from 'react-bootstrap'

const ChartDisplay = ({
  dataOption,
  chartData,
  title,
  label,
  range,
  setRange,
  fill,
  fidelity,
}) => {
  return (
    <div>
      {dataOption === '' ? (
        <Start />
      ) : (
        <div>
          <Container>
            {dataOption === 'categories' ? (
              <VerticalBar numbers={chartData} title={title} label={label} />
            ) : (
              <>
                {fidelity === 'year' ? (
                  <VerticalBar
                    numbers={chartData}
                    title={title}
                    label={label}
                  />
                ) : (
                  <>
                    <LineChart
                      numbers={chartData}
                      title={title}
                      label={label}
                      filled={fill}
                    />
                    <div className="centered">
                      <Slider range={range} setRange={setRange} />
                    </div>
                  </>
                )}
              </>
            )}
          </Container>
        </div>
      )}
    </div>
  )
}

export default ChartDisplay
