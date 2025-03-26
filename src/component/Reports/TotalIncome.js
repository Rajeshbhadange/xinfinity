import { Typography } from "@mui/material";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import IncomeReportChart from "../Graph/IncomeReportChart";
const TotalIncome = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
  };
  return (
    <div>
      <Typography variant="h5" mb={1}>
        Total Income
      </Typography>

      <span style={{ display: "flex", marginBottom: "8px" }}>Year</span>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        dateFormat="yyyy"
        showYearPicker
        placeholderText="Select year"
      />
      <IncomeReportChart />
    </div>
  );
};

export default TotalIncome;
