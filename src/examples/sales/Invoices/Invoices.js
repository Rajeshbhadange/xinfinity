import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToggleOff as ToggleOffIcon } from "@mui/icons-material";

import {
  Button,
  Stack,
  Pagination,
  Select,
  MenuItem,
  IconButton,
  InputLabel,
  ButtonGroup,
  Tooltip,
} from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";

const Invoices = ({ contacts }) => {
  const [search, setSearch] = useState("");

  // Example contact data
  const exampleContacts = [
    {
      id: "INV-001",
      amount: "$1500",
      totalTax: "$150",
      customer: "John Doe",
      tags: "Software, Service",
      Date: "2023-08-10",
      EDate: "2023-09-10",
      status: "Paid",
    },
    {
      id: "INV-002",
      amount: "$2000",
      totalTax: "$200",
      customer: "Jane Smith",
      tags: "Consulting",
      Date: "2023-09-01",
      EDate: "2023-10-01",
      status: "Unpaid",
    },
    // Add more invoice data here
  ];

  const filteredContacts = (contacts || exampleContacts).filter(
    ({ customer }) => customer.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    // Implement delete logic
    console.log(`Delete invoice with id: ${id}`);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="page-title">
          <h2>Invoices</h2>
          <h2 className="link">
            <Link to="/">Dashboard</Link> / Invoices
          </h2>
        </div>
      </div>

      <div className="row mb-4">
        <div
          className="col-12 text-end"
          style={{
            width: "98%",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "flex-end",
            padding: 10,
          }}
        >
          <Button
            variant="contained"
            component={Link}
            to="/CreateInvoices"
            sx={{ marginLeft: "auto" }}
          >
            New
          </Button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div
                className="d-flex justify-content-between mb-3"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>
                  Show
                  <Select
                    defaultValue={10}
                    variant="outlined"
                    size="small"
                    className="custom-select"
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
                <div>
                  <InputLabel>
                    Search:
                    <input
                      type="search"
                      style={{
                        padding: "5px",
                        margin: "5px",
                        borderRadius: "5px",
                      }}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </InputLabel>
                </div>
              </div>

              <table
                className="table table-bordered dt-responsive nowrap"
                style={{ width: "100%", marginTop: "10px" }}
              >
                <thead>
                  <tr>
                    <th>Invoices #</th>
                    <th>Amount</th>
                    <th>Total Tax</th>
                    <th>Customer</th>
                    <th>Tags</th>
                    <th>Date</th>
                    <th>Expiry Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                  {filteredContacts.map((contact, index) => (
                    <tr key={contact.id || index}>
                      <td>{contact.id}</td>
                      <td>{contact.amount}</td>
                      <td>{contact.totalTax}</td>
                      <td>{contact.customer}</td>
                      <td>{contact.tags}</td>
                      <td>{contact.Date}</td>
                      <td>{contact.EDate}</td>
                      <td>{contact.status}</td>
                      <td>
                        <ButtonGroup
                          aria-label="action buttons"
                          variant="contained"
                        >
                          <Tooltip title="Paid" placement="top">
                            <Button className="paid-btn">
                              <ToggleOffIcon />
                            </Button>
                          </Tooltip>
                          <Tooltip title="Edit" placement="top">
                            <IconButton
                              component="a"
                              href="https://uppingcrm.xfinitysoft.app/sales/invoices/1/edit"
                              color="info"
                            >
                              <EditIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete" placement="top">
                            <Button
                              className="delete-btn"
                              color="error"
                              onClick={() => handleDelete(contact.id)}
                            >
                              <DeleteIcon />
                            </Button>
                          </Tooltip>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="footer mt-3">
                <span style={{ fontSize: "15px" }}>
                  Showing 1 to 10 of {filteredContacts.length} entries
                </span>

                <Stack spacing={2}>
                  <Pagination count={10} />
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
