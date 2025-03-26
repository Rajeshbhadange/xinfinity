import React from "react";
import Chart from "react-apexcharts";

const ContractsByTypeChart = () => {
  const options = {
    chart: {
      id: "chart-contractsbytype",
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["0", "1", "2", "3", "4", "5"],
    },
    yaxis: {
      title: {
        text: "Contracts",
      },
    },
    grid: {
      borderColor: "#e0e0e0",
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#becde6"],
        inverseColors: true,
        opacityFrom: 0.6,
        opacityTo: 0.8,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  const series = [
    {
      name: "Contracts By Type",
      data: [5, 4, 3, 2, 1, 0],
    },
  ];

  return (
    <div
      className="card-body"
      style={{ position: "relative", height: "300px" }}
    >
      <Chart options={options} series={series} type="bar" height={300} />
    </div>
  );
};

export default ContractsByTypeChart;
