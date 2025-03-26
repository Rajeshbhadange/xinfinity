import React from "react";
import {
  Box,
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
  Typography,
} from "@mui/material";

const buttonData = [
  { label: "COPY", href: null },
  { label: "CSV", href: "../../assets/Image/Expense List - Generic Crm.csv" },
  { label: "EXCEL", href: "../../assets/Image/Expense List - Generic Crm.csv" },
  { label: "PRINT", href: "../../assets/Image/Expense List - Generic Crm.csv" },
  { label: "PDF", href: "../../assets/Image/Expense List - Generic Crm.csv" },
];

const Proposals = () => {
  return (
    <div>
      <Typography variant="h5">Generated Report</Typography>
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
              {[
                "ID",
                "Subject",
                "To",
                "Amount",
                "Date",
                "open Till",
                "Discount Total",
                "Adjustment",
                "Status",
              ].map((header) => (
                <TableCell key={header} sx={{ fontWeight: "bold" }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>{" "}
          </TableHead>
          <TableBody>
            {[
              [
                "1",
                "Pariatur",
                "XfinitySoft",
                "00.00",
                "2024-04-30 04:49:31",
                "2024-07-02 04:49:31",
                "0",
                "0",
                "Open",
              ],
              [
                "2",
                "Harum",
                "XfinitySoft",
                "00.00",
                "2024-04-30 04:49:31",
                "2024-07-02 04:49:31",
                "0",
                "0",
                "Draft",
              ],
              [
                "3",
                "Nostrum",
                "XfinitySoft",
                "00.00",
                "2024-04-30 04:49:31",
                "2024-07-02 04:49:31",
                "0",
                "0",
                "Sent",
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

export default Proposals;
