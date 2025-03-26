import {
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TableContainer,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const Payment = () => {
  const [, setEntriesPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");

  const data = [
    {
      id: 9,
      invoice: "000009",
      customer: "Dallin",
      amount: "$00.00",
      date: "2024-04-30 04:49:32",
    },
  ];

  const columns = [
    { name: "Payment #", selector: (row) => row.id, sortable: true },
    {
      name: "Invoice #",
      selector: (row) => (
        <Link to={`/${row.id}`} target="_parent" rel="noopener noreferrer">
          {row.invoice}
        </Link>
      ),
      sortable: true,
    },
    { name: "Customer", selector: (row) => row.customer, sortable: true },
    { name: "Amount", selector: (row) => row.amount, sortable: true },
    { name: "Date", selector: (row) => row.date, sortable: true },
  ];

  const filteredData = data.filter(
    (item) =>
      item.customer.toLowerCase().includes(searchText.toLowerCase()) ||
      item.invoice.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className="payment" style={{ margin: "16px" }}>
        <div className="row">
          <div className="page-title">
            <h2>Payment</h2>
            <h2 className="link">
              <Link to="/">Dashboard</Link> / Payment
            </h2>
          </div>
        </div>
      </div>
      <Box
        sx={{
          ml: "20px",
          border: "2px solid #f2f2f2",
          backgroundColor: "#FFF",
          borderRadius: "5px",
          boxShadow: "1px 1px 3px #000000",
          width: "98%",
        }}
      >
        <Box>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            m="10px"
          >
            <div>
              Show
              <Select
                defaultValue={10}
                variant="outlined"
                size="small"
                className="custom-select"
                onChange={(e) => setEntriesPerPage(e.target.value)}
                sx={{ m: 1 }}
              >
                {[10, 25, 50, 100].map((num) => (
                  <MenuItem key={num} value={num}>
                    {num}
                  </MenuItem>
                ))}
              </Select>
              entries
            </div>

            <Grid item xs={12} sm={3} display="flex">
              <InputLabel> Search:</InputLabel>
              <input
                type="search"
                style={{
                  padding: "5px",
                  marginLeft: "5px",
                  borderRadius: "5px",
                }}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Grid>
          </Grid>
          <Box>
            <TableContainer>
              <DataTable columns={columns} data={filteredData} />
              <div className="footer mt-3">
                <span style={{ fontSize: "15px" }}>
                  Showing 1 to 10 of 100 entries
                </span>
                <Stack spacing={2}>
                  <Pagination count={10} />
                </Stack>
              </div>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Payment;
