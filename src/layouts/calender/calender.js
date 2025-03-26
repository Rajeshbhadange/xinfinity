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
} from "@mui/material";
import { Box } from "@mui/system";
import "./CalendarStyles.css"; // Assuming you have the CSS file

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

function Calendar() {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
    setIsEventModalOpen(true);
  };

  const handleCloseEventModal = () => {
    setIsEventModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Box className="main-container">
        <Box className="report-dates-container">
          <Typography>Reports Dates Are</Typography>
          <Typography>Start: 2024-01-01 End: 2024-12-31</Typography>

          <div>
            <Button onClick={handleOpenModal}>Change Report Dates</Button>
            <ReportDateModal open={modalOpen} onClose={handleCloseModal} />
          </div>
        </Box>

        <Box className="calendar-container">
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
            height="70vh"
            dateClick={handleDateClick}
          />
        </Box>
      </Box>

      <EventFormModal
        open={isEventModalOpen}
        onClose={handleCloseEventModal}
        date={selectedDate}
      />
    </>
  );
}

export default Calendar;
