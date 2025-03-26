import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Modal,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const EditField = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    label: "First Name",
    name: "firstname",
    type: "text",
    options: "",
    col: "1",
    fieldOrder: 1,
    required: true,
    active: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: "90%",
          maxWidth: 600,
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
          mx: "auto",
          my: "auto",
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6">
            Edit field in section Basic Information
          </Typography>
          <Button onClick={handleClose} color="secondary">
            <CloseIcon />
          </Button>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputLabel>Field Label</InputLabel>
              <TextField
                fullWidth
                name="label"
                value={formData.label}
                onChange={handleChange}
                required
                sx={{
                  mt: "2px",
                  "& .MuiInputBase-root": { height: "40px" },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Field Name</InputLabel>
              <TextField
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{
                  mt: "2px",
                  "& .MuiInputBase-root": { height: "40px" },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Type</InputLabel>
              <FormControl fullWidth>
                <Select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  sx={{ height: "40px" }}
                >
                  <MenuItem value="">Select Type</MenuItem>
                  <MenuItem value="text">Text</MenuItem>
                  <MenuItem value="email">Email</MenuItem>
                  <MenuItem value="number">Number</MenuItem>
                  <MenuItem value="phone">Phone</MenuItem>
                  <MenuItem value="textarea">Textarea</MenuItem>
                  <MenuItem value="select">Select</MenuItem>
                  <MenuItem value="multiselect">Multi Select</MenuItem>
                  <MenuItem value="checkbox">Checkbox</MenuItem>
                  <MenuItem value="date_picker">Date Picker</MenuItem>
                  <MenuItem value="time_picker">Time Picker</MenuItem>
                  <MenuItem value="date_time_picker">Datetime Picker</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <InputLabel>Options</InputLabel>
              <textarea
                fullWidth
                multiline
                rows={4}
                value={formData.options}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Column</InputLabel>
              <FormControl fullWidth>
                <Select
                  name="col"
                  value={formData.col}
                  onChange={handleChange}
                  required
                  sx={{ height: "40px" }}
                >
                  <MenuItem value="">Select Column</MenuItem>
                  <MenuItem value="1">First</MenuItem>
                  <MenuItem value="2">Second</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Order</InputLabel>
              <TextField
                fullWidth
                name="fieldOrder"
                type="number"
                value={formData.fieldOrder}
                onChange={handleChange}
                required
                sx={{
                  mt: "2px",
                  "& .MuiInputBase-root": { height: "40px" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="required"
                    checked={formData.required}
                    onChange={handleChange}
                  />
                }
                label="Required"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="active"
                    checked={formData.active}
                    onChange={handleChange}
                  />
                }
                label="Active"
              />
            </Grid>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: "100px", margin: "20px" }}
            >
              Save
            </Button>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default EditField;
