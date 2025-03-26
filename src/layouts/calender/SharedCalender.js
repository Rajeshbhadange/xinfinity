import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Button,
  Typography,
  Modal,
  InputLabel,
  Select,
  MenuItem,
  Card,
  Grid,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

const EventFormModal = ({ open, onClose, date }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    allDay: false,
    syncWithGoogle: false,
    startDate: "",
    endDate: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Event Data:", formData, "Selected Date:", date);
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        component="form"
        className="event-modal-form"
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" component="h6" pb="20px" mt="-20px">
          Event
        </Typography>

        <InputLabel>Title</InputLabel>
        <div className="change">
          <input name="title" onChange={handleInputChange} />
        </div>

        <InputLabel>All Day</InputLabel>
        <input type="checkbox" name="allDay" onChange={handleInputChange} />

        <InputLabel>Sync with Google</InputLabel>
        <input
          type="checkbox"
          name="syncWithGoogle"
          onChange={handleInputChange}
        />

        <InputLabel>Start Date</InputLabel>
        <div className="change">
          <input type="date" name="startDate" onChange={handleInputChange} />
        </div>

        <InputLabel>End Date</InputLabel>
        <div className="change">
          <input type="date" name="endDate" onChange={handleInputChange} />
        </div>

        <InputLabel>Visibility</InputLabel>
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          sx={{ width: "100%" }}
        >
          <MenuItem value="select visibility">Select Visibility</MenuItem>
          <MenuItem value="public">Public</MenuItem>
          <MenuItem value="private">Private</MenuItem>
        </Select>

        <InputLabel>Description</InputLabel>
        <div className="desc">
          <textarea name="description" onChange={handleInputChange} />
        </div>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};

const ReportDateModal = ({ open, onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement logic to handle date changes
    console.log("Report dates updated");
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        component="form"
        className="event-modal-form"
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" component="h6" pb="20px" mt="-20px">
          Change Report Dates
        </Typography>

        <InputLabel>Start Date</InputLabel>
        <div className="change">
          <input type="date" name="startDate" />
        </div>

        <InputLabel>End Date</InputLabel>
        <div className="change">
          <input type="date" name="endDate" />
        </div>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};

const SharedCalender = () => {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
    setIsEventModalOpen(true);
  };

  const handleCloseEventModal = () => {
    setIsEventModalOpen(false);
  };

  return (
    <>
      <div className="container-calender" style={{ margin: "25px" }}>
        <div className="header-container">
          <Typography variant="h5">Calendar</Typography>
          <Typography variant="h6">
            <Link to="/">Dashboard</Link>
            <span id="sp"> / Calendar</span>
          </Typography>
        </div>
        <div
          className="text-label"
          style={{
            margin: "25px",
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <InputLabel>User:</InputLabel>
          <span>XfinitySoft</span>
        </div>
        <div
          style={{
            margin: "25px",
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <InputLabel>Event Color:</InputLabel>
          <div
            style={{ backgroundColor: "black", padding: "20px", width: "42%" }}
          ></div>
        </div>
        <Grid item xs={12} width="82vw">
          <Card>
            <CardContent>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Button
                    variant="contained"
                    color="success"
                    href="/Contacts_2024-08-09_06_09_58.csv"
                    download="contacts_2024-08-09_06_09_58.csv"
                    sx={{ color: "white", ml: "25px" }}
                  >
                    Export CSV
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    <Link
                      to="/CreateEvent"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      New
                    </Link>
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </div>

      <Box className="calendar-container" ml="25px" p="15px">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          buttonText={{
            today: "Today",
            month: "Month",
            week: "Week",
            day: "Day",
          }}
          height="80vh"
          dateClick={handleDateClick}
        />
      </Box>
      <EventFormModal
        open={isEventModalOpen}
        onClose={handleCloseEventModal}
        date={selectedDate}
      />
    </>
  );
};

export default SharedCalender;
