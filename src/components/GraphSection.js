import React from "react";
import { Line } from "react-chartjs-2";
import {ButtonGroup,Button} from "@material-ui/core";
import "./css/App.css";

// the graph data would generally be received as props from Api endpoints

const data = {
    labels: [
        0.34,1.35,2.36,3.38,4.39,5.40,6.43,7.43,8.44,9.46,10.47,11.48,12.50,13.51,14.52,15.54,16.55,
        17.56,18.58,19.59,20.60,21.62,22.63,23.64,24.66,25.67,26.68,27.70,28.71,29.72,30.74,31.75,32.76
        ],
    datasets: [
        {
            pointRadius:0.5,
            lineTension: 0.6,
            pointBorderColor: 'white',
            fill:false,
            borderColor: 'rgba(50,160,255,1)',
            data: [
                100,400,1000,1200,1500,1700,2000,2200,2550,2700,2850,3000,3200,3250,3500,3850,3900,
                4000,4050,4150,4300,4550,4600,4700,4800,4850,4950,4990,5000, 5120,5235,5140,5100
            ]
        }
    ]
};


const options = {
    title:{
      display:true,
        text:"",
        position:'bottom'
    },
    legend:{
      display : false
    },
    scales: {
        yAxes: [
            {
                scaleLabel: {
                    display: true,
                    labelString: 'Monthly Savings',
                    fontSize:"12",
                    fontStyle:"normal"
                },
                ticks: {
                    beginAtZero: true,
                    callback: function(value) {
                        return `$${value}`;
                    }
                }
            }
        ],
        xAxes: [
            {
                scaleLabel: {
                    display: true,
                    labelString: 'Hourly Commitment',
                    fontSize:"12",
                    fontStyle:"normal"
                },
                ticks: {
                    beginAtZero: true,
                    callback: function(value) {
                        return `$${value}`;
                    }
                }
            }
        ]
    }
};

function GraphSection() {
    return (
        <div className="container-fluid">

            <Line data={ data } options={ options }/>

            <div className="container-fluid flex-container filterSection">
                <h6>Filter by recent days: </h6>
                <ButtonGroup  className="buttonGroup">
                    <Button id="1" className="">3 Days</Button>
                    <Button  id="2">7 Days</Button>
                    <Button id="3" >1 Months</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default GraphSection;
