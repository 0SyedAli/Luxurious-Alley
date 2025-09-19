"use client";

import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Colors,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const IncomeChart = ({ data }) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // Transform the API response data for the chart
    const chartData = {
        labels: data.map((item) => monthNames[item.month - 1]),
        datasets: [
            {
                label: `Total Revenue ($)`,
                data: data.map((item) => item.totalRevenue),
                backgroundColor: "#C78015   ",
                borderColor: "#C78015   ",
                borderWidth: 0,
                borderRadius: 15,
                borderSkipped: false,
            }
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    color: "#fff", // legend text color
                },
            },
            tooltip: {
                bodyColor: "#fff", // tooltip text color
                titleColor: "#fff",
            },
            chartAreaBorder: {
                borderWidth: 0,
            }

            // title: {
            //     display: true,
            //     text: `Yearly Revenue ${data[0].totalRevenue}`,
            // },
        },
        scales: {
            x: {
                ticks: {
                    color: "#fff", // x-axis labels color
                },
                grid: {
                    color: "rgba(255,255,255,0.1)", // optional: light grid lines
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: "#fff", // y-axis labels color
                },
                grid: {
                    color: "rgba(255,255,255,0.1)", // optional
                },
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};
export default IncomeChart;