import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Chart from "react-apexcharts";

const LeadsAssignedChart = () => {
  const chartOptions = {
    chart: {
      type: "bar", // Example chart type
      height: 350,
    },
    title: {
      align: "center",
    },
    xaxis: {
      categories: ["XfinitySoft"], // Example categories
    },
  };

  const chartData = [
    {
      name: "Leads",
      data: [36], // Example data
    },
  ];

  return (
    <Box className="col-xl-6">
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Leads assigned to each user
          </Typography>

          <Box sx={{ mt: 3, position: "relative", minHeight: 365 }}>
            <Chart
              options={chartOptions}
              series={chartData}
              type="bar"
              height={350}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LeadsAssignedChart;
