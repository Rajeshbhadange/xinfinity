import React, { useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SaveButtonCard from "../../../component/Card/SaveButtonCard";
import { Link } from "react-router-dom";

const CreateItems = () => {
  const [setDescription] = useState("");
  const handleInputChange = (event) => {
    setDescription(event.target.value);
  };
  return (
    <div>
      <Box sx={{ ml: 2, mt: 1 }}>
        <Box className="page-title">
          <h3>Create Item</h3>
          <h3 className="link">
            <Link to="/">Dashboard</Link> / Create Item
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
        <Grid item xs={6} sm={6} width="50%">
          <InputLabel>Title</InputLabel>
          <TextField
            type="text"
            placeholder="add items"
            fullWidth
            sx={{
              "& .MuiInputBase-root": { height: "35px" },
            }}
          />
        </Grid>
        <Grid item xs={6} width="50%" mt={1}>
          <InputLabel>Description</InputLabel>
          <FormControl fullWidth>
            <textarea
              name="Description"
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                height: "15vh",
                boxSizing: "border-box",
                borderRadius: "4px",
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} width="50%" mt={1}>
          <InputLabel>Rate</InputLabel>
          <TextField
            type="number"
            name="rate"
            id="rate"
            fullWidth
            sx={{ "& .MuiInputBase-root": { height: "35px" } }}
            required
          />
        </Grid>
        <Grid container spacing={2} alignItems="center" width="50%" mt={1}>
          <Grid item xs={12} sm={6} width="50%">
            <InputLabel>Tax 1</InputLabel>
            <FormControl fullWidth>
              <Select
                name="tax_1"
                id="tax_1"
                defaultValue=""
                sx={{
                  mt: 1,
                  "& .MuiInputBase-root": {
                    height: "30px", // Reduce height of the dropdown
                    fontSize: "0.875rem", // Smaller font size
                  },
                  "& .MuiSelect-select": {
                    padding: "6px 14px", // Reduce padding inside the dropdown
                  },
                }}
              >
                <MenuItem value="">No TAX</MenuItem>
                <MenuItem value={5}>5.00% TAX3</MenuItem>
                <MenuItem value={10}>10.00% TAX2</MenuItem>
                <MenuItem value={18}>18.00% TAX1</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Tax 2</InputLabel>
            <FormControl fullWidth>
              <Select
                name="tax_2"
                id="tax_2"
                defaultValue=""
                sx={{
                  mt: 1,
                  "& .MuiInputBase-root": {
                    height: "30px",
                    fontSize: "0.875rem",
                  },
                  "& .MuiSelect-select": {
                    padding: "6px 14px",
                  },
                }}
              >
                <MenuItem value="">No TAX</MenuItem>
                <MenuItem value={5}>5.00% TAX3</MenuItem>
                <MenuItem value={10}>10.00% TAX2</MenuItem>
                <MenuItem value={18}>18.00% TAX1</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={6} width="50%" mt={1}>
          <InputLabel>Title</InputLabel>
          <TextField
            type="text"
            placeholder="add items"
            fullWidth
            sx={{
              "& .MuiInputBase-root": { height: "35px" },
            }}
          />
        </Grid>
      </Box>
      <div style={{ marginBottom: "50px" }}>
        <SaveButtonCard />
      </div>
    </div>
  );
};

export default CreateItems;
