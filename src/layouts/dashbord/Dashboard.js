import React, { useEffect } from "react";
import MyProject from "../../examples/Myproject/MyProject";
import {
  Card,
  CardContent,
  Typography,
  Box,
  // LinearProgress,
  // Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import $ from "jquery";
import "jquery-ui/ui/widgets/sortable"; // Ensure jQuery UI is imported
import Calendar from "../calender/calender";
import ChartComponent from "../../examples/Chart/ChartComponent";
import MyBox from "./fbox/box";
import LeadsAssignedChart from "../../component/Graph/Lead/LeadsAssignedChart";
import LeadsSource from "../../component/Graph/Lead/LeadsSource";

// Styles for custom progress bars
const CustomProgressBar = styled("div")(({ width, color }) => ({
  width: width,
  height: "8px",
  backgroundColor: color,
}));

// Inline styles for the component
const containerStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "15px",
};

const overviewStyle = {
  marginBottom: "16px",
};

const App = () => {
  useEffect(() => {
    // Initialize jQuery sortable
    $("#mysortable").sortable({
      update: function (event, ui) {
        const newOrder = $(this).sortable("toArray").toString();
        $.ajax({
          type: "POST",
          url: "https://uppingcrm.xfinitysoft.app/todoitems/updatetodoitemsorder",
          data: {
            newOrder: newOrder,
            _token: $('meta[name="csrf-token"]').attr("content"),
          },
          success: function (data) {
            // Handle success
          },
        });
      },
    });
  }, []);

  return (
    <>
      <Box ml={3} mb="2em">
        <div className="name">Dashboard</div>
        <div className="dh">
          <a href="#Dashboard.js">Dashboard</a>/Home
        </div>
      </Box>
      <MyBox />
      <Box sx={containerStyle}>
        <Box
          sx={{
            flex: "1 1 0",
            marginRight: "7em",
            marginLeft: "2em",
            hight: "100%",
            jstifyContent: "center",
            alignItem: "center",
            paddingTop: "20px",
          }}
        >
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", flexDirection: "row", gap: "3em" }}>
                <div>
                  <Box sx={{ flex: "1 1 0" }}>
                    <Typography variant="h6" component="div" sx={overviewStyle}>
                      Invoice Overview
                    </Typography>
                    <Typography variant="body2" component="div">
                      2 Draft
                    </Typography>
                    <Typography variant="body2" component="div" align="right">
                      20.00%
                    </Typography>
                    <CustomProgressBar width="20%" color="#475569" />
                    <Typography variant="body2" component="div">
                      4 Unpaid
                    </Typography>
                    <Typography variant="body2" component="div" align="right">
                      40.00%
                    </Typography>
                    <CustomProgressBar width="40%" color="#ac0101" />
                    <Typography variant="body2" component="div">
                      3 Partially paid
                    </Typography>
                    <Typography variant="body2" component="div" align="right">
                      30.00%
                    </Typography>
                    <CustomProgressBar width="30%" color="#d4d007" />
                    <Typography variant="body2" component="div">
                      1 Paid
                    </Typography>
                    <Typography variant="body2" component="div" align="right">
                      10.00%
                    </Typography>
                    <CustomProgressBar width="20%" color="#11b505" />

                    <Box sx={{ paddingTop: "5em" }}>
                      <Card
                        sx={{
                          padding: "12px",
                          border: "2px solid #fafdfffd",
                          fontSize: "bold",
                          jstifyContent: "center",
                        }}
                      >
                        <b className="mb-1">
                          $0
                          <span
                            style={{ color: "#ec7c20fd", marginLeft: "15px" }}
                          >
                            Outstanding Invoices
                          </span>
                        </b>
                      </Card>
                    </Box>
                  </Box>
                </div>
                <div>
                  <Box sx={{ flex: "1 1 0" }}>
                    <Typography variant="h6" component="div" sx={overviewStyle}>
                      Estimate Overview
                    </Typography>
                    <Typography variant="body2" component="div">
                      0 Draft
                    </Typography>
                    <Typography variant="body2" component="div" align="right">
                      0.00%
                    </Typography>
                    <CustomProgressBar width="0%" color="#475569" />
                    <Typography variant="body2" component="div">
                      1 Sent
                    </Typography>
                    <Typography variant="body2" component="div" align="right">
                      10.00%
                    </Typography>
                    <CustomProgressBar width="10%" color="#2e43cf" />
                    <Typography variant="body2" component="div">
                      4 Expired
                    </Typography>
                    <Typography variant="body2" component="div" align="right">
                      40.00%
                    </Typography>
                    <CustomProgressBar width="40%" color="#ac0101" />
                    <Typography variant="body2" component="div">
                      2 Declined
                    </Typography>
                    <Typography variant="body2" component="div" align="right">
                      20.00%
                    </Typography>
                    <CustomProgressBar width="20%" color="#ac0101" />
                    <Typography variant="body2" component="div">
                      3 Accepted
                    </Typography>
                    <Typography variant="body2" component="div" align="right">
                      30.00%
                    </Typography>
                    <CustomProgressBar width="30%" color="#11b505" />

                    <Box sx={{ paddingTop: "2em" }}>
                      <Card
                        sx={{
                          padding: "2px",
                          border: "2px solid #fafdfffd",
                          fontSize: "bold",
                          jstifyContent: "center",
                        }}
                      >
                        <b className="mb-1 mt-1">
                          <div className="bbb1">Paid Invoices</div>
                          <div className="bbb2">$0</div>
                        </b>
                      </Card>
                    </Box>
                  </Box>
                </div>
                <div>
                  <Box sx={{ flex: "1 1 0" }}>
                    <Typography variant="h6" component="div" sx={overviewStyle}>
                      Proposal Overview
                    </Typography>
                    <Typography variant="body2" component="div">
                      6 Draft
                    </Typography>
                    <Typography variant="body2" component="div" align="right">
                      60.00%
                    </Typography>
                    <CustomProgressBar width="60%" color="#475569" />
                    <Typography variant="body2" component="div">
                      1 Sent
                    </Typography>
                    <Typography variant="body2" component="div" align="right">
                      10.00%
                    </Typography>
                    <CustomProgressBar width="10%" color="#2e43cf" />
                    <Typography variant="body2" component="div">
                      1 Open
                    </Typography>
                    <Typography variant="body2" component="div" align="right">
                      10.00%
                    </Typography>
                    <CustomProgressBar width="10%" color="#475569" />
                    <Typography variant="body2" component="div">
                      0 Declined
                    </Typography>
                    <Typography variant="body2" component="div" align="right">
                      0.00%
                    </Typography>
                    <CustomProgressBar width="0%" color="#ac0101" />
                    <Typography variant="body2" component="div">
                      2 Revised
                    </Typography>
                    <Typography variant="body2" component="div" align="right">
                      20.00%
                    </Typography>
                    <CustomProgressBar width="20%" color="#11b505" />

                    <Box sx={{ paddingTop: "2em" }}>
                      <Card
                        sx={{
                          padding: "2px",
                          border: "2px solid #fafdfffd",
                          color: "#11a85ffd",
                          fontSize: "bold",
                          jstifyContent: "center",
                        }}
                      >
                        <b className="mb-1 mt-1">
                          <div className="bbb1">Paid Invoices</div>

                          <div className="bbb2">$0</div>
                        </b>
                      </Card>
                    </Box>
                  </Box>
                </div>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "32%",
            paddingTop: "20px",
          }}
        >
          <Box
            sx={{
              flex: "1 1 0",
              width: "100%",
            }}
          >
            <Card>
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    overviewStyle,
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  My to-do items <div style={{ color: "blue" }}>New To Do</div>
                </Typography>
                <div id="mysortable" className="ui-sortable">
                  {/* Sortable items will be rendered here */}
                </div>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
      <MyProject />
      <Calendar />
      <ChartComponent />
      <Box
        display="flex" // Stack on small screens
        gap={3}
        mb="50px"
        position="relative"
        width="100%"
      >
        <Box
          sx={{
            width: "100%",
            ml: { xs: "0px", md: "20px" },
          }}
        >
          <LeadsAssignedChart />
        </Box>
        <Box
          sx={{
            backgroundColor: "#FFF",
            border: "#f2f2f2",
            borderRadius: "5px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            postion: "relative",
            width: "100%",
            p: 2,
          }}
        >
          <LeadsSource />
        </Box>
      </Box>
    </>
  );
};

export default App;
