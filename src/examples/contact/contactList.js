import React, { useState, useEffect, useMemo } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import EditIcon from "@mui/icons-material/Edit";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import { Link } from "react-router-dom";
import "./contact.css";
import { Button } from "@mui/material";
import { baseURL } from "../../Backend";
import Edit from "./module/edit";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch(`${baseURL}/getAllContacts`)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setContacts(data.data);
        } else {
          console.error("Unexpected data structure:", data);
          setContacts([]);
        }
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact._id !== id));
  };

  const filteredContacts = useMemo(
    () =>
      contacts.filter(
        (contact) =>
          (contact.firstName &&
            contact.firstName.toLowerCase().includes(search.toLowerCase())) ||
          (contact.secondName &&
            contact.secondName.toLowerCase().includes(search.toLowerCase()))
      ),
    [contacts, search]
  );

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  const paginatedContacts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredContacts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredContacts, currentPage]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="page-title">
          <h2 className="h2">Contacts</h2>
          <h2 className="link">
            <Link to="/">Dashboard</Link> / Home
          </h2>
        </div>
      </div>

      {/* Buttons */}
      <div className="scv">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="new">
                    <div className="btn-group focus-btn-group" role="group">
                      <a href="/exportContacts" className="btn-success">
                        Export CSV
                      </a>
                    </div>
                    <div className="col-md-6 text-end">
                      <Button>
                        <Link to="/CreateContact" className="btn-new">
                          New
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="row">
                  <div
                    className="show"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <label>
                      Show
                      <select className="custom-select">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                      entries
                    </label>
                    <div className="col-sm-12 col-md-6">
                      <div className="dataTables_filter">
                        <label>
                          Search:
                          <input
                            type="search"
                            className="form-control form-control-sm"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{ padding: "5px", borderRadius: "4px" }}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <table
                      id="contacts-datatables"
                      className="table table-bordered dt-responsive nowrap"
                      style={{
                        borderCollapse: "collapse",
                        borderSpacing: 0,
                        width: "100%",
                      }}
                    >
                      <thead>
                        <tr>
                          <th>
                            <input type="checkbox" id="selectAll" />
                          </th>
                          <th>id</th>
                          <th>first name</th>
                          <th>second name</th>
                          <th>primary email</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedContacts.map((contact) => (
                          <tr key={contact._id}>
                            <td>
                              <input type="checkbox" value={contact._id} />
                            </td>
                            <td>{contact._id}</td>
                            <td>
                              <Link to={`/contacts/${contact._id}`}>
                                {contact.firstName}
                              </Link>
                            </td>
                            <td>{contact.secondName}</td>
                            <td>{contact.primaryEmail}</td>
                            <td>
                              <div className="btn-group">
                                <Link
                                  to={`/CreateContact`}
                                  className="btn btn-info"
                                >
                                  <EditIcon />
                                </Link>
                                <button
                                  className="btn btn-primary"
                                  onClick={() => handleOpen()}
                                  aria-label="Transfer Contact"
                                >
                                  <TransferWithinAStationIcon />
                                </button>
                                <Edit
                                  open={modalOpen}
                                  handleClose={handleClose}
                                />
                                <button
                                  className="btn btn-danger"
                                  onClick={() => handleDelete(contact._id)}
                                  aria-label="Delete Contact"
                                >
                                  <DeleteIcon />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer">
              <span>
                Showing {paginatedContacts.length} of {filteredContacts.length}{" "}
                entries
              </span>
              <Stack spacing={2}>
                <Pagination
                  count={Math.ceil(filteredContacts.length / itemsPerPage)}
                  page={currentPage}
                  onChange={handleChangePage}
                />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
