import React, { useState } from "react";
import { ColorPicker } from "primereact/colorpicker";
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Box,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";

const CalendarForm = () => {
  const [defaultView, setDefaultView] = React.useState("agendaDay");

  const handleChange = (event) => {
    setDefaultView(event.target.value);
  };
  const [showTasks, setShowTasks] = useState(false);
  const [color, setColor] = useState(null);

  return (
    <Container>
      <Grid container spacing={2} alignItems="center" gap="10em">
        <Grid item xs={12} sm={4}>
          <InputLabel htmlFor="calendar-view" sx={{ pb: 2 }}>
            Calendar View
          </InputLabel>
          <FormControl fullWidth required>
            <Select
              value={defaultView}
              onChange={handleChange}
              inputProps={{
                name: "default_view",
                id: "calendar-view",
              }}
              style={{ height: "2.3em" }}
            >
              <MenuItem value="month">Month</MenuItem>
              <MenuItem value="agendaWeek">Week</MenuItem>
              <MenuItem value="agendaDay">Day</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel htmlFor="Time-zone" sx={{ pb: 2 }}>
            Time Zone
          </InputLabel>
          <FormControl fullWidth required>
            <Select
              value={defaultView}
              onChange={handleChange}
              inputProps={{
                name: "Timezone",
              }}
              style={{ height: "2.3em" }}
            >
              <MenuItem value="select-timezone"> Select Timezone</MenuItem>
              <MenuItem value="Spacific/Tahiti">Spacific/Tahiti</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} mt={-30}>
          Default Event Color
          <Box
            sx={{
              border: "2px solid aqua",
              borderRadius: "4px",
              padding: "6px",
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
              height: "100%",
            }}
          >
            <div
              className="card"
              sx={{
                fontSize: "5px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} mt={-30}>
          <InputLabel htmlFor="Default event status">
            Default event status
          </InputLabel>
          <FormControl fullWidth required>
            <Select
              value={defaultView}
              onChange={handleChange}
              inputProps={{
                name: "default_Status",
                id: "calendar-Status",
              }}
              style={{ height: "2.3em" }}
            >
              <MenuItem value="Select Status">Select Status</MenuItem>
              <MenuItem value="Planned">Planned</MenuItem>
              <MenuItem value="Held">Held</MenuItem>
              <MenuItem value="Not Held">Not Held</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} mt="-25em">
          <InputLabel htmlFor="calendar-view">Google Calendar</InputLabel>
          <Button
            sx={{ mt: 1 }}
            variant="contained"
            color="info"
            href="https://uppingcrm.xfinitysoft.app/preference/oauth"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect now
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} mt="-25em">
          <InputLabel htmlFor="Default Task Activity">
            Default Task Activity
          </InputLabel>
          <FormControl fullWidth required>
            <Select
              value={defaultView}
              onChange={handleChange}
              inputProps={{
                name: "default_activity",
                id: "calendar-activity",
              }}
              style={{ height: "2.3em" }}
            >
              <MenuItem value="call">Call</MenuItem>
              <MenuItem value="metting">Matting</MenuItem>
              <MenuItem value="mobile-call">Mobile Call</MenuItem>
              <MenuItem value="viewing-trip">Viewing Trip</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} mt="-35em">
          Google Calendar Event Color
          <Box
            sx={{
              border: "2px solid aqua",
              borderRadius: "4px",
              padding: "6px",
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
              height: "100%",
            }}
          >
            <div
              className="card"
              sx={{
                fontSize: "5px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2} mt="-38em">
          <Button
            sx={{ mt: 1 }}
            variant="contained"
            color="info"
            href="https://uppingcrm.xfinitysoft.app/preference/oauth"
            target="_blank"
            rel="noopener noreferrer"
          >
            Recur
          </Button>
        </Grid>
      </Grid>
      <div style={{ marginTop: "-15em", fontSize: "15px" }}>
        <p>Show Task on Calendar</p>
        <FormControlLabel
          control={
            <Checkbox
              sx={{ marginTop: "-20px" }}
              checked={showTasks}
              onChange={(e) => setShowTasks(e.target.checked)}
              name="show-tasks"
              color="primary"
            />
          }
        />
      </div>
      <Grid item xs={12} sm={4}>
        Google Calendar Task Color
        <Box
          sx={{
            border: "2px solid aqua",
            borderRadius: "4px",
            padding: "6px",
            width: "31%",
            display: "flex",
            justifyContent: "right",
            alignItems: "right",
            height: "100%",
          }}
        >
          <div
            className="card"
            sx={{
              fontSize: "5px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
          </div>
        </Box>
      </Grid>
    </Container>
  );
};

export default CalendarForm;
