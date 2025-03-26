import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  Stack,
  Box,
} from "@mui/material";

const commonBoxStyles = {
  border: "2px solid #f2f2f2",
  p: 2,
  backgroundColor: "#FFF",
  borderRadius: "5px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const buttonData = [
  { label: "COPY", href: null },
  { label: "CSV", href: "../../assets/Image/Expense List - Generic Crm.csv" },
  { label: "EXCEL", href: "../../assets/Image/Expense List - Generic Crm.csv" },
  { label: "PRINT", href: "../../assets/Image/Expense List - Generic Crm.csv" },
  { label: "PDF", href: "../../assets/Image/Expense List - Generic Crm.csv" },
];

const SupportList = () => {
  return (
    <>
      <Box sx={{ ml: 2, mt: 1 }}>
        <Box className="page-title">
          <h3>Tickets</h3>
          <h3 className="link">
            <Link to="/">Dashboard</Link> / List
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
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="flex-end"
          spacing={2}
        >
          <Button
            variant="contained"
            component={Link}
            to="/CreateSupport"
            sx={{
              backgroundColor: "royalblue",
              color: "white",
            }}
          >
            New
          </Button>
        </Stack>
      </Box>
      <Box>
        <Grid container spacing={2} pl={2} pt={3} fontSize="15px">
          <Grid item xs={12} lg={2.4}>
            <Card sx={{ p: 3 }}>
              <div
                style={{
                  p: 2,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  fontSize: "1.2rem",
                }}
              >
                <span>0</span>
                <span style={{ color: "#f46a6a" }}>Open</span>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} lg={2.4}>
            <Card sx={{ p: 3 }}>
              <div
                style={{
                  p: 2,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  fontSize: "1.2rem",
                }}
              >
                <span>0</span>
                <span style={{ color: "#34c38f" }}>In Progress</span>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} lg={2.4}>
            <Card sx={{ p: 3 }}>
              <div
                style={{
                  p: 2,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  fontSize: "1.2rem",
                }}
              >
                <span>0</span>
                <span style={{ color: "#2B4FEB" }}>Answered</span>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} lg={2.4}>
            <Card sx={{ p: 3 }}>
              <div
                style={{
                  p: 2,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  fontSize: "1.2rem",
                }}
              >
                <span>0</span>
                <span>On Hold</span>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} lg={2.4}>
            <Card sx={{ p: 3 }}>
              <div
                style={{
                  p: 2,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  fontSize: "1.2em",
                }}
              >
                <span>0</span>
                <span style={{ color: "#2B4FEB" }}>Finished</span>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          ...commonBoxStyles,
          display: "flex",
          flexDirection: "column",
          ml: "20px",
          mb: "50px",
          mt: 2,
        }}
      >
        <Box display="flex" flexDirection="row" gap={1} mb={2} flexWrap="wrap">
          {buttonData.map((button, index) => (
            <Button
              key={index}
              component={button.href ? "a" : "button"}
              href={button.href || undefined}
              download={
                button.href ? button.label + " - Generic Crm.csv" : undefined
              }
              sx={{
                backgroundColor: "#34c38f",
                color: "#FFF",
                "&:hover": {
                  backgroundColor: "#34c38f",
                },
                marginBottom: 1,
              }}
            >
              {button.label}
            </Button>
          ))}
        </Box>

        <Box m={2}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            mb={2}
          >
            <label style={{ marginRight: "8px" }}>Search:</label>
            <TextField type="search" variant="outlined" size="small" />
          </Box>

          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  {[
                    "Subject",
                    "Tags",
                    "Customer",
                    "Name",
                    "Email",
                    "priority",
                    "Service",
                    "Deparment",
                    "Rel Project",
                    "Status",
                    "Created At",
                    "Actions",
                  ].map((header) => (
                    <TableCell key={header} sx={{ fontWeight: "bold" }}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell>No data available in table</TableCell>
              </TableBody>
            </Table>
          </TableContainer>

          <Stack
            direction="row"
            spacing={2}
            mt={3}
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <div>Showing 0 to 0 of 0 entries</div>
            <ButtonGroup sx={{ opacity: 0.5 }}>
              <Button variant="outlined">Previous</Button>
              <Button variant="outlined">Next</Button>
            </ButtonGroup>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default SupportList;
