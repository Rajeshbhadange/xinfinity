import React, { useState } from "react";
import ProfileForm from "./Profile/profile";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import GlobalSearch from "./Global/GlobalSearch";
import CalendarForm from "./Calender/CalenderForm";
import Theme from "./Themes/Theme";
import GeneralSettings from "./General Setting/GeneralSettings";
import Language from "./Language/Language";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const Preference = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box
        sx={{
          margin: "20px",
          border: "2px solid black",
          borderRadius: "5px",
          backgroundColor: "#FFF",
        }}
      >
        {/* <Box sx={{ margin: "10px", border: "2px solid black" }}> */}
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Profile" />
          <Tab label="Calendar" />
          <Tab label="Global Search" />
          <Tab label="Theme" />
          <Tab label="General Settings" />
          <Tab label="Language" />
        </Tabs>
        {/* </Box> */}
        <TabPanel value={value} index={0}>
          <ProfileForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CalendarForm />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <GlobalSearch />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Theme />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <GeneralSettings />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Language />
        </TabPanel>
      </Box>
    </div>
  );
};

export default Preference;
