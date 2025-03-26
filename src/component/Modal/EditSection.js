import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  TextField,
  Button,
  Grid,
  Box,
  Modal,
  Typography,
  FormControl,
} from "@mui/material";

const EditSection = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: "90%",
          maxWidth: 400,
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
          mx: "auto",
          my: "auto",
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6">Edit Section</Typography>
          <Button onClick={handleClose} color="secondary">
            <CloseIcon />
          </Button>
        </Box>
        <FormControl fullWidth>
          <form
            method="POST"
            action="https://uppingcrm.xfinitysoft.app/settings/customfields"
            id="addsectionForm"
          >
            <input
              type="hidden"
              name="_token"
              value="FO7VIeWjeJ1W64BWnoTkgIDkL3lzHsIXjvvlEpnf"
              autoComplete="off"
            />
            <input type="hidden" id="method" name="_method" value="POST" />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="secinput"
                  name="section_name"
                  label="Section Name"
                  fullWidth
                  variant="outlined"
                />
                <input type="hidden" id="sec_id" name="section_id" value="1" />
                <input type="hidden" name="module_id" value="1" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="secorder"
                  name="section_order"
                  label="Section Order"
                  type="number"
                  fullWidth
                  variant="outlined"
                  inputProps={{ min: "0" }}
                />
              </Grid>
              <Grid item xs={12} sm={2} mt={2}>
                <Button
                  id="addsectionbtn"
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormControl>
      </Box>
    </Modal>
  );
};

export default EditSection;
