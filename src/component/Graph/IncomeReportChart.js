import React from "react";
import Chart from "react-apexcharts";

const IncomeReportChart = () => {
  const chartOptions = {
    chart: {
      id: "income-report-chart",
      type: "bar",
    },
    xaxis: {
      categories: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], // X-axis categories
    },
    yaxis: {
      title: {
        text: "Income",
      },
    },
    grid: {
      show: true,
      borderColor: "#e0e0e0",
    },
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#00E396"],
  };

  const chartSeries = [
    {
      name: "Total Income",
      data: [4, 6, 8, 4, 6, 10, 4, 7, 2, 3, 1], // Sample data
    },
  ];

  return (
    <div
      id="chart-incomereport"
      style={{ position: "relative", height: "400px", marginTop: "20px" }}
    >
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height="400"
      />
    </div>
  );
};

export default IncomeReportChart;
