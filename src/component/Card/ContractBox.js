import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ContractsByChart from "../Graph/contract/ContractBychart";
import ContractsByTypeChart from "../Graph/contract/ContractsByTypeChart";

const ContractBox = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#FFF",
              border: "1px solid #f2f2f2",
              borderRadius: "5px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              Width: "50%",
              m: 2,
            }}
          >
            <Box m={2}>
              <h2>Contracts By Type</h2>
              <ContractsByTypeChart />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#FFF",
              border: "1px solid #f2f2f2",
              borderRadius: "5px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              Width: "50%",
              mt: 2,
            }}
          >
            <Box m={2}>
              <h2>Contracts By Type ( USD )</h2>
              <ContractsByChart />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default ContractBox;
