import { Box, Grid, InputLabel, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SaveButtonCard from "../../../component/Card/SaveButtonCard";

const NewLanguage = () => {
  return (
    <div>
      <Box sx={{ ml: 2, mt: 3 }}>
        <Box className="page-title">
          <h3>Create New Language</h3>
          <h3 className="link">
            <Link to="/">Dashboard</Link> / Create New Language
          </h3>
        </Box>
      </Box>
      <Box
        sx={{
          padding: { xs: 1, sm: 2 },
          marginLeft: { xs: 1, sm: 2 },
          backgroundColor: "#FFF",
          border: "1px solid #f2f2f2",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          mt: 2,
        }}
      >
        <Typography variant="h6">Create New Language</Typography>
        <Grid container spacing={2} mt={2} mb={1}>
          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ fontSize: "0.875rem" }}>Company name</InputLabel>
            <TextField
              type="text"
              placeholder="Enter Language Name"
              fullWidth
              sx={{
                mt: "8px",
                "& .MuiInputBase-root": { height: "35px", width: "70%" },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ fontSize: "0.875rem" }}>Company name</InputLabel>
            <TextField
              type="text"
              placeholder="Enter Language Code (e.g; en)"
              fullWidth
              sx={{
                mt: "8px",
                "& .MuiInputBase-root": { height: "35px", width: "70%" },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <div style={{ marginBottom: "50px" }}>
        <SaveButtonCard />
      </div>
    </div>
  );
};

export default NewLanguage;
