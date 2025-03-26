import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Stack,
  Pagination,
  Select,
  MenuItem,
  IconButton,
  InputLabel,
} from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";

const Estimates = ({ contacts }) => {
  const [search, setSearch] = useState("");

  const filteredContacts = (contacts || []).filter(
    ({ firstname, secondname }) =>
      firstname.toLowerCase().includes(search.toLowerCase()) ||
      secondname.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((_, i) => i !== id);
    contacts(updatedContacts); // Assuming this updates the state in a parent component
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="page-title">
          <h2>Estimates</h2>
          <h2 className="link">
            <Link to="/">Dashboard</Link> / Estimates
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
            to="/CreateEstimate"
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
                    <th>Estimate #</th>
                    <th>Amount</th>
                    <th>Total Tax</th>
                    <th>Customer</th>
                    <th>Tags</th>
                    <th>Date</th>
                    <th>Expiry Date</th>
                    <th>Reference #</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContacts.map((contact, index) => (
                    <tr key={contact.id || index}>
                      <td>{contact.id}</td>
                      <td>{contact.subject}</td>
                      <td>{contact.to}</td>
                      <td>{contact.total}</td>
                      <td>{contact.date}</td>
                      <td>{contact.openTill}</td>
                      <td>{contact.tags}</td>
                      <td>{contact.status}</td>
                      <td>
                        <IconButton
                          component={Link}
                          to={`/contacts/${contact.id}/edit`}
                          color="primary"
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          color="error"
                          onClick={() => handleDelete(contact.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="footer mt-3">
                <span style={{ fontSize: "15px" }}>
                  Showing 1 to 10 of 100 entries
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

export default Estimates;
