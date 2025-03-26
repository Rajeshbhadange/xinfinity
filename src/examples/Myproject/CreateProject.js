import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import {
  Box,
  TextField,
  Typography,
  Grid,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import ProjectSetting from "../../component/Settings/ProjectSetting";
import SaveButtonCard from "../../component/Card/SaveButtonCard";

const CreateProject = () => {
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedBillingType, setSelectedBillingType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedMember, setSelectedMember] = useState("");
  const [progress, setProgress] = useState(30);
  const [setDescription] = useState("");

  const handleSliderChange = (event, newValue) => {
    setProgress(newValue);
  };

  const handleInputChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <>
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
        <Typography variant="h6" gutterBottom>
          Basic Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputLabel>Name</InputLabel>
            <TextField
              type="text"
              fullWidth
              sx={{
                "& .MuiInputBase-root": { height: "35px" },
              }}
            />
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
          </Grid>{" "}
          <Grid item xs={12} sm={6} mt="-10px">
            <InputLabel>Customer</InputLabel>
            <FormControl fullWidth>
              <Select
                labelId="customer-select"
                value={selectedCustomer}
                onChange={(e) => setSelectedCustomer(e.target.value)}
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
          <Grid item xs={12} sm={6} mt="-10px">
            <InputLabel>Deadline</InputLabel>
            <FormControl fullWidth>
              <Flatpickr
                value={dateEnd}
                onChange={([date]) => setDateEnd(date)}
                options={{
                  enableTime: true,
                  dateFormat: "Y-m-d H:i:s",
                }}
                style={{ padding: "10px" }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} mt="-10px">
            <InputLabel>Calculate Progress</InputLabel>
            <input type="checkbox"></input>

            <Grid item xs={12}>
              <InputLabel>Progress</InputLabel>
              <Box sx={{ width: "100%" }}>
                <Stack direction="row" sx={{ mb: 1 }} alignItems="center">
                  <Slider
                    aria-label="Progress"
                    value={progress}
                    onChange={handleSliderChange}
                  />
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Billing Type</InputLabel>
              <FormControl fullWidth>
                <Select
                  labelId="billing-type-select"
                  value={selectedBillingType}
                  onChange={(e) => setSelectedBillingType(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Billing Type" }}
                  sx={{ height: "35px" }}
                >
                  <MenuItem value="">
                    <span>Select Billing Type</span>
                  </MenuItem>
                  <MenuItem value="1">Fix Rate</MenuItem>
                  <MenuItem value="2">Project Hours</MenuItem>
                  <MenuItem value="3">Task Hours</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} mt="8px">
              <InputLabel>Status</InputLabel>
              <FormControl fullWidth>
                <Select
                  labelId="status-select"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Select Status" }}
                  sx={{ height: "35px" }}
                >
                  <MenuItem value="">
                    <span>Select Status</span>
                  </MenuItem>
                  <MenuItem value="1">Not Started</MenuItem>
                  <MenuItem value="2">In Progress</MenuItem>
                  <MenuItem value="3">On Hold</MenuItem>
                  <MenuItem value="100">Cancelled</MenuItem>
                  <MenuItem value="101">Finished</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} mt="8px">
              <InputLabel>Estimated Hours</InputLabel>
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
          <Grid item xs={12} sm={6}>
            <InputLabel>Description</InputLabel>
            <FormControl fullWidth>
              <textarea
                name="Description"
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
          <Grid item xs={12} sm={6} mt="-8px">
            <InputLabel>Member</InputLabel>
            <FormControl fullWidth>
              <Select
                labelId="member-select"
                value={selectedMember}
                onChange={(e) => setSelectedMember(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Select Member" }}
                sx={{ height: "35px" }}
              >
                <MenuItem value="">
                  <span>Select Member</span>
                </MenuItem>
                <MenuItem value="1">XfinitySoft</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Send project created email</InputLabel>
            <input type="checkbox"></input>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          padding: { xs: 1, sm: 2 },
          marginTop: { xs: 1, sm: 2 },
          marginLeft: { xs: 1, sm: 2 },
          backgroundColor: "#FFF",
          border: "1px solid #f2f2f2",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div>
          <ProjectSetting />
        </div>
      </Box>
      <div style={{ marginBottom: "50px" }}>
        <SaveButtonCard />
      </div>
    </>
  );
};

export default CreateProject;
