import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

const ChartItem = ({ title, label, dataGrafik }) => {
    const [iniTitle, setTitle] = useState(title)
    const [iniLabel, setLabel] = useState(label)
    const [dataValue1, setDataValue1] = useState(dataGrafik.value1)
    const [dataValue2, setDataValue2] = useState(dataGrafik.value2)
    const [dataValue3, setDataValue3] = useState(dataGrafik.value3)
    const [dataValue4, setDataValue4] = useState(dataGrafik.value4)
    const [dataValue5, setDataValue5] = useState(dataGrafik.value5)

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        type: 'line',
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: iniTitle,
            },
        },
        interaction: {
            intersect: false,
        },
    };
    const labels = iniLabel;

    const data = {
        labels,
        datasets: [
            {
                label: 'PH',
                data: dataValue1,
                // data: dataValue1,
                borderColor: 'rgb(255, 0, 64)',
                backgroundColor: 'rgba(255, 0, 64)',
                tension: 0.4
            },
            {
                label: 'TDS',
                data: dataValue2,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235)',
                tension: 0.4
            },
            {
                label: 'SUHU',
                data: dataValue3,
                borderColor: ' rgb(43, 255, 0)',
                backgroundColor: 'rgba(43, 255, 0)',
                tension: 0.4
            },
            {
                label: 'SALINITAS',
                data: dataValue4,
                borderColor: 'rgb(255, 232, 21)',
                backgroundColor: 'rgba(255, 232, 21 )',
                tension: 0.4
            },
            {
                label: 'AMONIA',
                data: dataValue5,
                borderColor: 'rgb(0,0,0)',
                backgroundColor: 'rgba(0,0,0)',
                tension: 0.4
            },
        ],
    };
    return (
        <>
            <div className="flex justify-center card bg-base-100 border shadow-sm p-3 m-2">
                <Line options={options} data={data} height={70} width={100} />
            </div>
        </>
    );
}

export default ChartItem