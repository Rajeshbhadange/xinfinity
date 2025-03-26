import { Box, Stack } from "@mui/system";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { baseURL } from "../../Backend";
import {
  Button,
  ButtonGroup,
  Card,
  Grid,
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

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${baseURL}/getAllListProject`)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setProjects(data.data);
        }
        setProjects(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setProjects(false);
      });
  }, []);

  // project Filter
  const filteredProjects = Array.isArray(projects)
    ? projects.filter(
        (project) =>
          project.name &&
          project.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <>
      <Box sx={{ ml: 2, mt: 1 }}>
        <Box className="page-title">
          <h3>Create Contract</h3>
          <h3 className="link">
            <Link to="/">Dashboard</Link> / Create Contract
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
            to="/CreateProject"
            sx={{
              backgroundColor: "royalblue",
              color: "white",
            }}
          >
            New
          </Button>
        </Stack>
      </Box>
      <Box>
        <Grid container spacing={2} pl={2} pt={3} fontSize="15px">
          {[
            "Not Started",
            "In Progress",
            "On Hold",
            "Cancelled",
            "Finished",
          ].map((status) => (
            <Grid item xs={12} lg={2.4} key={status}>
              <Card sx={{ p: 3 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    fontSize: "1.5rem",
                  }}
                >
                  <span>0</span>
                  <span style={{ color: "#2B4FEB" }}>{status}</span>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          ...commonBoxStyles,
          display: "flex",
          flexDirection: "column",
          ml: "20px",
          mb: "50px",
          mt: 2,
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
            <TextField
              type="search"
              variant="outlined"
              size="small"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Box>

          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  {[
                    "Name",
                    "Customer",
                    "Member",
                    "Start Date",
                    "Deadline",
                    "Tags",
                    "Actions",
                  ].map((header) => (
                    <TableCell key={header} sx={{ fontWeight: "bold" }}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <TableRow key={project._id}>
                      <TableCell>{project.name}</TableCell>
                      <TableCell>{project.customer}</TableCell>
                      <TableCell>{project.member}</TableCell>
                      <TableCell>{project.startdate}</TableCell>
                      <TableCell>{project.deadline}</TableCell>
                      <TableCell>{project.tags?.join(", ")}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          component={Link}
                          to={`/editProject/${project._id}`}
                        >
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} sx={{ textAlign: "center" }}>
                      {/* No data available in table */}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <Stack
            direction="row"
            spacing={2}
            mt={3}
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <div>
              Showing {filteredProjects.length} of {projects.length} entries
            </div>
            <ButtonGroup sx={{ opacity: 0.5 }}>
              <Button variant="outlined">Previous</Button>
              <Button variant="outlined">Next</Button>
            </ButtonGroup>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default ProjectList;
