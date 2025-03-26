import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import {
  TextField,
  Grid,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import ExpenseForm from "../../component/Form/ExpenseForm";
import SaveButtonCard from "../../component/Card/SaveButtonCard";

const NewExpense = () => {
  const [dateStart, setDateStart] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");

  const handleChange = (event) => {
    setSelectedCustomer(event.target.value);
  };

  const handleInputChange = (e) => {};

  return (
    <>
      <Box
        sx={{
          padding: 2,
          marginTop: 2,
          marginLeft: 2,
          backgroundColor: "#FFF",
          border: "#f2f2f2",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <span>
          <b>Basic Information</b>
        </span>
        <Grid container spacing={2} sx={{ marginTop: "5px" }}>
          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ fontSize: "0.875rem" }}>Name</InputLabel>
            <TextField
              type="text"
              fullWidth
              sx={{
                mt: "2px",
                "& .MuiInputBase-root": { height: "35px" },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Status</InputLabel>
            <FormControl fullWidth>
              <Select
                labelId="status-select"
                displayEmpty
                inputProps={{ "aria-label": "Select Contact" }}
                sx={{ height: "35px" }}
              >
                <MenuItem value="">Select Category</MenuItem>
                <MenuItem value="1">Automobile Expense</MenuItem>
                <MenuItem value="2">Meals</MenuItem>
                <MenuItem value="3">Parking</MenuItem>
                <MenuItem value="4">Trips</MenuItem>
                <MenuItem value="100">Travel</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Notes</InputLabel>
            <FormControl fullWidth>
              <textarea
                name="Notes"
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  height: "35vh",
                  boxSizing: "border-box",
                  borderRadius: "4px",
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Date</InputLabel>
            <FormControl fullWidth>
              <Flatpickr
                value={dateStart}
                onChange={([date]) => setDateStart(date)}
                options={{
                  enableTime: true,
                  dateFormat: "Y-m-d H:i:s",
                }}
                style={{ padding: "10px" }}
              />
            </FormControl>

            <Grid item xs={12} mt={2}>
              <InputLabel sx={{ fontSize: "0.875rem" }}>Name</InputLabel>
              <TextField
                type="text"
                fullWidth
                sx={{
                  mt: "2px",
                  "& .MuiInputBase-root": { height: "35px" },
                }}
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <InputLabel>Customer</InputLabel>
              <FormControl fullWidth>
                <Select
                  labelId="customer-select"
                  value={selectedCustomer}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Select Customer" }}
                  sx={{ height: "35px" }}
                >
                  <MenuItem value="">
                    <span>Select Customer</span>
                  </MenuItem>
                  <MenuItem value="1">Nicholaus Fadel</MenuItem>
                  <MenuItem value="2">Theo Reichert</MenuItem>
                  <MenuItem value="3">Randi Fadel</MenuItem>
                  <MenuItem value="100">Rae Abshire</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} mt={2}>
              <InputLabel>Project</InputLabel>
              <FormControl fullWidth>
                <Select
                  labelId="project-select"
                  value={selectedCustomer}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Select Contact" }}
                  sx={{ height: "35px" }}
                >
                  <MenuItem value="1">Nicholaus Fadel</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Attachment</InputLabel>
            <FormControl fullWidth>
              <input
                style={{ fontSize: "18px", marginTop: "3px" }}
                type="file"
              />
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      <div>
        <ExpenseForm />
      </div>
      <div style={{ marginBottom: "50px" }}>
        <SaveButtonCard />
      </div>
    </>
  );
};

export default NewExpense;
