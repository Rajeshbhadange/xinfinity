import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DatePicker from "react-datepicker";
import { FaRegFileExcel, FaRegFilePdf } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import ReportGraph from "../../../component/Graph/ReportGraph";
import Donut from "../../../component/Graph/Donut";

const Expence = () => {
  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
  };

  return (
    <div>
      <Box sx={{ ml: 2, mt: 1 }}>
        <Box className="page-title">
          <h3>Expense</h3>
          <h3 className="link">
            <Link to="/">Dashboard</Link> / Expense
          </h3>
        </Box>
      </Box>
      <Box
        sx={{
          padding: { xs: 1, sm: 2 },
          marginTop: { xs: 1, sm: 1 },
          marginLeft: { xs: 1, sm: 2 },
          backgroundColor: "#FFF",
          border: "1px solid #f2f2f2",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          spacing={2}
        >
          <div>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "10px" }}
              startIcon={<FaRegFilePdf />}
              onClick={() =>
                handleDownload(
                  "/https://uppingcrm.xfinitysoft.app/expense/reports_download",
                  "Expenses-2024.pdf"
                )
              }
            ></Button>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "10px" }}
              startIcon={<FaRegFileExcel />}
              onClick={() =>
                handleDownload(
                  "/https://uppingcrm.xfinitysoft.app/expense/reports_download",
                  "Expenses-2024.xlsx"
                )
              }
            ></Button>

            <DatePicker
              selected={startDate}
              onChange={handleChange}
              dateFormat="yyyy"
              showYearPicker
              placeholderText="Select year"
            />
          </div>
          <Button
            variant="contained"
            component={Link}
            to="/ExpensesReport"
            sx={{
              backgroundColor: "royalblue",
              color: "white",
            }}
          >
            Details Report
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          padding: { xs: 1, sm: 2 },
          marginTop: { xs: 1, sm: 2 },
          marginLeft: { xs: 1, sm: 2 },
          backgroundColor: "#FFF",
          border: "1px solid #f2f2f2",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                {[
                  "Category",
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                  "Year (2024)",
                ].map((header) => (
                  <TableCell key={header} sx={{ fontWeight: "bold" }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                [
                  <b>Sub Total</b>,
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                ],
                [
                  <b>Tax Amount</b>,
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                ],
                [
                  <b>Total Amount</b>,
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                  "$ 0.00",
                ],
              ].map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <TableCell
                      key={cellIndex}
                      sx={{ justifyContent: "center" }}
                    >
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                padding: { xs: 1, sm: 2 },
                marginTop: { xs: 1, sm: 2 },
                marginLeft: { xs: 1, sm: 2 },
                marginBottom: { xs: 1, sm: 3 },
                backgroundColor: "#FFF",
                border: "1px solid #f2f2f2",
                borderRadius: "5px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Typography variant="h5">Not Billable</Typography>
              <ReportGraph />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                padding: { xs: 1, sm: 2 },
                marginTop: { xs: 1, sm: 2 },
                marginLeft: { xs: 1, sm: 2 },
                marginBottom: { xs: 1, sm: 3 }, // Reduced space
                backgroundColor: "#FFF",
                border: "1px solid #f2f2f2",
                borderRadius: "5px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5">Billable</Typography>
              <Donut />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Expence;
