import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

const AddSection = ({ open, handleClose }) => {
  const [sectionName, setSectionName] = useState("");
  const [sectionOrder, setSectionOrder] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("_token", "FO7VIeWjeJ1W64BWnoTkgIDkL3lzHsIXjvvlEpnf");
    formData.append("_method", "POST");
    formData.append("section_name", sectionName);
    formData.append("section_order", sectionOrder);
    formData.append("module_id", "1");

    fetch("https://uppingcrm.xfinitysoft.app/settings/customfields", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Handle success
          console.log("Section added successfully!");
        } else {
          // Handle error
          console.error("Error adding section");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
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
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Add Section
            </Typography>
            <Button color="secondary" onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: "100%" }}
            noValidate
            autoComplete="off"
          >
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="secinput">Section Name</InputLabel>
              <TextField
                id="secinput"
                name="section_name"
                value={sectionName}
                onChange={(e) => setSectionName(e.target.value)}
                variant="outlined"
                fullWidth
                required
              />
              <input type="hidden" id="sec_id" name="section_id" value="" />
              <input type="hidden" name="module_id" value="1" />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="secorder">Section Order</InputLabel>
              <TextField
                id="secorder"
                name="section_order"
                type="number"
                inputProps={{ min: "0" }}
                value={sectionOrder}
                onChange={(e) => setSectionOrder(e.target.value)}
                variant="outlined"
                fullWidth
                required
              />
            </FormControl>

            <Box textAlign="left" mt={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
              >
                {loading ? (
                  <i className="fa fa-circle-o-notch fa-spin"></i>
                ) : (
                  "Save"
                )}
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddSection;
