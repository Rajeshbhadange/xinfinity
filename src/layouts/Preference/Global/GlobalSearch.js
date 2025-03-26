import React, { useState } from "react";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Alert,
  Box,
  Typography,
} from "@mui/material";

function GlobalSearch() {
  const [searchOptions, setSearchOptions] = useState({
    search_contact: true,
    search_lead: true,
    search_task: true,
    search_event: true,
  });

  const [alert, setAlert] = useState({ type: "", message: "" });

  const handleCheckboxChange = (event) => {
    setSearchOptions({
      ...searchOptions,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSave = (event) => {
    event.preventDefault();
    setAlert({
      type: "success",
      message: "Search preferences saved successfully!",
    });
  };

  return (
    <Box sx={{ padding: 2 }}>
      {alert.message && (
        <Alert severity={alert.type} sx={{ marginBottom: 2 }}>
          {alert.message}
        </Alert>
      )}
      <Typography variant="h6" gutterBottom>
        Select modules for global search
      </Typography>
      <FormControl
        component="form"
        onSubmit={handleSave}
        sx={{ maxWidth: "100%" }}
      >
        <FormGroup sx={{ ml: 3 }}>
          <FormControlLabel
            control={
              <Checkbox
                sx={{ mr: 7 }}
                checked={searchOptions.search_contact}
                onChange={handleCheckboxChange}
                name="search_contact"
              />
            }
            label="Contacts"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{ mr: 7 }}
                checked={searchOptions.search_lead}
                onChange={handleCheckboxChange}
                name="search_lead"
              />
            }
            label="Leads"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{ mr: 7 }}
                checked={searchOptions.search_task}
                onChange={handleCheckboxChange}
                name="search_task"
              />
            }
            label="Tasks"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{ mr: 7 }}
                checked={searchOptions.search_event}
                onChange={handleCheckboxChange}
                name="search_event"
              />
            }
            label="Events"
          />
        </FormGroup>
        <Box sx={{ marginLeft: 3, textAlign: "left", marginTop: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
}

export default GlobalSearch;
