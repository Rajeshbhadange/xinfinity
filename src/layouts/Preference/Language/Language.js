import { Button, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Language = () => {
  return (
    <div>
      <InputLabel>Select Language</InputLabel>
      <Select
        labelId="language-select"
        displayEmpty
        inputProps={{ "aria-label": "Select Language" }}
        sx={{ height: "35px", width: "30%" }}
      >
        <MenuItem value="">
          <span>English</span>
        </MenuItem>
        <MenuItem value="1">spen</MenuItem>
      </Select>
      <div style={{ marginTop: "16px" }}>
        <InputLabel>Manage Languages</InputLabel>
        <Button
          type="button"
          variant="contained"
          component={Link}
          to="/ManageLanguage"
          sx={{
            backgroundColor: "royalblue",
            color: "#FFF",
            width: "180px",
            fontSize: "13px",
            mt: 1,
          }}
        >
          Manage Languages
        </Button>
      </div>
      <Button
        type="button"
        variant="contained"
        sx={{
          backgroundColor: "royalblue",
          color: "#FFF",
          width: "50px",
          mt: 2,
        }}
      >
        Save
      </Button>
    </div>
  );
};

export default Language;
