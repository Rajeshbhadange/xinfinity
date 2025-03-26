import React from "react";
import { Link } from "react-router-dom";
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
  ButtonGroup,
  Paper,
  Stack,
  Grid,
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
const ExpenseList = () => {
  return (
    <>
      <Box sx={{ ml: 2, mt: 1 }}>
        <Box className="page-title">
          <h2>Expense</h2>
          <h2 className="link">
            <Link to="/">Dashboard</Link> / Expense
          </h2>
        </Box>
      </Box>

      <Box p={2}>
        <Stack spacing={2}>
          <Box sx={commonBoxStyles}>
            <Stack direction="row" spacing={1} justifyContent="flex-end">
              <Button
                variant="contained"
                component={Link}
                to="/NewExpense"
                sx={{ backgroundColor: "royalblue", color: "white" }}
              >
                New
              </Button>
              <Button
                variant="contained"
                component={Link}
                to="/Import"
                sx={{
                  backgroundColor: "#34c38f",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#34c38f",
                  },
                  "&:active": {
                    backgroundColor: "#34c38f",
                  },
                }}
              >
                Import
              </Button>
            </Stack>
          </Box>
          <Box>
            <Grid container spacing={2} flexWrap="wrap">
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={commonBoxStyles} flex={1} minWidth="150px">
                  <b style={{ color: "orange" }}>Total</b>
                  <div>$0.00</div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={commonBoxStyles} flex={1} minWidth="140px">
                  <b style={{ color: "green" }}>Billable</b>
                  <div>$0.00</div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={commonBoxStyles} flex={1} minWidth="150px">
                  <b style={{ color: "orange" }}>Not billable</b>
                  <div>$0.00</div>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              ...commonBoxStyles,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box display="flex" flexDirection="row" gap={1} mb={2}>
              {buttonData.map((button, index) => (
                <Button
                  key={index}
                  component={button.href ? "a" : "button"}
                  href={button.href || undefined}
                  download={
                    button.href
                      ? button.label + " - Generic Crm.csv"
                      : undefined
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
                    {[
                      "ID",
                      "Name",
                      "Notes",
                      "Category",
                      "Date",
                      "Amount",
                      "Attachment",
                      "Related Contact",
                      "Currency",
                      "Tax1",
                      "Tax2",
                      "Actions",
                    ].map((header) => (
                      <TableCell key={header} sx={{ fontWeight: "bold" }}>
                        {header}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>{/* Add rows here */}</TableBody>
              </Table>
            </TableContainer>

            <Stack direction="row" spacing={2} mt={3}>
              Showing 0 to 0 of 0 entries
            </Stack>

            <Stack direction="row" spacing={2} justifyContent="flex-end" mt={3}>
              <ButtonGroup>
                <Button variant="outlined">Previous</Button>
                <Button variant="outlined">Next</Button>
              </ButtonGroup>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default ExpenseList;
