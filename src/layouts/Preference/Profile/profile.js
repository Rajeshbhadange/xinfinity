import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";

const ProfileForm = () => {
  const [name, setName] = useState("XfinitySoft");
  const [email, setEmail] = useState("admin@xfinitysoft.com");
  const [changePassword, setChangePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPhoto(URL.createObjectURL(event.target.files[0]));
      setFileName(event.target.files[0].name); // Set file name
    }
  };

  const [fileName, setFileName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 2, width: "100%" }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={3}
              container
              justifyContent="center"
              padding="20px"
            >
              <img
                src={
                  photo ||
                  "https://uppingcrm.xfinitysoft.app/storage/images/avator.jpg"
                }
                alt="Profile"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "130px",
                  marginRight: "15em",
                  borderRadius: "50%",
                }}
              />
              <div>
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    mt: 2,
                    width: "40%",
                    mr: "20rem",
                  }}
                >
                  Browse
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handlePhotoChange}
                  />
                </Button>
                {fileName && (
                  <Typography
                    variant="body1"
                    sx={{
                      mt: 2,
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    Selected file: {fileName}
                  </Typography>
                )}
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                required
                id="name"
                label="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                fullWidth
                required
                id="email"
                label="Email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mt: 2 }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={changePassword}
                    onChange={(e) => setChangePassword(e.target.checked)}
                    name="change-password"
                    color="primary"
                  />
                }
                label="Change Password"
                sx={{ mt: 2 }}
              />
              {changePassword && (
                <>
                  <TextField
                    fullWidth
                    required
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ mt: 2 }}
                  />
                  <TextField
                    fullWidth
                    required
                    id="password_confirmation"
                    label="Confirm Password"
                    name="password_confirmation"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    sx={{ mt: 2 }}
                  />
                </>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfileForm;
