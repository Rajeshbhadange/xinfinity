import React, { useState } from "react";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NotificationDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ display: "inline-block" }}>
      <IconButton
        aria-controls="notification-menu"
        aria-haspopup="true"
        onClick={handleOpen}
      >
        <NotificationsIcon />
      </IconButton>
      <Menu
        id="notification-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          style: {
            width: "300px",
            minHeight: "300px",
          },
        }}
      >
        <MenuItem disabled>
          <Typography textAlign="center">No Notifications yet</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NotificationDropdown;
