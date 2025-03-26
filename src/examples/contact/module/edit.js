// src/TransferModal.js
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";

const TransferModal = ({ open, handleClose }) => {
  const [selectedModule, setSelectedModule] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with:", {
      module_id: selectedModule,
      // Include other form data here
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      Width="md"
      fullWidth
      sx={{ marginBottom: "20em" }}
    >
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Close
        </Button>
      </DialogActions>
      <DialogTitle>Transfer Data</DialogTitle>
      <DialogContent>
        <form
          // method="POST"
          // action="https://uppingcrm.xfinitysoft.app/transfer"
          acceptCharset="UTF-8"
          onSubmit={handleSubmit}
        >
          <input name="_token" type="hidden" value=" " />
          <input type="hidden" name="_token" value=" " autoComplete="off" />

          <InputLabel id="module-select-label">Module</InputLabel>
          <FormControl fullWidth margin="normal">
            <Select
              labelId="module-select-label"
              id="module-select"
              value={selectedModule}
              onChange={(e) => setSelectedModule(e.target.value)}
              required
            >
              <MenuItem value="">
                <em>Select module To transfer</em>
              </MenuItem>
              <MenuItem value="2">Leads</MenuItem>
              <MenuItem value="5">Invoices</MenuItem>
              <MenuItem value="6">Users</MenuItem>
              <MenuItem value="7">Expense</MenuItem>
              <MenuItem value="8">Contract</MenuItem>
              <MenuItem value="9">Projects</MenuItem>
              <MenuItem value="10">Tickets</MenuItem>
            </Select>
          </FormControl>
          <input
            type="hidden"
            name="trasnfer_module_entry_id"
            id="trasnfer-module-entry-id"
            value="1"
          />
          <input
            type="hidden"
            name="trasnfer_module_entry_issingle"
            id="trasnfer-module-entry-issingle"
            value="1"
          />

          <Box mt={10}>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TransferModal;
