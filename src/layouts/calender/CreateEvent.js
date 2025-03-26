import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Select,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import SaveButtonCard from "../../component/Card/SaveButtonCard";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [allDay, setAllDay] = useState(false);
  const [status, setStatus] = useState("");
  const [activityType, setActivityType] = useState("");
  const [sync, setSync] = useState(true);
  const [visibility, setVisibility] = useState("");
  const [description, setDescription] = useState("");
  const [assignTo, setAssignTo] = useState("1");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      title,
      allDay: allDay ? "YES" : "",
      status,
      activityType,
      sync: sync ? "YES" : "",
      visibility,

      description,
      assignTo,
      dateStart,
      dateEnd,
      createdby: "1",
    };

    // Handle form submission (e.g., send to server)
    console.log("Form data:", eventData);
  };

  return (
    <>
      <h4
        className="mb-0"
        style={{
          marginLeft: "15px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        Create Event
        <div className="page-title-right">
          <Link to="/">Dashboard</Link> / Create Event
        </div>
      </h4>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12"></div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <input
                type="hidden"
                name="_token"
                value="jUoZsrMgw53TS5BaN3bALPnMHAwDZvHkCEw7CPam"
              />
              <input type="hidden" name="_method" value="POST" />

              <div
                className="card"
                style={{
                  backgroundColor: "#FFF",
                  pt: "-2",
                }}
              >
                <div className="card-body" style={{ pt: "-2em" }}>
                  <h4 className="card-title">Basic Information</h4>
                  <div className="row">
                    <div className="col-md-6 padding-0">
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <InputLabel>Title</InputLabel>
                          <FormControl fullWidth margin="normal">
                            <TextField
                              required
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                          <InputLabel>Assign User</InputLabel>
                          <FormControl fullWidth margin="normal">
                            <Select
                              value={assignTo}
                              onChange={(e) => setAssignTo(e.target.value)}
                            >
                              <MenuItem value="1">XfinitySoft</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={5} marginTop="-2em">
                          <FormControl fullWidth margin="normal">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={allDay}
                                  onChange={(e) => setAllDay(e.target.checked)}
                                />
                              }
                              label="All Day"
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={5} marginTop="-1em" marginLeft="6.5em">
                          <FormControl fullWidth margin="normal">
                            <label>Date Start</label>
                            <Flatpickr
                              value={dateStart}
                              onChange={([date]) => setDateStart(date)}
                              options={{
                                enableTime: true,
                                dateFormat: "Y-m-d H:i:s",
                                padding: "20px",
                              }}
                              style={{ padding: "10px", width: "37vw" }}
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={6} marginTop="-3.5em">
                          <InputLabel>Status</InputLabel>
                          <FormControl fullWidth margin="normal">
                            <Select
                              value={status}
                              onChange={(e) => setStatus(e.target.value)}
                            >
                              <MenuItem value="">Select Status</MenuItem>
                              <MenuItem value="planned">Planned</MenuItem>
                              <MenuItem value="held">Held</MenuItem>
                              <MenuItem value="not held">Not Held</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={5} marginTop="-1em">
                          <FormControl fullWidth margin="normal" p="10px">
                            <label>Date End</label>
                            <Flatpickr
                              value={dateEnd}
                              onChange={([date]) => setDateEnd(date)}
                              options={{
                                enableTime: true,
                                dateFormat: "Y-m-d H:i:s",
                              }}
                              style={{ padding: "10px", width: "37vw" }}
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={6} marginTop="-2em">
                          <InputLabel>Activity Type</InputLabel>
                          <FormControl fullWidth margin="normal">
                            <Select
                              value={activityType}
                              onChange={(e) => setActivityType(e.target.value)}
                            >
                              <MenuItem value="">Select Activity Type</MenuItem>
                              <MenuItem value="call">Call</MenuItem>
                              <MenuItem value="meeting">Meeting</MenuItem>
                              <MenuItem value="dinner">Dinner</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                      <Grid>
                        <InputLabel>Sync with Google</InputLabel>
                        <FormControl>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={sync}
                                onChange={(e) => setSync(e.target.checked)}
                              />
                            }
                          />
                        </FormControl>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <InputLabel>Visibility</InputLabel>
                          <FormControl fullWidth margin="normal">
                            <Select
                              value={visibility}
                              onChange={(e) => setVisibility(e.target.value)}
                            >
                              <MenuItem value="">Select Visibility</MenuItem>
                              <MenuItem value="public">Public</MenuItem>
                              <MenuItem value="private">Private</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <FormControl fullWidth margin="normal">
                            <TextField
                              label="Description"
                              multiline
                              rows={4}
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div style={{ marginLeft: "-16px" }}>
          <SaveButtonCard />
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
