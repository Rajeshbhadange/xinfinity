import * as React from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";

const Donut = () => {
  //   const [data, setData] = React.useState([]);
  const data = [
    { label: "A1", value: 100, color: "#008B8B " },
    { label: "A2", value: 160, color: "#00FA9A" },
    { label: "B1", value: 100, color: "#1E90FF" },
    { label: "B2", value: 80, color: "#FFA500" },
    { label: "C1", value: 100, color: "#32CD32" },
    { label: "C2", value: 120, color: "#DC143C" },
  ];

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/data")
      .then((response) => {
        // setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <Stack direction="row" justifyContent="center">
      <PieChart
        series={[
          {
            innerRadius: 0,
            outerRadius: 150,
            data: data,
          },
        ]}
        width={300}
        height={300}
        slotProps={{
          legend: { hidden: true },
        }}
      />
    </Stack>
  );
};

export default Donut;
