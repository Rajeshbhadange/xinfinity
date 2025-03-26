import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import { FaTag } from "react-icons/fa";
import EstimateTable from "../../../component/Table/EstimateTable";
import CalculationTable from "../../../component/Table/calculationTable";
import SaveButtonCard from "../../../component/Card/SaveButtonCard";
import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

const CreateProposals = () => {
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const handleChange = (event) => {
    setSelectedCustomer(event.target.value);
  };
  const handleInputChange = (e) => {};

  return (
    <>
      <div className="invoice" style={{ marginLeft: "20px" }}>
        <div className="row">
          <div className="page-title">
            <h2>Create Invoice</h2>
            <h2 className="link">
              <Link to="/">Dashboard</Link> / Create Invoice
            </h2>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "100px" }}>
        <Box
          style={{
            padding: 20,
            marginTop: 20,
            marginLeft: 20,
            backgroundColor: "#FFF",
            border: "#f2f2f2",
            borderRadius: "5px",
            boxShadow: "1px 1px 3px #000000",
          }}
        >
          <Grid container spacing={2} w="100%">
            <Grid item xs={12} sm={6} w="100%">
              <InputLabel
                sx={{
                  fontSize: "0.875rem",
                  alignItems: "center",
                }}
              >
                Subject
              </InputLabel>
              <TextField
                type="text"
                placeholder="Tags"
                fullWidth
                sx={{
                  mt: "2px",
                  "& .MuiInputBase-root": { height: "40px" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputLabel>Status</InputLabel>
              <FormControl fullWidth>
                <Select
                  labelId=""
                  value={selectedCustomer}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Select Contact" }}
                  sx={{ height: "40px" }}
                >
                  <MenuItem value="">Draft</MenuItem>
                  <MenuItem value="1">Send</MenuItem>
                  <MenuItem value="1">Open</MenuItem>
                  <MenuItem value="2">Revised</MenuItem>
                  <MenuItem value="3">Declined</MenuItem>
                  <MenuItem value="100">Accepted</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputLabel>Assigned</InputLabel>
              <FormControl fullWidth>
                <Select
                  labelId=""
                  value={selectedCustomer}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Select Contact" }}
                  sx={{ height: "40px" }}
                >
                  <MenuItem value="">Nothing Selected</MenuItem>
                  <MenuItem value="1">Xfinitysoft</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Related</InputLabel>
              <FormControl fullWidth>
                <Select
                  labelId="Customer"
                  value={selectedCustomer}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Select Customer" }}
                  sx={{ height: "40px" }}
                >
                  <MenuItem value="">
                    <span>Nothing Selected</span>
                  </MenuItem>
                  <MenuItem value="1">Lead</MenuItem>
                  <MenuItem value="2">Contact</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} w="100%">
              <InputLabel
                sx={{
                  fontSize: "0.875rem",
                  alignItems: "center",
                }}
              >
                To
              </InputLabel>
              <TextField
                type="text"
                fullWidth
                sx={{
                  mt: "3px",
                  "& .MuiInputBase-root": { height: "40px" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Project</InputLabel>
              <FormControl fullWidth>
                <Select
                  labelId=""
                  value={selectedCustomer}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Select Contact" }}
                  sx={{ height: "40px" }}
                >
                  <MenuItem value="1">Nicholaus Fadel</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Address</InputLabel>
              <FormControl fullWidth>
                <textarea
                  name="Address"
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    height: "15vh",
                    boxSizing: "border-box",
                    borderRadius: "4px",
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3} mt="-5em">
              <InputLabel>Date </InputLabel>
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
            </Grid>

            <Grid item xs={12} sm={3} mt="-5em">
              <InputLabel>Open Till</InputLabel>
              <FormControl fullWidth>
                <Flatpickr
                  value={dateEnd} // Replace this with `dateEnd` if needed
                  onChange={([date]) => setDateEnd(date)} // Replace with `setDateEnd` if needed
                  options={{
                    enableTime: true,
                    dateFormat: "Y-m-d H:i:s",
                  }}
                  style={{ padding: "10px" }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputLabel
                sx={{
                  fontSize: "0.875rem",
                  alignItems: "center",
                }}
              >
                City
              </InputLabel>
              <TextField
                type="text"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": { height: "40px" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputLabel
                sx={{
                  fontSize: "0.875rem",
                  alignItems: "center",
                }}
              >
                State
              </InputLabel>
              <TextField
                type="text"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": { height: "40px" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} mt="-5em">
              <InputLabel>Discount Type</InputLabel>
              <FormControl fullWidth>
                <Select
                  labelId=""
                  value={selectedCustomer}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Select Contact" }}
                  sx={{ height: "40px" }}
                >
                  <MenuItem value="">Not Discount</MenuItem>
                  <MenuItem value="1">Befor Tax</MenuItem>
                  <MenuItem value="2">After Tax</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputLabel
                sx={{
                  fontSize: "0.875rem",
                  alignItems: "center",
                }}
              >
                Country
              </InputLabel>
              <TextField
                type="text"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": { height: "40px" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputLabel
                sx={{
                  fontSize: "0.875rem",
                  alignItems: "center",
                }}
              >
                Zip Code
              </InputLabel>
              <TextField
                type="text"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": { height: "40px" },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6} mt="-5em">
              <InputLabel
                sx={{
                  fontSize: "0.875rem",
                  alignItems: "center",
                }}
              >
                <FaTag />
                Tags
              </InputLabel>
              <TextField
                type="text"
                placeholder="Tags"
                fullWidth
                sx={{
                  mt: "2px",
                  "& .MuiInputBase-root": { height: "40px" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputLabel
                sx={{
                  fontSize: "0.875rem",
                  alignItems: "center",
                }}
              >
                Email
              </InputLabel>
              <TextField
                type="text"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": { height: "40px" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputLabel
                sx={{
                  fontSize: "0.875rem",
                  alignItems: "center",
                }}
              >
                Phone
              </InputLabel>
              <TextField
                type="text"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": { height: "40px" },
                }}
              />
            </Grid>
            <Grid>
              <InputLabel sx={{ mt: "-4em", ml: "20px" }}>
                Allow Comments
              </InputLabel>
              <div className="check">
                <input type="checkbox" style={{ margin: "20px" }} />
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            padding: 2,
            marginTop: 2,
            marginLeft: "20px",
            backgroundColor: "#FFF",
            border: "#f2f2f2",
            borderRadius: "5px",
            boxShadow: "1px 1px 3px #000000",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <InputLabel>Customer</InputLabel>
              <FormControl fullWidth>
                <Select
                  labelId="Customer"
                  value={selectedCustomer}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Select Customer" }}
                  sx={{ height: "40px" }}
                >
                  <MenuItem value="">
                    <span>Add Item</span>
                  </MenuItem>
                  <MenuItem value="1">Nicholaus Fadel</MenuItem>
                  <MenuItem value="2">Theo Reichert</MenuItem>
                  <MenuItem value="3">Randi Fadel</MenuItem>
                  <MenuItem value="100">Rae Abshire</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <div className="add" style={{ mt: "3em", ml: "20px" }}>
            <EstimateTable />
          </div>
          <div className="calculation" style={{ mb: "100px" }}>
            <CalculationTable />
          </div>
        </Box>
        <div>
          <SaveButtonCard />.
        </div>
      </div>
    </>
  );
};

export default CreateProposals;
