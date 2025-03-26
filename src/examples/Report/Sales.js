import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link } from "react-router-dom";
import { Box, Card, Grid, Typography } from "@mui/material";
import Invoice from "../../component/Reports/Invoice";
import Items from "../../component/Reports/Items";
import Payment from "../../component/Reports/Payment";
import Proposals from "../../component/Reports/Proposals";
import Estimates from "../../component/Reports/Estimates";
import Customer from "../../component/Reports/Customer";
import TotalIncome from "../../component/Reports/TotalIncome";

const Sales = () => {
  const [selectedReport, setSelectedReport] = useState(null);

  const handleClick = (reportName) => {
    setSelectedReport(reportName);
  };
  return (
    <div>
      <Box
        sx={{
          padding: { xs: 1, sm: 2 },
          marginTop: { xs: 1, sm: 3 },
          marginLeft: { xs: 1, sm: 2 },
          backgroundColor: "#FFF",
          border: "1px solid #f2f2f2",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">Sales Report</Typography>
            <List marginTop={2}>
              <Card>
                <ListItem
                  onClick={() => handleClick("invoices")}
                  component={Link}
                  to="#"
                  sx={{
                    color: "rgb(43, 79, 235)",
                  }}
                >
                  <ListItemIcon sx={{ color: "rgb(43, 79, 235)" }}>
                    <ArrowDownwardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Invoices Report" />
                </ListItem>
              </Card>
              <Card>
                <ListItem
                  onClick={() => handleClick("items")}
                  component={Link}
                  to="#"
                  sx={{
                    color: "rgb(43, 79, 235)",
                  }}
                >
                  <ListItemIcon sx={{ color: "rgb(43, 79, 235)" }}>
                    <ArrowDownwardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Items Report" />
                </ListItem>
              </Card>
              <Card>
                <ListItem
                  onClick={() => handleClick("payment")}
                  component={Link}
                  to="#"
                  sx={{
                    color: "rgb(43, 79, 235)",
                  }}
                >
                  <ListItemIcon sx={{ color: "rgb(43, 79, 235)" }}>
                    <ArrowDownwardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Payment Received" />
                </ListItem>
              </Card>
              <Card>
                <ListItem
                  onClick={() => handleClick("proposals")}
                  component={Link}
                  to="#"
                  sx={{
                    color: "rgb(43, 79, 235)",
                  }}
                >
                  <ListItemIcon sx={{ color: "rgb(43, 79, 235)" }}>
                    <ArrowDownwardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Proposals Report" />
                </ListItem>
              </Card>

              <Card>
                <ListItem
                  onClick={() => handleClick("estimates")}
                  component={Link}
                  to="#"
                  sx={{
                    color: "rgb(43, 79, 235)",
                  }}
                >
                  <ListItemIcon sx={{ color: "rgb(43, 79, 235)" }}>
                    <ArrowDownwardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Estimates Report" />
                </ListItem>
              </Card>

              <Card>
                <ListItem
                  onClick={() => handleClick("customer")}
                  component={Link}
                  to="#"
                  sx={{
                    color: "rgb(43, 79, 235)",
                  }}
                >
                  <ListItemIcon sx={{ color: "rgb(43, 79, 235)" }}>
                    <ArrowDownwardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Customers Report" />
                </ListItem>
              </Card>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">Chart Based Report</Typography>
            <List>
              <Card marginTop={2}>
                <ListItem
                  onClick={() => handleClick("total")}
                  component={Link}
                  to="#"
                  sx={{
                    color: "rgb(43, 79, 235)",
                  }}
                >
                  <ListItemIcon sx={{ color: "rgb(43, 79, 235)" }}>
                    <ArrowDownwardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Total Income" />
                </ListItem>
              </Card>
            </List>
          </Grid>
        </Grid>
        <Box
          sx={{
            padding: { xs: 1, sm: 2 },
            marginTop: { xs: 1, sm: 2 },
          }}
        >
          {selectedReport === "invoices" && (
            <div>
              <Invoice />
            </div>
          )}

          {selectedReport === "items" && (
            <div>
              <Items />
            </div>
          )}

          {selectedReport === "payment" && (
            <div>
              <Payment />
            </div>
          )}
          {selectedReport === "proposals" && (
            <div>
              <Proposals />
            </div>
          )}
          {selectedReport === "estimates" && (
            <div>
              <Estimates />
            </div>
          )}
          {selectedReport === "customer" && (
            <div>
              <Customer />
            </div>
          )}
          {selectedReport === "total" && (
            <div>
              <TotalIncome />
            </div>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Sales;
