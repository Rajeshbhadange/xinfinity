import React from "react";
import { Box, Stack } from "@mui/system";
import { Link } from "react-router-dom";
import Ccard from "../../component/Card/Ccard";
import ContractBox from "../../component/Card/ContractBox";
import {
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
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

const ContractList = () => {
  return (
    <>
      <Box sx={{ ml: 2, mt: 1 }}>
        <Box className="page-title">
          <h3>Contract</h3>
          <h3 className="link">
            <Link to="/">Dashboard</Link> / Contract
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
          justifyContent="flex-end"
          spacing={2}
        >
          <Button
            variant="contained"
            component={Link}
            to="/NewContract"
            sx={{
              backgroundColor: "royalblue",
              color: "white",
            }}
          >
            New
          </Button>
        </Stack>
      </Box>

      <Ccard />

      <div className="box-contract">
        <ContractBox />
      </div>

      <Box
        sx={{
          ...commonBoxStyles,
          display: "flex",
          flexDirection: "column",
          ml: "20px",
          mb: "50px",
        }}
      >
        <Box display="flex" flexDirection="row" gap={1} mb={2} flexWrap="wrap">
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
                marginBottom: 1,
              }}
            >
              {button.label}
            </Button>
          ))}
        </Box>

        <Box m={2}>
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
                    "Rel Contact",
                    "Subject",
                    "Contract Value",
                    "Contract Type",
                    "Start Date",
                    "End Date",
                    "Description",
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

          <Stack
            direction="row"
            spacing={2}
            mt={3}
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <div>Showing 0 to 0 of 0 entries</div>
            <ButtonGroup>
              <Button variant="outlined">Previous</Button>
              <Button variant="outlined">Next</Button>
            </ButtonGroup>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default ContractList;
