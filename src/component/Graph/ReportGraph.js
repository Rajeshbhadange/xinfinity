import React from "react";

import Chart from "react-apexcharts";

const ReportGraph = () => {
  const chartOptions = {
    chart: {
      id: "chart-nonebillable",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["0", "1", "2", "3", "4", "5"],
    },
    yaxis: {
      labels: {
        formatter: (val) => val.toFixed(0),
      },
    },
    grid: {
      borderColor: "#e0e0e0",
    },
  };

  const chartSeries = [
    {
      name: "Non-Billable Report",
      data: [2, 3, 4, 3, 2, 1],
    },
  ];

  return (
    <div style={{ position: "relative", height: "300px" }}>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar" // or 'scatter', 'area', 'scatter', etc.
        height="300"
      />
    </div>
  );
};

export default ReportGraph;
