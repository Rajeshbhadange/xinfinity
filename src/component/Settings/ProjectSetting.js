import React, { useState } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const ProjectSetting = () => {
  const [selectedTabs, setSelectedtabs] = useState("");
  const [selectedContactNotification, setSelectedContactNotification] =
    useState("");
  return (
    <>
      <div>
        <Typography variant="h6" gutterBottom>
          Project Settings
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ fontSize: "15px" }}>Customer</InputLabel>
            <FormControl fullWidth>
              <Select
                labelId="select-Notification"
                value={selectedContactNotification}
                onChange={(e) => setSelectedContactNotification(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Select Contact Notification" }}
                sx={{ height: "35px", fontSize: "15px" }}
              >
                <MenuItem value="">
                  <span>Select Send Contacts Notification</span>
                </MenuItem>
                <MenuItem value="1">Specific Contact</MenuItem>
                <MenuItem value="2">Do Not Send Notification</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ fontSize: "15px" }}>
              Allow customer to view <br></br>finance overview
            </InputLabel>
            <input type="checkbox"></input>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <Select
                labelId="Tabs-select"
                value={selectedTabs}
                onChange={(e) => setSelectedtabs(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Select Tabs" }}
                sx={{ height: "35px", fontSize: "15px" }}
              >
                <MenuItem value="">
                  <span>Select Tabs</span>
                </MenuItem>
                <MenuItem value="1">Tasks</MenuItem>
                <MenuItem value="2">Timesheets</MenuItem>
                <MenuItem value="3">milestones</MenuItem>
                <MenuItem value="100">Files</MenuItem>
                <MenuItem value="101">descussions</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} mt="-10px">
            <InputLabel sx={{ fontSize: "15px" }}>
              Allow customer to upload files
            </InputLabel>
            <input type="checkbox"></input>
          </Grid>
          <Grid item xs={12} sm={6} mt="-10px">
            <InputLabel sx={{ fontSize: "15px" }}>
              Allow customer to view tasks
            </InputLabel>
            <input type="checkbox"></input>
          </Grid>
          <Grid item xs={12} sm={6} mt="-10px">
            <InputLabel sx={{ fontSize: "15px" }}>
              Allow customer to open <br></br>discussions
            </InputLabel>
            <input type="checkbox"></input>
          </Grid>
          <Grid item xs={12} sm={6} mt="-25px">
            <InputLabel sx={{ fontSize: "15px" }}>
              Allow customer to create <br></br>tasks
            </InputLabel>
            <input type="checkbox"></input>
          </Grid>
          <Grid item xs={12} sm={6} mt="-10px">
            <InputLabel sx={{ fontSize: "15px" }}>
              Allow customer to view <br></br>milestones
            </InputLabel>
            <input type="checkbox"></input>
          </Grid>
          <Grid item xs={12} sm={6} mt="-25px">
            <InputLabel sx={{ fontSize: "15px" }}>
              Allow customer to edit tasks <br></br> (only tasks created from
              contact)
            </InputLabel>
            <input type="checkbox"></input>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ fontSize: "15px" }}>
              Allow customer to view <br></br> timesheets
            </InputLabel>
            <input type="checkbox"></input>
          </Grid>
          <Grid item xs={12} sm={6} mt="-25px">
            <InputLabel sx={{ fontSize: "15px" }}>
              Allow customer to comment <br></br> on project tasks
            </InputLabel>
            <input type="checkbox"></input>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ fontSize: "15px" }}>
              Allow customer to view activity <br></br> log
            </InputLabel>
            <input type="checkbox"></input>
          </Grid>
          <Grid item xs={12} sm={6} mt="-25px">
            <InputLabel sx={{ fontSize: "15px" }}>
              Allow customer to view task <br></br> comments
            </InputLabel>
            <input type="checkbox"></input>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ fontSize: "15px" }}>
              Allow customer to view team <br></br> members
            </InputLabel>
            <input type="checkbox"></input>
          </Grid>
          <Grid item xs={12} sm={6} mt="-25px">
            <InputLabel sx={{ fontSize: "15px" }}>
              Allow customer to view task <br></br> checklist items
            </InputLabel>
            <input type="checkbox"></input>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ fontSize: "15px" }}>
              Hide project tasks on main <br></br> tasks table (admin area)
            </InputLabel>
            <input type="checkbox"></input>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={12} sm={6} mt="-20px">
            <InputLabel sx={{ fontSize: "15px" }}>
              Allow customer to view <br></br> attachments on tasks
            </InputLabel>
            <input type="checkbox"></input>
          </Grid>
          <Grid item xs={12} sm={6} mt="10px">
            <InputLabel sx={{ fontSize: "15px" }}>
              Allow customer to upload <br></br> attachments on tasks
            </InputLabel>
            <input type="checkbox"></input>
          </Grid>
          <Grid item xs={12} sm={6} mt="10px">
            <InputLabel sx={{ fontSize: "15px" }}>
              Allow customer to view task <br></br> total logged time
            </InputLabel>
            <input type="checkbox"></input>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default ProjectSetting;
