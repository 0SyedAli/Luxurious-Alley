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
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const IncomeChart = ({ data }) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const chartData = {
        labels: data.map((item) => monthNames[item.month - 1]),
        datasets: [
            {
                label: `Total Revenue ($)`,
                data: data.map((item) => item.totalRevenue),
                backgroundColor: "#C78015",
                borderColor: "#C78015",
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
                    color: "#FFFFFF", // dataset label
                },
            },
            tooltip: {
                bodyColor: "#FFFFFF",
                titleColor: "#FFFFFF",
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "#FFFFFF", // month name labels
                },
                grid: {
                    color: "rgba(255,255,255,0.1)",
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: "#FFFFFF", // y-axis labels
                },
                grid: {
                    color: "rgba(255,255,255,0.1)",
                },
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default IncomeChart;
