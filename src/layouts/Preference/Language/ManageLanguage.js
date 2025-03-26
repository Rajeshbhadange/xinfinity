import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  ButtonGroup,
} from "@mui/material";
import { Link } from "react-router-dom";

const ManageLanguage = () => {
  const handleEdit = (id) => {
    console.log(`Edit item with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete item with ID: ${id}`);
  };

  return (
    <div>
      <Box sx={{ ml: 2, mt: 1 }}>
        <Box className="page-title">
          <h3>Languages</h3>
          <h3 className="link">
            <Link to="/">Dashboard</Link> / Languages
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
            type="button"
            variant="contained"
            component={Link}
            to="/NewLanguage"
            sx={{
              backgroundColor: "royalblue",
              color: "#FFF",
            }}
          >
            New
          </Button>
        </Stack>
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
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <FormControl variant="outlined" size="small">
              <InputLabel>Show</InputLabel>
              <Select label="Show" defaultValue={10}>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl variant="outlined" size="small">
              <InputLabel>Search</InputLabel>
              <TextField variant="outlined" size="small" placeholder="Search" />
            </FormControl>
          </Grid>
        </Grid>

        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                {["ID", "Language Code", "Language Name", "Action"].map(
                  (header) => (
                    <TableCell key={header} sx={{ fontWeight: "bold" }}>
                      {header}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {[["1", "en", "English"]].map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <TableCell
                      key={cellIndex}
                      sx={{ justifyContent: "center" }}
                    >
                      {cell}
                    </TableCell>
                  ))}
                  <TableCell sx={{ justifyContent: "center" }}>
                    <IconButton
                      onClick={() => handleEdit(row[0])}
                      color="primary"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDelete(row[0])}
                      color="secondary"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Stack direction="row" spacing={2} mt={5}>
          Showing 1 to 1 of 1 entries
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <ButtonGroup>
            <Button variant="outlined">Previous</Button>
            <Button variant="outlined">Next</Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </div>
  );
};

export default ManageLanguage;
