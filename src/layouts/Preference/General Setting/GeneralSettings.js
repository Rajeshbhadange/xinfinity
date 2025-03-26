import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  InputLabel,
  Input,
  FormControl,
  Alert,
  Grid,
} from "@mui/material";

const GeneralSettings = () => {
  const [setCompanyName] = useState("Generic Crm");
  const [loginLogo, setLoginLogo] = useState(null);
  const [favicon, setFavicon] = useState(null);
  const [sidebarLgLogo, setSidebarLgLogo] = useState(null);
  const [sidebarSmImage, setSidebarSmImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    switch (name) {
      case "company_name":
        setCompanyName(value);
        break;
      case "login_logo":
        setLoginLogo(files[0]);
        break;
      case "favicon":
        setFavicon(files[0]);
        break;
      case "sidebarlglogo":
        setSidebarLgLogo(files[0]);
        break;
      case "sidebarsmimage":
        setSidebarSmImage(files[0]);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <form
      method="POST"
      action="https://uppingcrm.xfinitysoft.app/users/1"
      encType="multipart/form-data"
      id="saveSettingsForm"
      onSubmit={handleSubmit}
    >
      <input
        name="_token"
        type="hidden"
        value="2amFSHgXrUOHhgIBTRz6Z4dzIHakhiOZKHAxzTT6"
      />
      <input type="hidden" name="_method" value="POST" />

      <Box mt={4}>
        <Alert
          severity="error"
          style={{ display: "none" }}
          id="general-alert-danger"
        >
          Error message
        </Alert>
        <Alert
          severity="success"
          style={{ display: "none" }}
          id="general-alert-success"
        >
          Settings updated
        </Alert>
      </Box>

      <Box mt={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ fontSize: "0.875rem" }}>Company name</InputLabel>
            <TextField
              type="text"
              placeholder="Generic Crm"
              fullWidth
              sx={{
                mt: "2px",
                "& .MuiInputBase-root": { height: "35px", width: "60%" },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="login_logo">
              Login Logo (Recommended Size 259*94 PX)
            </InputLabel>
            <FormControl width="100%">
              <Input
                type="file"
                id="login_logo"
                name="login_logo"
                inputProps={{ accept: "image/*" }}
                onChange={handleInputChange}
              />
              {loginLogo && (
                <img
                  src={URL.createObjectURL(loginLogo)}
                  alt="Login Logo"
                  className="w-50 mt-3"
                  id="login_logo_img"
                />
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="favicon">
              Favicon (Recommended Size 32*32 PX)
            </InputLabel>
            <FormControl width="100%">
              <Input
                type="file"
                id="favicon"
                name="favicon"
                inputProps={{ accept: "image/*" }}
                onChange={handleInputChange}
              />
              {favicon && (
                <img
                  src={URL.createObjectURL(favicon)}
                  alt="Favicon"
                  style={{ width: "32px", height: "32px" }}
                  id="favicon_img"
                />
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="sidebarlglogo">
              Sidebar Large Image (Recommended Size 130*45 PX)
            </InputLabel>
            <FormControl width="100%">
              <Input
                type="file"
                id="sidebarlglogo"
                name="sidebarlglogo"
                inputProps={{ accept: "image/*" }}
                onChange={handleInputChange}
              />
              {sidebarLgLogo && (
                <img
                  src={URL.createObjectURL(sidebarLgLogo)}
                  alt="Sidebar Large Logo"
                  style={{ width: "130px", height: "45px" }}
                  id="sidebarlglogo_img"
                />
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="sidebarsmimage">
              Sidebar Small Image (Recommended Size 37*20px)
            </InputLabel>
            <FormControl width="100%">
              <Input
                type="file"
                id="sidebarsmimage"
                name="sidebarsmimage"
                inputProps={{ accept: "image/*" }}
                onChange={handleInputChange}
              />
              {sidebarSmImage && (
                <img
                  src={URL.createObjectURL(sidebarSmImage)}
                  alt="Small sidebar logo"
                  id="sidebarsmimage_img"
                  style={{ width: "37px", height: "20px" }}
                />
              )}
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Box mt={4}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          id="save-settings"
        >
          Save
        </Button>
      </Box>
    </form>
  );
};

export default GeneralSettings;
