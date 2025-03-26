import { Box, Button, Grid, InputLabel } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Btn from "../../../component/Button/Button";
import AddIcon from "@mui/icons-material/Add";

const TaskCard = () => {
  return (
    <>
      <Box sx={{ ml: { xs: 1, sm: 2 }, mt: { xs: 1, sm: 1 } }}>
        <Box className="page-title">
          <h3>TaskCard</h3>
          <h3 className="link">
            <Link to="/">Dashboard</Link> / TaskCard
          </h3>
        </Box>
      </Box>

      <Box
        sx={{
          padding: { xs: 1, sm: 2 },
          mt: { xs: 1, sm: 2 },
          ml: { xs: 1, sm: 2 },
          backgroundColor: "#FFF",
          border: "1px solid #f2f2f2",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Grid container spacing={3} p={2}>
          <Grid item xs={12} sm={4} md={4}>
            <InputLabel sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>
              Date
            </InputLabel>
            <Btn />
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <InputLabel sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>
              Users
            </InputLabel>
            <Box
              sx={{
                border: "1px solid #a4a4a4fd",
                borderRadius: "5px",
                height: { xs: "8vh", sm: "10vh" },
                display: "flex",
                p: 2,
                width: "80%",
              }}
            >
              XfinitySoft
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <InputLabel sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>
              Status Type
            </InputLabel>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#2B4FEB", color: "#FFF", mt: "3em" }}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          padding: { xs: 1, sm: 2 },
          mt: { xs: 1, sm: 2 },
          ml: { xs: 1, sm: 2 },
          backgroundColor: "#FFF",
          border: "1px solid #f2f2f2",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/*  /*add tasks */}
        <Grid container spacing={3} p={2}>
          <Grid item xs={12} sm={4} md={4}>
            <Box
              sx={{
                border: "1px solid #f2f2f2",
                borderRadius: "5px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                padding: "10px",
              }}
            >
              <InputLabel
                sx={{
                  backgroundColor: "#FF5555",
                  color: "#FFF",
                  width: " 25%",
                  height: "25px",
                  padding: "5px 0px 0px 10px",
                }}
              >
                High
              </InputLabel>
              <input
                type="text"
                placeholder={`Add Task`}
                style={{
                  marginTop: "10px",
                  padding: "10px",
                  width: "95%",
                  borderRadius: "4px",
                }}
              />
              <Button
                variant="contained"
                component={Link}
                to="/NewTask"
                sx={{
                  backgroundColor: "royalblue",
                  color: "#FFF",
                  fontSize: "15px",
                }}
              >
                <AddIcon />
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Box
              sx={{
                border: "1px solid #f2f2f2",
                borderRadius: "5px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                padding: "10px",
              }}
            >
              <InputLabel
                sx={{
                  backgroundColor: "#03C04A",
                  color: "#FFF",
                  width: " 25%",
                  height: "25px",
                  padding: "5px 0px 0px 10px",
                }}
              >
                Medium
              </InputLabel>
              <input
                type="text"
                placeholder={`Add Task`}
                style={{
                  marginTop: "10px",
                  padding: "10px",
                  width: "95%",
                  borderRadius: "4px",
                }}
              />
              <Button
                variant="contained"
                component={Link}
                to="/NewTask"
                sx={{ backgroundColor: "royalblue", color: "#FFF" }}
              >
                <AddIcon />
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Box
              sx={{
                border: "1px solid #f2f2f2",
                borderRadius: "5px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                padding: "10px",
              }}
            >
              <InputLabel
                sx={{
                  backgroundColor: "#54A7F5",
                  color: "#FFF",
                  width: " 25%",
                  height: "25px",
                  padding: "5px 0px 0px 10px",
                }}
              >
                Low
              </InputLabel>
              <input
                type="text"
                placeholder={`Add Task`}
                style={{
                  marginTop: "10px",
                  padding: "10px",
                  width: "95%",
                  borderRadius: "4px",
                }}
              />
              <Button
                variant="contained"
                component={Link}
                to="/NewTask"
                sx={{ backgroundColor: "royalblue", color: "#FFF" }}
              >
                <AddIcon />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TaskCard;
