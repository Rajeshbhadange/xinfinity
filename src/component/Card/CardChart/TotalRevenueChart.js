import React from "react";
import Chart from "react-apexcharts";

const TotalRevenueChart = () => {
  const options = {
    chart: {
      id: "total-revenue-chart",
      type: "bar",
      height: 40,
      width: 70,
      sparkline: {
        enabled: true, // This keeps it compact
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "70%",
      },
    },
    colors: ["#5B73E8"],
    stroke: {
      width: 0,
    },
    fill: {
      opacity: 0.85,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      crosshairs: {
        width: 1,
        strokeDashArray: 3,
      },
    },
  };

  const series = [
    {
      name: "Revenue",
      data: [30, 66, 41, 89, 63, 25, 44, 20, 36, 24], // Example data
    },
  ];

  return (
    <div
      className="float-end mt-2"
      style={{ position: "relative", minHeight: "40px" }}
    >
      <Chart
        options={options}
        series={series}
        type="bar"
        height={40}
        width={70}
      />
    </div>
  );
};

export default TotalRevenueChart;
