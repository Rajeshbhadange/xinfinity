import { Box, InputLabel, Typography } from "@mui/material";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import IncomeChart from "../../component/Graph/IncomeChart";

const ExpenceVsIncome = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
  };
  return (
    <div>
      <Box
        sx={{
          padding: { xs: 1, sm: 2 },
          marginTop: { xs: 1, sm: 5 },
          marginLeft: { xs: 1, sm: 2 },
          backgroundColor: "#FFF",
          border: "1px solid #f2f2f2",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h5">Generated Report</Typography>
        <InputLabel sx={{ mt: 2 }}>Year</InputLabel>

        <DatePicker
          selected={startDate}
          onChange={handleChange}
          dateFormat="yyyy"
          showYearPicker
          placeholderText="Select year"
        />
        <div style={{ margin: "16px" }}>
          <IncomeChart />
        </div>
      </Box>
    </div>
  );
};

export default ExpenceVsIncome;
