import React from "react";
import { Card, Grid } from "@mui/material";
import TotalRevenueChart from "./CardChart/TotalRevenueChart";

const Ccard = () => {
  return (
    <Grid container spacing={2} pl={2} pt={3} fontSize="15px">
      <Grid item xs={12} lg={2.4}>
        <Card
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h2>0</h2>
          <h2 style={{ color: "#2B4FEB" }}>Active</h2>

          <TotalRevenueChart />
        </Card>
      </Grid>
      <Grid item xs={12} lg={2.4}>
        <Card
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h2>0</h2>
          <h2 style={{ color: "#f46a6a" }}>Expired</h2>
        </Card>
      </Grid>
      <Grid item xs={12} lg={2.4}>
        <Card
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h2>0</h2>
          <h2 style={{ color: "#f1b44c" }}>About To Expire</h2>
        </Card>
      </Grid>
      <Grid item xs={12} lg={2.4}>
        <Card
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h2>0</h2>
          <h2 style={{ color: "#34c38f" }}>Recently Added</h2>
        </Card>
      </Grid>
      <Grid item xs={12} lg={2.4}>
        <Card
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h2>0</h2>
          <h2 style={{ color: "#f46a6a" }}>Trash</h2>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Ccard;
