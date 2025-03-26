import React from "react";
import Chart from "react-apexcharts";

const ContractsByChart = () => {
  const options = {
    chart: {
      id: "chart-contractsbytype",
      type: "donut", // Change the chart type to "donut"
    },
    labels: ["Type 1", "Type 2", "Type 3", "Type 4", "Type 5"], // Add labels for the donut chart
    legend: {
      position: "bottom",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%", // Adjust the size of the donut hole
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#becde6"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  const series = [5, 4, 3, 2, 1]; // Modify series data to match the donut chart format

  return (
    <div
      className="card-body"
      style={{ position: "relative", height: "300px" }}
    >
      <Chart options={options} series={series} type="donut" height={300} />
    </div>
  );
};

export default ContractsByChart;
