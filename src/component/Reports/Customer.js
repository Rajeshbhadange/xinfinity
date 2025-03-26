import React from "react";

import {
  Box,
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

const Customer = () => {
  return (
    <div>
      <Typography variant="h6">Invoices Report</Typography>
      {/* Example Report Table */}

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
              {["Customer", "Total Invoice", "Amount", "Amount With Tax"].map(
                (header) => (
                  <TableCell key={header} sx={{ fontWeight: "bold" }}>
                    {header}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              ["Adelle", "0", "0.00", "0.00"],
              ["Aimee", "0", "0.00", "0.00"],
              ["Arianna", "0", "0.00", "0.00"],
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
        Showing 1 to 10 of 100 entries
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

export default Customer;
