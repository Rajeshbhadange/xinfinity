import React, { useState } from "react";
import { FaTag, FaPencilAlt } from "react-icons/fa";
import Flatpickr from "react-flatpickr";
import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import EstimateTable from "../../../component/Table/EstimateTable";
import CalculationTable from "../../../component/Table/calculationTable";
import SaveButtonCard from "../../../component/Card/SaveButtonCard";
import { Link } from "react-router-dom";

const CreateEstimate = () => {
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const billingStreet = "--";
  const billingCity = "--";
  const billingState = "--";
  const billingCountry = "--";
  const billingZip = "--";
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

            <Grid item xs={12} sm={6}>
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

            <Grid item xs={12} sm={6} w="100%" mt="-7px">
              <InputLabel>Project</InputLabel>
              <FormControl fullWidth>
                <Select
                  labelId="contact-select-label"
                  value={selectedCustomer}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Select Contact" }}
                  sx={{ height: "40px" }}
                >
                  <MenuItem value="">
                    <span>None</span>
                  </MenuItem>
                  <MenuItem value="1">Nicholaus Fadel</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3} mt="-5px">
              <InputLabel
                sx={{
                  fontSize: "0.875rem",
                  alignItems: "center",
                }}
              >
                Reference #
              </InputLabel>
              <TextField
                type="text"
                placeholder="Reference"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": { height: "40px" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3} mt="-7px">
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
                  <MenuItem value="">
                    <span>Draft</span>
                  </MenuItem>
                  <MenuItem value="1">Nicholaus Fadel</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* ******************************************************************************************************* */}
            {/* bill to ship to  start*/}

            <Grid item xs={12} sm={3} mt="-7px">
              <FaPencilAlt />

              <p variant="subtitle1" fontWeight="bold">
                Ship To
              </p>
              <address>
                <Typography variant="body1">
                  <span>{billingStreet}</span>
                  <br />
                  <span>{billingCity}</span>, <span>{billingState}</span>
                  <br />
                  <span>{billingCountry}</span>, <span>{billingZip}</span>
                </Typography>
              </address>
            </Grid>
            <Grid item xs={12} sm={3} sx={{ mt: "20px" }}>
              <p variant="subtitle2" fontWeight="bold">
                Ship To
              </p>
              <address>
                <Typography variant="body1">
                  <span>{billingStreet}</span>
                  <br />
                  <span>{billingCity}</span>, <span>{billingState}</span>
                  <br />
                  <span>{billingCountry}</span>, <span>{billingZip}</span>
                </Typography>
              </address>
            </Grid>
            {/* bill to ship to  end*/}
            {/* -------------------------------------------------------------------------------------------------------------------- */}
            <Grid item xs={12} sm={3}>
              <InputLabel>Sale Agent</InputLabel>
              <FormControl fullWidth>
                <Select
                  labelId=""
                  value={selectedCustomer}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Select Contact" }}
                  sx={{ height: "40px" }}
                >
                  <MenuItem value="">
                    <span>Nothing Selected</span>
                  </MenuItem>
                  <MenuItem value="1">Nicholaus Fadel</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
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
                  <MenuItem value="">
                    <span>Not Discount</span>
                  </MenuItem>
                  <MenuItem value="1">Befor Tax</MenuItem>
                  <MenuItem value="1">After Tax</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} mt="-12px">
              <InputLabel
                sx={{
                  fontSize: "0.875rem",
                  alignItems: "center",
                }}
              >
                Estimate Number
              </InputLabel>
              <TextField
                type="text"
                placeholder="Tags"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": { height: "40px" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} mt="-5.3em">
              <InputLabel>Admin Note</InputLabel>
              <FormControl fullWidth>
                <textarea
                  name="Admin Note"
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    height: "15vh",
                    boxSizing: "border-box",
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={3} mt="-10px">
              <InputLabel>Estimate Date</InputLabel>
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

            <Grid item xs={12} sm={3} mt="-10px">
              <InputLabel>Expiry Date</InputLabel>
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

export default CreateEstimate;
