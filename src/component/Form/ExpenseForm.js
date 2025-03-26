import React from "react";
import { Box } from "@mui/system";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const ExpenseForm = () => {
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
        <b>Advanced Options</b>
        <Grid container spacing={2} sx={{ marginTop: "5px" }}>
          <Grid item xs={12} sm={6}>
            <InputLabel>Currency</InputLabel>
            <FormControl fullWidth>
              <Select
                labelId="status-select"
                displayEmpty
                inputProps={{ "aria-label": "Select Contact" }}
                sx={{ height: "35px" }}
              >
                <MenuItem value="">Select Currency</MenuItem>
                <MenuItem value="1">usd</MenuItem>
                <MenuItem value="2">eur</MenuItem>
                <MenuItem value="3">Pkr</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Repeat Everyy</InputLabel>
            <FormControl fullWidth>
              <Select
                labelId="status-select"
                displayEmpty
                inputProps={{ "aria-label": "Select Contact" }}
                sx={{ height: "35px" }}
              >
                <MenuItem value="">Select Repeat Every</MenuItem>
                <MenuItem value="1">2 week</MenuItem>
                <MenuItem value="2">1 Month</MenuItem>
                <MenuItem value="3">2 Month</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Tax 1</InputLabel>
            <FormControl fullWidth>
              <Select
                labelId="status-select"
                displayEmpty
                inputProps={{ "aria-label": "Select Contact" }}
                sx={{ height: "35px" }}
              >
                <MenuItem value="">Select Tax1</MenuItem>
                <MenuItem value="1">No Tax</MenuItem>
                <MenuItem value="2">5%</MenuItem>
                <MenuItem value="3">10%</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ fontSize: "0.875rem" }}>Total Cycle</InputLabel>
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
            <InputLabel>Tax 2</InputLabel>
            <FormControl fullWidth>
              <Select
                labelId="status-select"
                displayEmpty
                inputProps={{ "aria-label": "Select Contact" }}
                sx={{ height: "35px" }}
              >
                <MenuItem value="">Select Tax2</MenuItem>
                <MenuItem value="1">No Tax</MenuItem>
                <MenuItem value="2">5%</MenuItem>
                <MenuItem value="3">10%</MenuItem>
              </Select>
            </FormControl>

            <Grid item xs={12} mt={2}>
              <InputLabel>Tax 1</InputLabel>
              <FormControl fullWidth>
                <Select
                  labelId="status-select"
                  displayEmpty
                  inputProps={{ "aria-label": "Select Contact" }}
                  sx={{ height: "35px" }}
                >
                  <MenuItem value="">Select Tax</MenuItem>
                  <MenuItem value="1">No Tax</MenuItem>
                  <MenuItem value="2">5%</MenuItem>
                  <MenuItem value="3">10%</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} mt={2}>
              <InputLabel sx={{ fontSize: "0.875rem" }}>Total Cycle</InputLabel>
              <TextField
                type="text"
                fullWidth
                sx={{
                  mt: "2px",
                  "& .MuiInputBase-root": { height: "35px" },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default ExpenseForm;
