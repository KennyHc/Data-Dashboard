import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = ({ numbers, title, label, filled }) => {
  //const timeFormat = 'YYYY-MM-DD'

  const chartData = {
    labels: numbers.map((i) => i.x),

    datasets: [
      {
        label: label,
        data: numbers,
        fill: filled,
        backgroundColor: 'rgb(75, 150, 140)',
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.3,
      },
    ],
  }

  var options = {
    responsive: true,

    scales: {
      xAxes: [
        {
          type: 'time',
          gridLines: {
            lineWidth: 2,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  return (
    <>
      <div className="header">
        <h1 className="title"> {title} </h1>
      </div>
      <Line data={chartData} options={options} />
    </>
  )
}

export default LineChart
