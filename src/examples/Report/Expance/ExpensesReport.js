import React from "react";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import {
  Button,
  Box,
  TextField,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Typography,
  ButtonGroup,
  Paper,
  Stack,
} from "@mui/material";

const commonBoxStyles = {
  border: "2px solid #f2f2f2",
  p: 2,
  backgroundColor: "#FFF",
  borderRadius: "5px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const buttonData = [
  { label: "COPY", href: null },
  { label: "CSV", href: "../../assets/Image/Expense List - Generic Crm.csv" },
  { label: "EXCEL", href: "../../assets/Image/Expense List - Generic Crm.csv" },
  { label: "PRINT", href: "../../assets/Image/Expense List - Generic Crm.csv" },
  { label: "PDF", href: "../../assets/Image/Expense List - Generic Crm.csv" },
];

const ExpensesReport = () => {
  const headers = [
    "Category",
    "Amount($)",
    "Name",
    "Tax1(%)",
    "Tax2(%)",
    "Total Tax(%)",
    "Amount With Tax ($)",
    "Billable",
    "Date",
    "Customer",
    "Invoice",
  ];

  // Example row data
  const rows = [
    {
      category: <b>Total</b>,
      amount: "$0.00",
      name: " ",
      tax1: "0.00%",
      tax2: "0.00%",
      totalTax: "0.00%",
      amountWithTax: "$0.00",
      billable: " ",
      date: " ",
      customer: " ",
      invoice: " ",
    },
    // Add more rows as needed
  ];

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
      <Box p={2}>
        <Stack spacing={2}>
          <Box sx={commonBoxStyles}>
            <Stack direction="row" spacing={1} justifyContent="space-between">
              <Button
                variant="contained"
                component={Link}
                to="/Expence"
                sx={{
                  backgroundColor: "royalblue",
                  color: "white",
                }}
              >
                <ArrowLeftIcon />
              </Button>

              <Typography variant="h5">Expenses Report</Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          ...commonBoxStyles,
          display: "flex",
          flexDirection: "column",
          ml: 2,
        }}
      >
        <Box display="flex" flexDirection="row" gap={1} mb={2}>
          {buttonData.map((button, index) => (
            <Button
              key={index}
              component={button.href ? "a" : "button"}
              href={button.href || undefined}
              download={
                button.href ? button.label + " - Generic Crm.csv" : undefined
              }
              sx={{
                backgroundColor: "#34c38f",
                color: "#FFF",
                "&:hover": {
                  backgroundColor: "#34c38f",
                },
              }}
            >
              {button.label}
            </Button>
          ))}
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          mb={2}
        >
          <label style={{ marginRight: "8px" }}>Search:</label>
          <TextField type="search" variant="outlined" size="small" />
        </Box>
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={header} sx={{ fontWeight: "bold" }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.tax1}</TableCell>
                  <TableCell>{row.tax2}</TableCell>
                  <TableCell>{row.totalTax}</TableCell>
                  <TableCell>{row.amountWithTax}</TableCell>
                  <TableCell>{row.billable}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.customer}</TableCell>
                  <TableCell>{row.invoice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Stack direction="row" spacing={2} mt={5}>
          Showing 0 to 0 of 0 entries
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <ButtonGroup>
            <Button variant="outlined">Previous</Button>
            <Button variant="outlined">Next</Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </div>
  );
};

export default ExpensesReport;
