import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Tooltip,
  Pagination,
} from "@mui/material";

const exampleItems = [
  {
    id: "1",
    title: "Ex aperiam quis accusamus dolorem id.",
    description:
      "Eos doloremque ut et rerum amet. Velit non et sunt animi et nesciunt.150",
  },
  {
    id: "2",
    title: "Vel et ab incidunt dolorem dolorem.",
    description:
      "Voluptatem omnis error id inventore aut et. Qui nisi maiores laboriosam qui.",
  },
  // Add more invoice data here
];

const ItemsList = ({ items = exampleItems }) => {
  const [search, setSearch] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = items.filter(({ title }) =>
    title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    // Implement delete logic
    console.log(`Delete invoice with id: ${id}`);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Calculate the items to display based on pagination
  const startIndex = (currentPage - 1) * entriesPerPage;
  const displayedItems = filteredItems.slice(
    startIndex,
    startIndex + entriesPerPage
  );

  return (
    <div>
      <Box sx={{ ml: 2, mt: 1 }}>
        <Box className="page-title">
          <h3>Items</h3>
          <h3 className="link">
            <Link to="/">Dashboard</Link> / Items
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
            to="/CreateItems"
            sx={{
              backgroundColor: "royalblue",
              color: "white",
            }}
          >
            New
          </Button>
        </Stack>
      </Box>
      <Box sx={{ mt: 2, ml: 2 }}>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div
                  className="d-flex justify-content-between mb-3"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    Show
                    <Select
                      value={entriesPerPage}
                      onChange={(e) => setEntriesPerPage(e.target.value)}
                      variant="outlined"
                      size="small"
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
                      <th>ID</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody style={{ textAlign: "center" }}>
                    {displayedItems.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>
                          <ButtonGroup
                            aria-label="action buttons"
                            variant="contained"
                          >
                            <Tooltip title="Edit" placement="top">
                              <IconButton
                                component={Link}
                                to={`/invoices/${item.id}/edit`}
                                color="info"
                              >
                                <EditIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete" placement="top">
                              <IconButton
                                color="error"
                                onClick={() => handleDelete(item.id)}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Tooltip>
                          </ButtonGroup>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="footer mt-3">
                  <span style={{ fontSize: "15px" }}>
                    Showing {startIndex + 1} to{" "}
                    {startIndex + displayedItems.length} of{" "}
                    {filteredItems.length} entries
                  </span>

                  <Stack
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    mt={2}
                  >
                    <Pagination
                      count={Math.ceil(filteredItems.length / entriesPerPage)}
                      page={currentPage}
                      onChange={handlePageChange}
                    />
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default ItemsList;
