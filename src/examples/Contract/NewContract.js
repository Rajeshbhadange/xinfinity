import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import SaveButtonCard from "../../component/Card/SaveButtonCard";

const NewContract = () => {
  const [dateStart, setDateStart] = useState("");
  const handleInputChange = (e) => {};

  const [selectedCustomer, setSelectedCustomer] = useState("");

  const handleChange = (event) => {
    setSelectedCustomer(event.target.value);
  };
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
        <h3>Basic Information</h3>
        <Grid container spacing={2} p={2}>
          <Grid item xs={12} sm={6}>
            <InputLabel>Trash</InputLabel>
            <input type="checkbox"></input>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Start Date</InputLabel>
            <FormControl fullWidth>
              <Flatpickr
                value={dateStart}
                onChange={([date]) => setDateStart(date)}
                options={{
                  enableTime: true,
                  dateFormat: "Y-m-d H:i:s",
                }}
                style={{ padding: "10px", borderRadius: "4px" }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Hide Customer</InputLabel>
            <input type="checkbox"></input>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>End Date</InputLabel>
            <FormControl fullWidth>
              <Flatpickr
                value={dateStart}
                onChange={([date]) => setDateStart(date)}
                options={{
                  enableTime: true,
                  dateFormat: "Y-m-d H:i:s",
                }}
                style={{ padding: "10px", borderRadius: "4px" }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} mt="-20px">
            <InputLabel>Customer</InputLabel>
            <FormControl fullWidth>
              <Select
                labelId="status-select"
                displayEmpty
                inputProps={{ "aria-label": "Select Contact" }}
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
            <Grid item xs={12} mt={2}>
              <InputLabel sx={{ fontSize: "0.875rem" }}>Subject</InputLabel>
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
              <InputLabel sx={{ fontSize: "0.875rem" }}>
                Contract Value
              </InputLabel>
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
              <InputLabel>Contract type</InputLabel>
              <FormControl fullWidth>
                <Select
                  labelId="status-select"
                  displayEmpty
                  inputProps={{ "aria-label": "Select Contact" }}
                  sx={{ height: "35px" }}
                >
                  <MenuItem value="">
                    <span>Select Contract type</span>
                  </MenuItem>
                  <MenuItem value="1">Nicholaus Fadel</MenuItem>
                  <MenuItem value="2">Theo Reichert</MenuItem>
                  <MenuItem value="3">Randi Fadel</MenuItem>
                  <MenuItem value="100">Rae Abshire</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Description</InputLabel>
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
          <Grid item xs={12} sm={6} mt="-20px">
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
      </Box>
      <div style={{ marginBottom: "50px" }}>
        <SaveButtonCard />
      </div>
    </>
  );
};
export default NewContract;
