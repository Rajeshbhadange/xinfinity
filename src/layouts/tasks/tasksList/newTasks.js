import React, { useState } from "react";
import {
  Grid,
  InputLabel,
  Typography,
  Link,
  Card,
  CardContent,
  Select,
  MenuItem,
  Checkbox,
  TextField,
} from "@mui/material";
import SaveButtonCard from "../../../component/Card/SaveButtonCard";

const NewTask = ({ onClose, date }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    allDay: false,
    syncWithGoogle: false,
    startDate: "",
    endDate: "",
    status: "",
    relatedContact: "",
    priority: "",
    relatedExpense: "",
    relatedContract: "",
    activityType: "",
    relatedProject: "",
    relatedLead: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Event Data:", formData, "Selected Date:", date);
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const renderSelectField = (label, name, options) => (
    <Grid item xs={6}>
      <InputLabel sx={{ fontSize: "0.875rem" }}>{label}</InputLabel>
      <Select
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        sx={{
          width: "100%",
          fontSize: "0.875rem",
          height: "40px",
          padding: "4px 8px",
          lineHeight: "1.5",
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );

  return (
    <div style={{ marginBottom: "2em" }}>
      <div className="container-calender" style={{ margin: "25px" }}>
        <div className="header-container">
          <Typography variant="h5">Create Task</Typography>
          <Typography variant="h6">
            <Link to="/">Dashboard</Link>
            <span id="sp"> / Create Task</span>
          </Typography>
        </div>
      </div>
      <Card variant="outlined" sx={{ ml: "25px", hight: "100%" }}>
        <CardContent>
          <Typography variant="h6">Event</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <InputLabel>Title</InputLabel>
              <TextField
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            {renderSelectField("Related Contact", "relatedContact", [
              { value: "", label: "Select Related Contact" },
              { value: "Rajesh", label: "Rajesh" },
              { value: "Krushna", label: "Krushna" },
            ])}
            {renderSelectField("Priority", "priority", [
              { value: "", label: "Select Priority" },
              { value: "Low", label: "Low" },
              { value: "Medium", label: "Medium" },
              { value: "High", label: "High" },
            ])}
            {renderSelectField("Related Expense", "relatedExpense", [
              { value: "", label: "Select Related Expense" },
            ])}
            {renderSelectField("Status", "status", [
              { value: "", label: "Select Status" },
              { value: "Not Started", label: "Not Started" },
              { value: "Started", label: "Started" },
              { value: "Pending", label: "Pending" },
              { value: "Completed", label: "Completed" },
            ])}
            {renderSelectField("Related Contract", "relatedContract", [
              { value: "", label: "Select Related Contract" },
            ])}
            {renderSelectField("Activity Type", "activityType", [
              { value: "", label: "Select Activity Type" },
              { value: "Call", label: "Call" },
              { value: "Meeting", label: "Meeting" },
              { value: "Mobile Call", label: "Mobile Call" },
              { value: "Viewing Trip", label: "Viewing Trip" },
            ])}
            {renderSelectField("Related Project", "relatedProject", [
              { value: "", label: "Select Related Project" },
              { value: "Tom Rippin", label: "Tom Rippin" },
              { value: "Macy Boyer", label: "Macy Boyer" },
            ])}
            <Grid item xs={6}>
              <InputLabel>Sync with Google</InputLabel>
              <Checkbox
                name="syncWithGoogle"
                checked={formData.syncWithGoogle}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Start Date</InputLabel>
              <TextField
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} mt="-20px">
              <InputLabel>Description</InputLabel>
              <TextField
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                multiline
                rows={4}
                fullWidth
              />
            </Grid>{" "}
            <Grid item xs={6}>
              <InputLabel>Date Due</InputLabel>
              <TextField
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            {renderSelectField("Related Lead", "relatedLead", [
              { value: "", label: "Select Related Lead" },
            ])}
          </Grid>
        </CardContent>
      </Card>
      <div style={{ marginLeft: "8px" }}>
        <SaveButtonCard />
      </div>
    </div>
  );
};

export default NewTask;
