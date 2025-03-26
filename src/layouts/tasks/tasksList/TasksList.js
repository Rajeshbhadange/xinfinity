import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Pagination from "@mui/material/Pagination";
import { baseURL } from "../../../Backend";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Link,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Tooltip,
  IconButton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const initialTasks = [
  { id: 1, title: "Task #1", priority: "low", status: "Pending", taskId: 1 },
  { id: 2, title: "Task #2", priority: "high", status: "Pending", taskId: 2 },
  { id: 5, title: "Task #5", priority: "high", status: "completed", taskId: 5 },
  { id: 6, title: "Task #6", priority: "high", status: "completed", taskId: 6 },
  { id: 7, title: "Task #7", priority: "high", status: "Pending", taskId: 7 },
  { id: 9, title: "Task #9", priority: "high", status: "Started", taskId: 9 },
  {
    id: 10,
    title: "Task #10",
    priority: "high",
    status: "Started",
    taskId: 10,
  },
];

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    fetch(`${baseURL}/getAllListTasks`)
      .then((response) => response.json())
      .then((data) => {
        // Check if 'data' is an object and has 'data' property
        if (data && Array.isArray(data.data)) {
          setTasks(data.data);
        } else {
          console.error("Unexpected data structure:", data);
          setTasks([]);
        }
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleDelete = (taskId) => {
    // For now, just log the taskId
    console.log("Deleting task with ID:", taskId);

    // Optionally, you could filter out the deleted task from the list
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));

    // Here you would typically send a request to your API to delete the task
  };

  return (
    <Container maxWidth="300" style={{ padding: 0 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box
            padding="10px"
            className="page-title-box"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginTop="1em"
            marginLeft="20px"
          >
            <Typography variant="h4" component="h4">
              Tasks
            </Typography>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/">
                Dashboard
              </Link>
              <Typography color="textPrimary">Tasks</Typography>
            </Breadcrumbs>
          </Box>
        </Grid>

        <Grid item xs={12} marginLeft="25px">
          <Card>
            <CardContent>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Button variant="contained" color="success">
                    Export CSV
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    New
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} marginLeft="25px">
          <Card>
            <CardContent>
              <Typography
                id="taskComplete"
                variant="body2"
                color="success"
                padding="10px"
                style={{ display: "none" }}
              >
                px Task #2 completed
              </Typography>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <FormControl variant="outlined" size="small">
                    <InputLabel>Show</InputLabel>
                    <Select label="Show" defaultValue={10}>
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={100}>100</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search"
                  />
                </Grid>
              </Grid>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Complete?</TableCell>
                    <TableCell>ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Activity Type</TableCell>
                    <TableCell>T Order</TableCell>
                    <TableCell>Rel Contact</TableCell>
                    <TableCell>Rel Lead</TableCell>
                    <TableCell>Rel Expense</TableCell>
                    <TableCell>Rel Contract</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell>
                        <Tooltip title="Mark as complete">
                          <IconButton>
                            <CheckCircleIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                      <TableCell>{task.id}</TableCell>
                      <TableCell>
                        <Link>{task.title}</Link>
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell>{task.priority}</TableCell>
                      <TableCell>{task.status}</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>19</TableCell>
                      <TableCell>57</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell sx={{ display: "flex", flexDirection: "row" }}>
                        <Tooltip title="Edit" placement="top">
                          <IconButton
                            component={Link}
                            to="/edit"
                            sx={{ color: "info.main" }}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton onClick={() => handleDelete(task.id)}>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>

            <div
              style={{
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Showing 1 to 10 of 20 entries
              <div className="footer">
                <Stack spacing={2}>
                  <Pagination count={100} />
                </Stack>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TaskList;
