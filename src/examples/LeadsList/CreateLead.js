import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const CreateLead = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    invoicesPermission: false,
    estimatesPermission: false,
    contractsPermission: false,
    proposalsPermission: false,
    supportPermission: false,
    projectsPermission: false,
    mobileNo: "",
    assignUser1: "",
    assignUser2: "",
    assignUser3: "",
    xfinitySoftPassword: "",
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
    const { mobileNo, xfinitySoftPassword } = formData;

    // Validate mobile number (10 digits)
    const mobileNoPattern = /^\d{10}$/;
    if (!mobileNoPattern.test(mobileNo)) {
      alert("Enter valid Mobile number.");
      return;
    }

    // Validate password (characters and symbols)
    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(xfinitySoftPassword)) {
      alert(
        "Password must contain both characters and symbols, and be at least 8 characters long."
      );
      return;
    }

    console.log(formData);
  };

  const textFields = [
    { label: "Name", name: "Name" },
    { label: "Email", name: "Email" },
    { label: "Mobile Number", name: "mobileNo" },
    {
      label: "Password",
      name: "xfinitySoftPassword",
      type: "password",
    },
  ];

  const dropdowns = [
    {
      label: "Assign User 1",
      name: "assignUser1",
      options: [
        { value: "", label: "Select Assign User" },
        { value: "user1", label: "XfinitySoft" },
      ],
    },
    {
      label: "Assign User 2",
      name: "assignUser2",
      options: [
        { value: "", label: "Select Lead Status" },
        { value: "user2", label: "Junk" },
        { value: "user3", label: "Started" },
        { value: "user4", label: "Appointed" },
      ],
    },
    {
      label: "Assign User 3",
      name: "assignUser3",
      options: [
        { value: "", label: "Select Lead Source" },
        { value: "user5", label: "Google" },
        { value: "user6", label: "Facebook" },
        { value: "user7", label: "In Person" },
      ],
    },
    {
      label: "Assign User 4",
      name: "assignUser4",
      options: [
        { value: "", label: "Commision" },
        { value: "user8", label: "Agent" },
        { value: "user9", label: "Rent" },
      ],
    },
  ];

  return (
    <>
      <h2 className="cc-link">
        <div className="header-container">
          <h5>Create Leads</h5>
          <h6>
            <Link to="/">Dashboard</Link>
            <span id="sp"> / Create Leads</span>
          </h6>
        </div>
      </h2>
      <Box
        sx={{
          width: "96%",
          p: 2,
          margin: 3,
          border: "2px solid #f2f2f2",
          borderRadius: "4px",
          backgroundColor: "white",
          marginTop: "-2em",
          boxShadow: 2,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom>
            Basic Information
          </Typography>
          <Grid container spacing={2}>
            {textFields.map((field) => (
              <Grid item xs={12} sm={6} key={field.name}>
                <TextField
                  label={field.label}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  type={field.type || "text"}
                  fullWidth
                />
              </Grid>
            ))}
          </Grid>
          {dropdowns.map((dropdown) => (
            <Grid
              marginLeft="40em"
              marginTop="20px"
              item
              xs={12}
              sm={6}
              key={dropdown.name}
            >
              <FormControl fullWidth>
                <InputLabel>{dropdown.label}</InputLabel>
                <Select
                  name={dropdown.name}
                  value={formData[dropdown.name]}
                  onChange={handleChange}
                >
                  {dropdown.options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          ))}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Save Lead
          </Button>
        </form>
      </Box>
    </>
  );
};

export default CreateLead;
