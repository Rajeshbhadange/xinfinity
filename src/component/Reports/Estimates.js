import React from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Button,
  TextField,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  ButtonGroup,
  Stack,
} from "@mui/material";

const buttonData = [
  { label: "COPY", href: null },
  { label: "CSV", href: "../../assets/Image/Expense List - Generic Crm.csv" },
  { label: "EXCEL", href: "../../assets/Image/Expense List - Generic Crm.csv" },
  { label: "PRINT", href: "../../assets/Image/Expense List - Generic Crm.csv" },
  { label: "PDF", href: "../../assets/Image/Expense List - Generic Crm.csv" },
];

const Estimates = () => {
  return (
    <div>
      <Typography variant="h6">Invoices Report</Typography>
      {/* Example Report Table */}
      <Grid container spacing={2} sx={{ marginTop: "5px" }}>
        <Grid item xs={12} sm={4}>
          <InputLabel>Status</InputLabel>
          <FormControl fullWidth>
            <Select
              labelId="status-select"
              displayEmpty
              inputProps={{ "aria-label": "Select Status" }}
              sx={{ height: "35px" }}
            >
              <MenuItem value="">Select Status</MenuItem>
              <MenuItem value="">Darft</MenuItem>
              <MenuItem value="1">Unpaid</MenuItem>
              <MenuItem value="2">Paid</MenuItem>
              <MenuItem value="3">Partially Paid</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel>Sales Agent</InputLabel>
          <FormControl fullWidth>
            <Select
              labelId="status-select"
              displayEmpty
              inputProps={{ "aria-label": "Select Agent" }}
              sx={{ height: "35px" }}
            >
              <MenuItem value="">Select Sales Agent</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Box display="flex" flexDirection="row" gap={1} mt={2}>
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
      <Box display="flex" alignItems="center" justifyContent="flex-end" mb={2}>
        <label style={{ marginRight: "8px" }}>Search:</label>
        <TextField type="search" variant="outlined" size="small" />
      </Box>

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              {[
                "Estimates #",
                "Customer",
                "Date",
                "Due Date",
                "Amount",
                "Amount With Tax",
                "Total Tax",
                "Discount Total",
                "Adjustment",
                "Status",
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
                "000001",
                "Connor",
                "2024-04-30 04:49:31",
                "2024-05-07 04:49:31",
                "00.00	",
                "0",
                "0",
                "0",
                "0",
                "Sent",
              ],
              [
                "000002",
                "	Arianna",
                "2024-04-30 04:49:31",
                "2024-05-07 04:49:31",
                "00.00	",
                "0",
                "0",
                "0",
                "0",
                "Accepted",
              ],
              [
                "000003",
                "Vesta",
                "2024-04-30 04:49:31",
                "2024-05-07 04:49:31",
                "00.00	",
                "0",
                "0",
                "0",
                "0",
                "Expired",
              ],
            ].map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex} sx={{ justifyContent: "center" }}>
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
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
    </div>
  );
};

export default Estimates;
