import React from "react";
import { Doughnut } from "react-chartjs-2";
import { data } from "react-router-dom";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function ChartDisplay ({title, description, numbers, labels, colors}){

    const settings = {
        labels : labels,
        datasets : [
            {
                backgroundColor : colors,
                data : numbers
            }
        ]
    };
    return(
        <div style={{width:'70%', leftMargin:'15%'}}>
            <Doughnut
                data = {settings}
                options={{
                    responsive : true,
                    maintainAspectRatio : true,
                    title : {
                        display : true,
                        fontSize : 10,
                        text : [title, description]
                    },
                    legend : {
                        display : true,
                        position : 'left'
                    }
                }}>

            </Doughnut>
        </div>
    );
}