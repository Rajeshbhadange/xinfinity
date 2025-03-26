// ChartComponent.js
import React from "react";
import Chart from "react-apexcharts";
import "./ChartComponent.css"; // Make sure to create this CSS file

const ChartComponent = () => {
  const chartOptions = {
    chart: {
      id: "chart-contact-lead",
    },
    title: {
      text: "Contacts and leads added by month",
      align: "left",
    },
    series: [
      {
        name: "Contacts",
        data: [2, 10, 15, 13, 25, 22, 30, 45, 60, 48, 55, 75, 98],
      },
      {
        name: "Leads",
        data: [0, 5, 10, 8, 15, 12, 18, 25, 38, 32, 40, 60, 75],
      },
    ],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  return (
    <div className="Card-chart">
      <div className="card-body-c">
        <h4 className="card-title mb-4">Contacts and leads added by month</h4>
        <div className="mt-3" style={{ position: "relative" }}>
          <div className="apex-charts" style={{ minHeight: "365px" }}>
            <Chart
              options={chartOptions}
              series={chartOptions.series}
              type="line"
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
