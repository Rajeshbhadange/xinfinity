import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Checkbox,
  Button,
} from "@mui/material";
import React from "react";

const CustomFieldList = ({ formData, handleChange }) => {
  const columns = [
    { name: "id", label: "id", order: 1, isEnabled: true },
    { name: "firstname", label: "firstname", order: 2, isEnabled: true },
    { name: "secondname", label: "secondname", order: 3, isEnabled: true },
    {
      name: "primary_email",
      label: "primary_email",
      order: 4,
      isEnabled: true,
    },
    {
      name: "secondary_email",
      label: "secondary_email",
      order: 5,
      isEnabled: true,
    },
    {
      name: "primary_phone",
      label: "primary_phone",
      order: 6,
      isEnabled: true,
    },
    { name: "mob_phone", label: "mob_phone", order: 7, isEnabled: true },
    { name: "assign_to", label: "assign_to", order: 8, isEnabled: true },
    { name: "photo", label: "photo", order: 9, isEnabled: true },
    {
      name: "invoices_permission",
      label: "invoices_permission",
      order: 10,
      isEnabled: true,
    },
    {
      name: "estimates_permission",
      label: "estimates_permission",
      order: 11,
      isEnabled: true,
    },
    {
      name: "contracts_permission",
      label: "contracts_permission",
      order: 12,
      isEnabled: true,
    },
    {
      name: "proposals_permission",
      label: "proposals_permission",
      order: 13,
      isEnabled: true,
    },
    {
      name: "support_permission",
      label: "support_permission",
      order: 14,
      isEnabled: true,
    },
    {
      name: "projects_permission",
      label: "projects_permission",
      order: 15,
      isEnabled: true,
    },
    { name: "created_at", label: "created_at", order: 16, isEnabled: true },
    { name: "updated_at", label: "updated_at", order: 17, isEnabled: true },
  ];

  return (
    <div>
      <Box
        sx={{
          padding: { xs: 1, sm: 2 },
          marginTop: { xs: 1, sm: 2 },
          marginLeft: { xs: 1, sm: 2 },
          backgroundColor: "#FFF",
          border: "1px solid #f2f2f2",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Custom Fields Lists
        </Typography>
      </Box>
      <Box sx={{ marginTop: { xs: 1, sm: 2 }, marginLeft: { xs: 1, sm: 2 } }}>
        <InputLabel sx={{ ml: 2 }}>Module</InputLabel>
        <FormControl fullWidth>
          <Select
            name="department"
            value={formData?.module || ""} // Fallback to an empty string
            onChange={handleChange}
            required
            sx={{ height: "40px", background: "#FFF", width: "50%", ml: 2 }}
          >
            <MenuItem value="">
              <em>Contact</em>
            </MenuItem>
            <MenuItem value="event">Event</MenuItem>
            <MenuItem value="leads">Leads</MenuItem>
            <MenuItem value="tasks">Tasks</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ marginTop: { xs: 1, sm: 2 }, marginLeft: { xs: 1, sm: 2 } }}>
        <Card>
          <CardHeader
            title={
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding="10px"
              >
                <span>All Columns</span>
                <Button variant="contained" color="primary">
                  Save
                </Button>
              </Box>
            }
          />
          <CardContent className="responsive-table">
            <TableContainer>
              <Table className="table table-striped table-bordered">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>Columns Name</b>
                    </TableCell>
                    <TableCell>
                      <b>Label</b>
                    </TableCell>
                    <TableCell>
                      <b>Columns Order</b>
                    </TableCell>
                    <TableCell>
                      <b>Is Enable</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ backgroundColor: "#f2f2f2" }}>
                  {columns.map((column, index) => (
                    <TableRow key={index}>
                      <TableCell>{column.name}</TableCell>
                      <TableCell>
                        <TextField
                          variant="outlined"
                          name={`columnlabel[${column.name}]`}
                          defaultValue={column.label}
                          fullWidth
                          sx={{
                            mt: "2px",
                            "& .MuiInputBase-root": {
                              height: "40px",
                              backgroundColor: "#FFF",
                            },
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          type="number"
                          variant="outlined"
                          name={`order[${column.name}]`}
                          defaultValue={column.order}
                          fullWidth
                          sx={{
                            mt: "2px",
                            "& .MuiInputBase-root": {
                              height: "40px",
                              backgroundColor: "#FFF",
                            },
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Checkbox
                          name={`is_show[${column.name}]`}
                          defaultChecked={column.isEnabled}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default CustomFieldList;
