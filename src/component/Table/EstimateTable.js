import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  IconButton,
} from "@mui/material";
import { FaExclamationCircle, FaCog, FaCheck } from "react-icons/fa";

const EstimateTable = () => {
  return (
    <TableContainer sx={{ mt: 2 }}>
      <Table aria-label="items table">
        <TableHead sx={{ backgroundColor: "#415164" }}>
          <TableRow>
            <TableCell sx={{ padding: "10px" }}></TableCell>
            <TableCell
              align="left"
              width="20%"
              sx={{ color: "#FFF", padding: "10px", fontSize: "0.875rem" }}
            >
              <FaExclamationCircle
                aria-hidden="true"
                title="New lines are not supported for item description. Use the item long description instead."
              />{" "}
              Item
            </TableCell>
            <TableCell
              align="left"
              width="25%"
              sx={{ color: "#FFF", padding: "10px", fontSize: "0.875rem" }}
            >
              Description
            </TableCell>
            <TableCell
              align="left"
              width="10%"
              sx={{ color: "#FFF", padding: "10px", fontSize: "0.875rem" }}
            >
              Qty
            </TableCell>
            <TableCell
              align="left"
              width="15%"
              sx={{ color: "#FFF", padding: "10px", fontSize: "0.875rem" }}
            >
              Rate
            </TableCell>
            <TableCell
              align="left"
              width="15%"
              sx={{ color: "#FFF", padding: "10px", fontSize: "0.875rem" }}
            >
              Tax
            </TableCell>
            <TableCell
              align="left"
              width="10%"
              sx={{ color: "#FFF", padding: "10px", fontSize: "1rem" }}
            >
              Amount
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "#FFF", padding: "10px", fontSize: "0.875rem" }}
            >
              <FaCog />
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {/* First row (main input row) */}
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <TextField
                multiline
                rows={4}
                disabled
                placeholder="Description"
                fullWidth
                sx={{ backgroundColor: "#f5f6f8" }}
              />
            </TableCell>
            <TableCell>
              <TextField
                multiline
                rows={4}
                disabled
                placeholder="Long description"
                fullWidth
                sx={{ backgroundColor: "#f5f6f8", width: "18vw" }}
              />
            </TableCell>
            <TableCell>
              <TextField
                type="number"
                disabled
                placeholder="1"
                fullWidth
                sx={{ backgroundColor: "#f5f6f8", mt: "-3em" }}
              />
            </TableCell>
            <TableCell>
              <TextField
                type="number"
                disabled
                placeholder="Rate"
                fullWidth
                sx={{ backgroundColor: "#f5f6f8", mt: "-3em" }}
              />
            </TableCell>
            <TableCell>
              <TextField
                type="number"
                disabled
                placeholder="No Tax"
                fullWidth
                sx={{ backgroundColor: "#f5f6f8", mt: "-3em" }}
              />
            </TableCell>
            <TableCell></TableCell>
            <TableCell align="center">
              <IconButton
                sx={{ color: "info", backgroundColor: "#50a5f1", mt: "-2.5em" }}
              >
                <FaCheck />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EstimateTable;
