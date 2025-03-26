import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import AddSection from "../../../component/Modal/AddSection";
import EditSection from "../../../component/Modal/EditSection";
import EditField from "../../../component/Modal/EditField";
import AddField from "../../../component/Modal/AddField";

const data = [
  {
    id: 1,
    label: "First Name",
    type: "text",
    column: "First",
    required: "Yes",
    active: "Yes",
  },
];

const CustomFields = ({ formData, handleChange }) => {
  const [modalOpen, setModalOpen] = useState(false); // For a general modal
  const [editModalOpen, setEditModalOpen] = useState(false); // For the EditSection dialog
  const [editFormModalOpen, setEditFormModalOpen] = useState(false);
  const [addFormModalOpen, setAddFormModalOpen] = useState(false);

  // Functions to handle the EditSection dialog
  const handleEditModalOpen = () => setEditModalOpen(true);
  const handleEditModalClose = () => setEditModalOpen(false);

  const handleEditFormModalOpen = () => setEditFormModalOpen(true);
  const handleEditFormModalClose = () => setEditFormModalOpen(false);

  const handleAddFormModalOpen = () => setAddFormModalOpen(true);
  const handleAddFormModalClose = () => setAddFormModalOpen(false);

  // Functions to handle the general modal
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleEdit = (fieldId) => {
    console.log(`Editing field with ID: ${fieldId}`);
    handleEditModalOpen(); // Open the edit dialog when editing
  };

  const handleEditForm = (fieldLabel) => {
    console.log(`Editing field with Label: ${fieldLabel}`);
    handleEditFormModalOpen(); // Open the edit dialog when editing
  };

  const handleAddField = () => {
    handleAddFormModalOpen(); // Open the add field dialog
  };

  return (
    <div>
      <Box sx={{ ml: 2, mt: 1 }}>
        <Box className="page-title">
          <h3>Custom fields</h3>
          <h3 className="link">
            <Link to="/">Dashboard</Link> / Custom fields
          </h3>
        </Box>
      </Box>
      <InputLabel sx={{ ml: 2 }}>Module</InputLabel>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <FormControl fullWidth>
          <Select
            name="department"
            value={formData?.module || ""} // Fallback to an empty string
            onChange={handleChange}
            required
            sx={{ height: "40px", background: "#FFF", width: "80%", ml: 2 }}
          >
            <MenuItem value="">
              <em>Contact</em>
            </MenuItem>
            <MenuItem value="event">Event</MenuItem>
            <MenuItem value="leads">Leads</MenuItem>
            <MenuItem value="tasks">Tasks</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          onClick={handleModalOpen}
          sx={{
            backgroundColor: "#50a5f1",
            color: "white",
            width: "180px",
            marginRight: "20em",
          }}
        >
          Add Section
        </Button>
        <AddSection open={modalOpen} handleClose={handleModalClose} />
      </Box>
      <Box
        sx={{
          marginTop: { xs: 1, sm: 2 },
          marginLeft: { xs: 1, sm: 2 },
          backgroundColor: "#FFF",
          border: "2px solid #f2f2f2",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#f2f2f2",
            padding: { xs: 1, sm: 2 },
          }}
        >
          <Typography variant="h5" gutterBottom>
            Basic Information
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "royalblue",
              color: "white",
              width: "50px",
              height: "30px",
            }}
            onClick={handleEdit} // Open dialog on click
          >
            Edit
          </Button>
          <EditSection
            open={editModalOpen}
            handleClose={handleEditModalClose}
          />
        </Box>
        <Box className="responsive-table" sx={{ padding: 2 }}>
          <TableContainer component={Paper}>
            <Table aria-label="custom fields table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Field Label</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Column</TableCell>
                  <TableCell>Required</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((field) => (
                  <TableRow key={field.id}>
                    <TableCell>{field.id}</TableCell>
                    <TableCell>{field.label}</TableCell>
                    <TableCell>{field.type}</TableCell>
                    <TableCell>{field.column}</TableCell>
                    <TableCell>{field.required}</TableCell>
                    <TableCell>{field.active}</TableCell>
                    <TableCell>
                      <Tooltip title="Edit">
                        <IconButton
                          color="info"
                          onClick={() => handleEditForm(field.label)}
                        >
                          <EditIcon />
                        </IconButton>
                        <EditField
                          open={editFormModalOpen}
                          handleClose={handleEditFormModalClose}
                        />
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: 2 }}
          >
            Showing 1 to {data.length} of {data.length} entries
          </Typography>
          <Box sx={{ textAlign: "right" }}>
            <Button variant="contained" color="info" onClick={handleAddField}>
              Add new Field
            </Button>
            <AddField
              open={addFormModalOpen}
              handleClose={handleAddFormModalClose}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CustomFields;
