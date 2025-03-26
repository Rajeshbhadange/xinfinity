import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Alert,
} from "@mui/material";

const AddUser = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    user_name: "",
    email: "",
    password: "",
    department: "",
    designation: "",
    roles: [],
  });

  const [errorMessages, setErrorMessages] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => {
        const roles = prevData.roles.includes(value)
          ? prevData.roles.filter((role) => role !== value)
          : [...prevData.roles, value];
        return { ...prevData, roles };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://uppingcrm.xfinitysoft.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]')
          .content,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === false) {
          setShowErrorAlert(true);
          setErrorMessages(data.errors);
          setShowSuccessAlert(false);
        } else {
          setShowErrorAlert(false);
          setSuccessMessage("User created successfully. Redirecting...");
          setShowSuccessAlert(true);
          setTimeout(() => {
            window.location.href = "https://uppingcrm.xfinitysoft.app/users";
          }, 2000);
        }
      })
      .catch((error) => {
        setShowErrorAlert(true);
        setErrorMessages([error.message]);
        setShowSuccessAlert(false);
      });
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: "90%",
          maxWidth: 400,
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
          mx: "auto",
          my: "auto",
          mt: 2,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Add User
          </Typography>
          <Button color="secondary" onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Box>

        {showErrorAlert && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMessages.map((msg, index) => (
              <div key={index}>{msg}</div>
            ))}
          </Alert>
        )}
        {showSuccessAlert && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={1}>
            <InputLabel>Name</InputLabel>
            <TextField
              required
              value={formData.name}
              onChange={handleChange}
              sx={{
                mt: "2px",
                "& .MuiInputBase-root": { height: "40px" },
              }}
              placeholder="Enter your name"
              fullWidth
            />
            <InputLabel>User Name</InputLabel>
            <TextField
              required
              sx={{
                mt: "2px",
                "& .MuiInputBase-root": { height: "40px" },
              }}
              value={formData.user_name}
              onChange={handleChange}
              placeholder="user name"
            />
            <InputLabel>Email</InputLabel>
            <TextField
              required
              sx={{
                mt: "2px",
                "& .MuiInputBase-root": { height: "40px" },
              }}
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email"
            />
            <InputLabel>Password</InputLabel>
            <TextField
              required
              sx={{
                mt: "2px",
                "& .MuiInputBase-root": { height: "40px" },
              }}
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="password"
            />
            <InputLabel>Department</InputLabel>
            <FormControl fullWidth>
              <Select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                sx={{ height: "40px" }}
              >
                <MenuItem value="">
                  <em>Select Department</em>
                </MenuItem>
                <MenuItem value="it">IT</MenuItem>
                <MenuItem value="finance">Finance</MenuItem>
                <MenuItem value="marketing">Marketing</MenuItem>
              </Select>
            </FormControl>
            <InputLabel>Designation</InputLabel>
            <FormControl fullWidth>
              <Select
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
                sx={{ height: "40px" }}
              >
                <MenuItem value="">
                  <em>Select Designation</em>
                </MenuItem>
                <MenuItem value="manager">Manager</MenuItem>
                <MenuItem value="developer">Developer</MenuItem>
                <MenuItem value="team lead">Team Lead</MenuItem>
              </Select>
            </FormControl>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    name="roles[]"
                    value="1"
                    checked={formData.roles.includes("1")}
                    onChange={handleChange}
                  />
                }
                label="Admin"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="roles[]"
                    value="2"
                    checked={formData.roles.includes("2")}
                    onChange={handleChange}
                  />
                }
                label="Contact"
              />
            </Box>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default AddUser;
