import React from "react";
import { Box, Grid, FormControl, InputLabel, TextField } from "@mui/material";

const ClientNoteAndTnC = () => {
  return (
    <Box
      className="card"
      sx={{
        mt: "20px",
        ml: "20px",
      }}
    >
      <Box
        className="card-body"
        sx={{
          background: "#fbfdff",
          bordr: "2px solid #f2f2f2",
          borderRadius: "4px",
          boxShadow: "1px 1px 3px #000000",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputLabel htmlFor="client_note">Client Note</InputLabel>
            <FormControl fullWidth>
              <TextField
                id="client_note"
                name="client_note"
                multiline
                rows={2}
                variant="outlined"
                fullWidth
                sx={{
                  fontSize: "0.875rem",
                  "& .MuiInputBase-root": { height: "70px" },
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="tnc">Terms &amp; Conditions</InputLabel>
            <FormControl fullWidth>
              <TextField
                id="tnc"
                name="tnc"
                multiline
                rows={2}
                variant="outlined"
                fullWidth
                sx={{
                  fontSize: "0.875rem",
                  "& .MuiInputBase-root": { height: "70px" },
                }}
                defaultValue="Enim voluptates et qui dolor ea molestiae. Aut in necessitatibus dolor omnis totam facere. Aliquid sed sapiente molestiae quae aut. Aut debitis nam quaerat eos. Voluptatem possimus ut natus adipisci et assumenda."
              />
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ClientNoteAndTnC;
