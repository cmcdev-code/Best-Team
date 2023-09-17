import React from 'react';
import { Line } from 'react-chartjs-2';
import {useState} from 'react';

function DetectChangeInUserInput() {

  const [parentChange, setParentChange] = useState('');

  const handleChildChange = (newValue) => {
    if(parentChange){
      //code to plot out data
    }
  };

}


class LineChart extends React.Component {


  
  render() {
    const data = {
      labels: [300, 580, 670, 740, 800], // credit?
      datasets: [
        {
          label: 'Percentage',
          data: [65, 59, 80, 81, 56],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false,
        },
      ],
    };

    const options = {
      scales: {
        x: {
          type: 'linear', // Specify that the X-axis should use linear scale
          position: 'bottom', // Place the X-axis at the bottom
          suggestedMax:850,
        },
        y: {
          beginAtZero: true,
          suggestedMax: 100,
        },
      },
    };

    return (
      <div>
        <h2>Credit score</h2>
        <Line data={data} options={options} />
      </div>
    );
  }
}

export default LineChart;
