import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'tailwindcss/tailwind.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BloodPressureChart = ({ data: diagnosisHistory }) => {
    const [selectedMonths, setSelectedMonths] = useState(6);

    // Extract relevant data for the chart
    const monthsLabels = diagnosisHistory.map((record) => record.month.slice(0, 3) + ',' + record.year);
    const diastolicData = diagnosisHistory.map((record) => record.blood_pressure.diastolic.value);
    const systolicData = diagnosisHistory.map((record) => record.blood_pressure.systolic.value);

    // Handle month selection
    const handleMonthChange = (e) => {
        setSelectedMonths(parseInt(e.target.value));
    };

    // Prepare chart data based on selected months
    const chartData = {
        labels: [...monthsLabels].reverse().slice(-selectedMonths),
        datasets: [
            {
                label: 'Systolic Blood Pressure',
                data: [...systolicData].reverse().slice(-selectedMonths),
                borderColor: '#E66FD2', // Light blue for systolic
                backgroundColor: '#E66FD2', // Light blue transparency
                fill: true,
                tension: 0.3, // Adds a slight curve to the line
            },
            {
                label: 'Diastolic Blood Pressure',
                data: [...diastolicData].reverse().slice(-selectedMonths),
                borderColor: '#8C6FE6', // Red for diastolic
                backgroundColor: '#8C6FE6', // Light red transparency
                fill: true,
                tension: 0.3, // Adds a slight curve to the line
            },
        ],
    };

    // Define chart options
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Disable the legend
            },
        },
        scales: {
            x: {
                grid: {
                    display: false, // Remove vertical grid lines
                },
                ticks: {
                    maxRotation: 0, // Keep labels straight
                    minRotation: 0,
                    // Reduce label spacing as selectedMonths increases
                    autoSkip: true,
                    maxTicksLimit: selectedMonths <= 3 ? 3 : selectedMonths <= 6 ? 6 : 12,
                },
            },
        },
    };

    return (
        <div className='p-4'>
            {/* Header and month selector */}
            <div className='flex justify-between md:px-4 px-0'>
                <h2 className='text-lg font-bold'>Blood Pressure</h2>
                <div>
                    <select
                        id='month-select'
                        value={selectedMonths}
                        onChange={handleMonthChange}
                        className='bg-inherit outline-none text-sm rounded-md'>
                        <option value={3}>Last 3 months</option>
                        <option value={6}>Last 6 months</option>
                        <option value={12}>Last 12 months</option>
                    </select>
                </div>
            </div>

            {/* Chart display */}
            <div className='rounded-lg md:p-4 md:w-[400px] lg:w-[500px] w-[260px] max-w-xl'>
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    );
};

export default BloodPressureChart;
