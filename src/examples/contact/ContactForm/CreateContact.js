import React, { useState } from "react";
import "./CreateContact.css";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const CreateContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    invoicesPermission: false,
    estimatesPermission: false,
    contractsPermission: false,
    proposalsPermission: false,
    supportPermission: false,
    mobileNo: "",
    assignUser: "",
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
    console.log(formData);
  };

  const textFields = [
    { label: "Name", name: "name" },
    { label: "Email", name: "email" },
    { label: "Mobile Number", name: "mobileNo" },
    {
      label: "Password",
      name: "Password",
      type: "password",
    },
  ];

  const checkboxes = [
    { label: "Invoices Permission", name: "invoicesPermission" },
    { label: "Estimates Permission", name: "estimatesPermission" },
    { label: "Contracts Permission", name: "contractsPermission" },
    { label: "Proposals Permission", name: "proposalsPermission" },
    { label: "Support Permission", name: "supportPermission" },
    { label: "Projects Permission", name: "projectsPermission" },
  ];

  const users = [
    { label: "Select Assign User ", value: "user1" },
    { label: "XfinitySoft", value: "user2" },

    // Add more users as needed
  ];

  return (
    <>
      <h2 className="cc-link">
        <div className="header-container">
          <h5> Create Contacts</h5>
          <h6>
            <Link to="/">Dashboard</Link>
            <span id="sp"> / Create Contacts</span>
          </h6>
        </div>
      </h2>
      <Box
        sx={{
          marginTop: "-2em",
          width: "94%",
          p: 3,
          border: "2px solid #f2f2f2",
          backgroundColor: "#FFF",
          marginBottom: "3em",
          boxShadow: 2,
          borderRadius: "4px",
          marginLeft: "25px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom>
            Basic Information
          </Typography>
          <Grid>
            {textFields.map((field) => (
              <Grid item xs={12} sm={6} key={field.name} mt={2}>
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
            <Grid item xs={12} sm={6} mt={2}>
              <InputLabel>Assign User</InputLabel>
              <FormControl fullWidth>
                <Select
                  value={formData.assignUser}
                  onChange={handleChange}
                  sx={{ height: "40px" }}
                >
                  {users.map((user) => (
                    <MenuItem key={user.value} value={user.value}>
                      {user.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Permissions
          </Typography>
          <FormGroup>
            {checkboxes.map((checkbox) => (
              <FormControlLabel
                control={
                  <Checkbox
                    name={checkbox.name}
                    checked={formData[checkbox.name]}
                    onChange={handleChange}
                  />
                }
                label={checkbox.label}
                key={checkbox.name}
              />
            ))}
          </FormGroup>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Save Contact
          </Button>
        </form>
      </Box>
    </>
  );
};

export default CreateContact;
