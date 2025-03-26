import {
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Importer = () => {
  const [selectedModule, setSelectedModule] = React.useState("");

  const handleChange = (event) => {
    setSelectedModule(event.target.value);
  };
  return (
    <div>
      <Box sx={{ ml: 2, mt: 1 }}>
        <Box className="page-title">
          <h3>Roles</h3>
          <h3 className="link">
            <Link to="/">Dashboard</Link> / Roles
          </h3>
        </Box>
      </Box>
      <Card sx={{ ml: 2 }}>
        <CardContent>
          <Box sx={{ mb: 2 }}>
            <InputLabel id="modules-label">Module</InputLabel>
            <FormControl fullWidth>
              <Select
                labelId="modules-label"
                id="modules_id"
                name="modules_id"
                value={selectedModule}
                onChange={handleChange}
                required
                sx={{ height: "40px", width: "70%" }}
              >
                <MenuItem value="">
                  <em>Select module</em>
                </MenuItem>
                <MenuItem value={1}>Contacts</MenuItem>
                <MenuItem value={2}>Leads</MenuItem>
                <MenuItem value={3}>Tasks</MenuItem>
                <MenuItem value={4}>Events</MenuItem>
                <MenuItem value={5}>Invoices</MenuItem>
                <MenuItem value={6}>Users</MenuItem>
                <MenuItem value={7}>Expense</MenuItem>
                <MenuItem value={8}>Contract</MenuItem>
                <MenuItem value={9}>Projects</MenuItem>
                <MenuItem value={10}>Tickets</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </CardContent>
      </Card>
      <Box
        sx={{
          ml: 2,
          mt: 2,
          backgroundColor: "#FFF",
          border: "1px solid #f2f2f2",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          p: 3,
        }}
      >
        <Typography varient="h6">Please select a module</Typography>
      </Box>
    </div>
  );
};

export default Importer;
