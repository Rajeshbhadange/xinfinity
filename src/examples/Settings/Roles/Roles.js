import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";

const Roles = () => {
  const handleEdit = (id) => {
    console.log(`Edit user with id: ${id}`);
  };

  // Function to handle delete action
  const handleDelete = (id) => {
    console.log(`Delete user with id: ${id}`);
  };
  const users = [
    // Add your data here
  ];

  return (
    <div>
      <Box
        sx={{
          padding: { xs: 1, sm: 2 },
          marginTop: { xs: 1, sm: 3 },
          marginLeft: { xs: 1, sm: 2 },
          backgroundColor: "#FFF",
          border: "1px solid #f2f2f2",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="flex-end"
          spacing={2}
        >
          <Button
            variant="contained"
            component={Link}
            to="/NewRoles"
            sx={{
              backgroundColor: "royalblue",
              color: "white",
            }}
          >
            New
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          marginTop: { xs: 1, sm: 3 },
          marginLeft: { xs: 1, sm: 2 },
          backgroundColor: "#FFF",
          border: "1px solid #f2f2f2",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          p: 2,
        }}
      >
        <TableContainer>
          <Table
            id="users-datatables"
            className="dt-responsive nowrap"
            style={{
              border: "1px solid #f2f2f2",
              borderSpacing: 0,
              width: "100%",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Role</TableCell>
                <TableCell>Permissions</TableCell>
                <TableCell style={{ width: "21%" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.permissions}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(user.id)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => handleDelete(user.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Roles;
