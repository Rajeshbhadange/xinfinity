import React from "react";
import Chart from "react-apexcharts";

const PaymentRecord = () => {
  const options = {
    chart: {
      id: "chart-contractsbytype",
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "April",
        "May",
        "June",
        "Jul",
        "Aug",
        "Step",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      title: {
        text: "Payment",
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
        shadeIntensity: 0.4,
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
      name: "Payment",
      data: [0.2, 1.2, 0.4, 1.6, 0.8, 2.0, 1.2, 0.4, 1.6, 0.2, 0.8, 1.6],
    },
  ];

  return (
    <div
      className="card-body"
      style={{ position: "relative", height: "300px" }}
    >
      <Chart options={options} series={series} type="bar" height={365} />
    </div>
  );
};

export default PaymentRecord;
