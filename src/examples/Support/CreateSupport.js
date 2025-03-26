import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const CreateSupport = () => {
  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedMember, setSelectedMember] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState(false);
  const [description, setDescription] = useState("");

  const [attachments, setAttachments] = useState([{ id: Date.now() }]);

  const handleAddAttachment = () => {
    setAttachments([...attachments, { id: Date.now() }]);
  };

  const handleRemoveAttachment = (id) => {
    setAttachments(attachments.filter((attachment) => attachment.id !== id));
  };

  const handleChangePriority = (event) =>
    setSelectedPriority(event.target.value);

  const handleChangeDepartment = (event) =>
    setSelectedDepartment(event.target.value);

  const handleChangeMember = (event) => setSelectedMember(event.target.value);
  const handleChangeProject = (event) => setSelectedProject(event.target.value);

  const handleChangeCustomer = (event) =>
    setSelectedCustomer(event.target.value);

  const handleChangeService = (event) => setSelectedService(event.target.value);
  const handleChangeSubject = (event) => setSubject(event.target.value);
  const handleInputChange = (event) => setDescription(event.target.value);

  const handleSubmit = () => {
    if (subject === "" || selectedPriority === "" || selectedCustomer === "") {
      setError(true);
    } else {
      setError(false);
      console.log("Form submitted with:", {
        subject,
        selectedPriority,
        selectedCustomer,
        selectedService,
        selectedDepartment,
        selectedMember,
        selectedProject,
        description,
      });
    }
  };

  return (
    <div>
      <Box sx={{ ml: 2, mt: 1 }}>
        <Box className="page-title">
          <h3>Create Ticket</h3>
          <h3 className="link">
            <Link to="/">Dashboard</Link> / Create Ticket
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
        <Typography variant="h6" gutterBottom>
          Basic Information
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ fontSize: "0.875rem" }}>Subject</InputLabel>
            <TextField
              type="text"
              fullWidth
              value={subject}
              onChange={handleChangeSubject}
              error={error && subject === ""}
              helperText={error && subject === "" ? "Subject is required" : ""}
              sx={{
                mt: "2px",
                "& .MuiInputBase-root": { height: "40px" },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel>Priority</InputLabel>
            <FormControl fullWidth error={error && selectedPriority === ""}>
              <Select
                labelId="Priority"
                value={selectedPriority}
                onChange={handleChangePriority}
                displayEmpty
                inputProps={{ "aria-label": "Priority" }}
                sx={{ height: "40px" }}
              >
                <MenuItem value="">Select Priority</MenuItem>
                <MenuItem value="1">Low</MenuItem>
                <MenuItem value="2">Medium</MenuItem>
                <MenuItem value="3">High</MenuItem>
              </Select>
              {error && selectedPriority === "" && (
                <Typography variant="caption" color="error">
                  Priority is required
                </Typography>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ fontSize: "0.875rem" }}>Tags</InputLabel>
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

          <Grid item xs={12} sm={6}>
            <InputLabel>Service</InputLabel>
            <FormControl fullWidth>
              <Select
                labelId="Service"
                value={selectedService}
                onChange={handleChangeService}
                displayEmpty
                inputProps={{ "aria-label": "Select Service" }}
                sx={{ height: "40px" }}
              >
                <MenuItem value="">
                  <span>Select Service</span>
                </MenuItem>
                <MenuItem value="1">Service 1</MenuItem>
                <MenuItem value="2">Service 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel>Customer</InputLabel>
            <FormControl fullWidth>
              <Select
                labelId="Customer"
                value={selectedCustomer}
                onChange={handleChangeCustomer}
                displayEmpty
                inputProps={{ "aria-label": "Select Customer" }}
                sx={{ height: "40px" }}
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

          <Grid item xs={12} sm={6}>
            <InputLabel>Department</InputLabel>
            <FormControl fullWidth>
              <Select
                labelId="Department"
                value={selectedDepartment}
                onChange={handleChangeDepartment}
                displayEmpty
                inputProps={{ "aria-label": "Select Department" }}
                sx={{ height: "40px" }}
              >
                <MenuItem value="">
                  <span>Select Department</span>
                </MenuItem>
                <MenuItem value="1">Marketing</MenuItem>
                <MenuItem value="2">Sales</MenuItem>
                <MenuItem value="3">Abuse</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel>Member</InputLabel>
            <FormControl fullWidth>
              <Select
                labelId="Member"
                value={selectedMember}
                onChange={handleChangeMember}
                displayEmpty
                inputProps={{ "aria-label": "Select Member" }}
                sx={{ height: "40px" }}
              >
                <MenuItem value="">
                  <span>Select Member</span>
                </MenuItem>
                <MenuItem value="1">XfinitySoft</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ fontSize: "0.875rem" }}>CC</InputLabel>
            <TextField
              type="text"
              fullWidth
              sx={{
                mt: "2px",
                "& .MuiInputBase-root": { height: "40px" },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ fontSize: "0.875rem" }}>Name</InputLabel>
            <TextField
              type="name"
              fullWidth
              sx={{
                mt: "2px",
                "& .MuiInputBase-root": { height: "40px" },
              }}
            />
            <Grid item xs={12} mt={1}>
              <InputLabel sx={{ fontSize: "0.875rem" }}>Email</InputLabel>
              <TextField
                type="email"
                placeholder="Email"
                fullWidth
                sx={{
                  mt: "2px",
                  "& .MuiInputBase-root": { height: "40px" },
                }}
              />
            </Grid>
            <Grid item xs={12} mt={1}>
              <InputLabel>Project</InputLabel>
              <FormControl fullWidth>
                <Select
                  labelId=""
                  value={selectedProject}
                  onChange={handleChangeProject}
                  displayEmpty
                  inputProps={{ "aria-label": "Select Project" }}
                  sx={{ height: "40px" }}
                >
                  <MenuItem value="">Select Project</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel>Body</InputLabel>
            <FormControl fullWidth>
              <textarea
                name="Description"
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  height: "30vh",
                  boxSizing: "border-box",
                  borderRadius: "4px",
                }}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Box
        className="attachments"
        sx={{
          backgroundColor: "#FFF",
          border: "1px solid #f2f2f2",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          ml: 2,
          mt: 2,
          p: 2,
        }}
      >
        {attachments.map((attachment, index) => (
          <Grid container spacing={2} key={attachment.id} className="mt-2">
            <Grid item xs={12} sm={6}>
              <input
                type="file"
                className="form-control"
                name="attachments[]"
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ced4da",
                  borderRadius: "4px",
                  fontSize: "20px",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {index === 0 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddAttachment}
                  startIcon={<FaPlus />}
                  sx={{ ml: 2, p: "12px 15px", mb: 2 }}
                ></Button>
              ) : (
                <IconButton
                  color="error"
                  onClick={() => handleRemoveAttachment(attachment.id)}
                >
                  <div
                    style={{
                      color: "#fff",
                      backgroundColor: "#f46a6a",
                      borderColor: "#f46a6a",
                      borderRadius: "4px",
                      marginLeft: 8,
                      padding: "8px 20px",
                      marginTop: "-9px",
                    }}
                  >
                    <FaMinus />
                  </div>
                </IconButton>
              )}
            </Grid>
          </Grid>
        ))}
      </Box>
      <Box
        sx={{
          ml: 2,
          mt: 2,
          p: 2,
          backgroundColor: "#FFF",
          border: "1px solid #f2f2f2",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          mb: 3,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ height: "40px" }}
        >
          Save
        </Button>
      </Box>
    </div>
  );
};

export default CreateSupport;
