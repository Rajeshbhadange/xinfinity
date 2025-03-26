import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

const Import = () => {
  const [file, setFile] = useState(null);
  const [warning, setWarning] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setWarning("");
  };

  const handleImportClick = () => {
    if (!file) {
      setWarning("Please add a file before importing.");
    } else {
      console.log("File to be imported:", file);
    }
  };
  return (
    <>
      {" "}
      <Box sx={{ ml: 2, mt: 1 }}>
        <Box className="page-title">
          <h3>Import</h3>
          <h3 className="link">
            <Link to="/">Dashboard</Link> / Import
          </h3>
        </Box>
      </Box>
      <Box
        sx={{
          padding: { xs: 1, sm: 2 },
          marginTop: { xs: 1, sm: 1 },
          marginLeft: { xs: 1, sm: 2 },
          backgroundColor: "#dcedfc",
          border: "1px solid #f2f2f2",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          maxWidth: "100%", //
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "#306391",
            fontSize: { xs: "14px", sm: "14px" },
          }}
        >
          <ul>
            <li>
              Your CSV data should be in the format below. The first line of
              your CSV file should be the column headers as in the table
              example. Also make sure that your file is <b>UTF-8</b> to avoid
              unnecessary encoding problems.
            </li>
            <li>
              If the column{" "}
              <b>
                you are trying to import is date make sure that is formatted in
                format Y-m-d (2024-08-22).
              </b>
            </li>
            <li>
              In the column Category, you must add the{" "}
              <b>Expense Category NAME.</b>
            </li>
            <li>
              In the column<b> Tax </b> and <b> Tax2 </b>, you <b>must</b> add
              No Tax,5,10,18
            </li>
            <li>
              In the column <b>Payment Mode.</b> Cash,Stripe,Paypal.
            </li>
          </ul>
        </Typography>
      </Box>
      <Box sx={{ ml: { xs: 1, sm: 2 }, mt: { xs: 1, sm: 2 } }}>
        <Box className="page-title">
          <h2 style={{ fontSize: "1.5rem", margin: 0 }}>Import Expenses</h2>
          <Button
            href="https://uppingcrm.xfinitysoft.app/uploads/expense-sample.csv"
            sx={{
              backgroundColor: "#34c38f",
              color: "white",
              "&:hover": {
                backgroundColor: "#34c38f",
              },
              fontSize: { xs: "14px", sm: "13px" },
              padding: { xs: "6px 10px", sm: "8px 12px" },
            }}
          >
            Download Sample
          </Button>
        </Box>
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
          maxWidth: "100%",
        }}
      >
        <Box>
          <TableContainer sx={{ mt: 1 }}>
            <Table>
              <TableHead>
                <TableRow>
                  {[
                    "Category",
                    "Amount",
                    "Tax1",
                    "Tax2",
                    "Reference#",
                    "Expense Note",
                    "Name",
                    "Customer",
                    "Payment Mode",
                    "Date",
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
        </Box>
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
          maxWidth: "100%",
        }}
      >
        <TextField
          type="file"
          name="import"
          fullWidth
          InputLabelProps={{ shrink: true }}
          onChange={handleFileChange}
          sx={{ mb: 2 }}
        />
        {warning && (
          <Typography color="error" sx={{ mb: 2 }}>
            {warning}
          </Typography>
        )}
        <Button
          type="button"
          variant="contained"
          color="success"
          onClick={handleImportClick}
        >
          Import
        </Button>
      </Box>
    </>
  );
};

export default Import;
