import React, { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { baseURL } from "../../Backend";
import {
  Container,
  Grid,
  Box,
  CardContent,
  Typography,
  Breadcrumbs,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const columns = [
  { id: "checkbox", label: "" },
  { id: "id", label: "ID", minWidth: 20 },
  { id: "firstName", label: "First Name", minWidth: 120 },
  { id: "secondName", label: "Second Name", minWidth: 100 },
  { id: "primaryEmail", label: "Primary Email", minWidth: 120 },
  { id: "primaryPhone", label: "Primary Phone", minWidth: 120 },
  { id: "leadSource", label: "Lead Source", minWidth: 120 },
  { id: "leadStatus", label: "Lead Status", minWidth: 120 },
  { id: "leadType", label: "Lead Type", minWidth: 120 },
  { id: "createdAt", label: "Created At", minWidth: 150 },
  { id: "actions", label: "Actions", minWidth: 100 },
];

function LeadList() {
  const [leads, setLeads] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [checked, setChecked] = useState([]);

  // Fetch leads from the backend
  useEffect(() => {
    fetch(`${baseURL}/getAllListLeads`)
      .then((response) => response.json())
      .then((data) => {
        // Check if 'data' is an object and has 'data' property
        if (data && Array.isArray(data.data)) {
          setLeads(data.data);
        } else {
          console.error("Unexpected data structure:", data);
          setLeads([]);
        }
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  // Function to create a new lead
  const handleCreateLead = async (newLeadData) => {
    try {
      const response = await axios.post("/api/leads", newLeadData);
      setLeads([...leads, response.data]);
    } catch (error) {
      console.error("Error creating lead:", error);
    }
  };

  // Pagination controls
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = (id) => console.log("Edit entry", id);
  const handleTransfer = (id) => console.log("Transfer entry", id);
  const handleDelete = (id) => console.log("Delete entry", id);

  const handleSelectAll = (event) => {
    setChecked(event.target.checked ? leads.map((lead) => lead._id) : []);
  };

  const handleSelect = (id) => {
    const selectedIndex = checked.indexOf(id);
    const newChecked =
      selectedIndex === -1
        ? [...checked, id]
        : checked.filter((item) => item !== id);
    setChecked(newChecked);
  };

  return (
    <>
      <Container fluid maxWidth={false}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box
              paddingBottom="10px"
              width="100%"
              className="page-title-box"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              marginTop="2em"
            >
              <Typography variant="h5" component="h4">
                Leads
              </Typography>
              <Breadcrumbs aria-label="breadcrumb">
                <Link to="/" color="textPrimary">
                  Dashboard
                </Link>
                <Typography color="inherit">Leads</Typography>
              </Breadcrumbs>
            </Box>
          </Grid>

          <Grid item xs={12} width="100%">
            <Card>
              <CardContent>
                <Grid
                  padding="5px"
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Button
                      variant="contained"
                      color="success"
                      component="a"
                      href="/Contacts_2024-08-09_06_09_58.csv"
                      download="contacts_2024-08-09_06_09_58.csv"
                      sx={{ color: "white" }}
                    >
                      Export CSV
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary">
                      <Link to="/CreateLead" sx={{ color: "white" }}>
                        New
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Paper
        sx={{
          width: "97%",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          margin: "25px",
          border: "2px solid aliceblue",
          marginBottom: "4em",
          boxShadow: "0px 0px 3px black",
        }}
      >
        <TableContainer sx={{ maxHeight: 650 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead sx={{ fontWeight: "bold" }}>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={
                      checked.length > 0 && checked.length < leads.length
                    }
                    checked={
                      leads.length > 0 && checked.length === leads.length
                    }
                    onChange={handleSelectAll}
                    aria-label="select all rows"
                  />
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {leads
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((lead) => {
                  const isItemSelected = checked.includes(lead._id);
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={lead._id}
                      selected={isItemSelected}
                      aria-checked={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          onChange={() => handleSelect(lead._id)}
                          aria-label={`select row ${lead._id}`}
                        />
                      </TableCell>
                      {columns.map((column) => {
                        const value = lead[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "actions" ? (
                              <Box sx={{ display: "flex", gap: 1 }}>
                                <Button
                                  onClick={() => handleEdit(lead._id)}
                                  startIcon={<EditIcon />}
                                  aria-label={`edit entry ${lead._id}`}
                                />
                                <Button
                                  onClick={() => handleTransfer(lead._id)}
                                  startIcon={<TransferWithinAStationIcon />}
                                  aria-label={`transfer entry ${lead._id}`}
                                />
                                <Button
                                  onClick={() => handleDelete(lead._id)}
                                  startIcon={<DeleteIcon />}
                                  aria-label={`delete entry ${lead._id}`}
                                />
                              </Box>
                            ) : (
                              <Typography>{value}</Typography>
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={leads.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

export default LeadList;
