import React, { useState } from "react";
import {
  Button,
  Typography,
  Modal,
  InputLabel,
  Grid,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import "./CalendarStyles.css"; // Assuming you have the CSS file

const ReportDateModal = ({ open, onClose, date }) => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Event Data:", formData, "Selected Date:", date);
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        component="form"
        className="event"
        onSubmit={handleSubmit}
        sx={{
          position: "absolute",
          left: "50%",
          // transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          maxWidth: 300,
          width: "100%",
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h6" pb={2}>
          Report Dates
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputLabel>Start Date</InputLabel>
            <TextField
              fullWidth
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>End Date</InputLabel>
            <TextField
              fullWidth
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2, display: "block", ml: "auto" }}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default ReportDateModal;
