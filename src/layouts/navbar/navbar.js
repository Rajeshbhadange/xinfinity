import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./navbar.css";

const Appbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifAnchorEl, setNotifAnchorEl] = useState(null);

  const handleNavigation = (path) => {
    navigate(path);
    handleClose();
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotifMenu = (event) => {
    setNotifAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setNotifAnchorEl(null);
  };

  const handleOutsideClick = useCallback(
    (event) => {
      if (anchorEl && !anchorEl.contains(event.target)) {
        setAnchorEl(null);
      }
      if (notifAnchorEl && !notifAnchorEl.contains(event.target)) {
        setNotifAnchorEl(null);
      }
    },
    [anchorEl, notifAnchorEl]
  );

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [handleOutsideClick]);

  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <div className="arrow">
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => handleNavigation("/searchForm")}
          >
            <DownloadForOfflineRoundedIcon />
          </IconButton>
        </div>
        <Typography variant="h6" noWrap className="title"></Typography>
        <div className="search">
          <InputBase
            placeholder="Type here to Search"
            classes={{
              root: "input-root",
              input: "input-input",
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className="grow" />
        <div className="section-desktop">
          <div className="notification">
            <IconButton onClick={handleNotifMenu}>
              <NotificationsIcon />
            </IconButton>
            <Menu
              anchorEl={notifAnchorEl}
              open={Boolean(notifAnchorEl)}
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
                <Typography textAlign="center" ml="4em">
                  <span>No Notifications yet</span>
                </Typography>
              </MenuItem>
            </Menu>
          </div>
          <IconButton edge="end" className="icon-button" onClick={handleMenu}>
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleNavigation("/preference")}>
              Profile
            </MenuItem>
            <MenuItem onClick={() => handleNavigation("/calendar")}>
              My Calendar
            </MenuItem>
            <MenuItem onClick={() => handleNavigation("/sign-out")}>
              Sign Out
            </MenuItem>
          </Menu>
          <Typography variant="h6" className="brand-name">
            Xfinitysoft
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
