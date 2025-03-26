import React from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

const CalculationTable = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <TableContainer>
          <Table aria-label="calculation table">
            <TableBody>
              <TableRow id="subtotal">
                <TableCell>
                  <span style={{ fontWeight: "bold" }}>Sub Total :</span>
                </TableCell>
                <TableCell align="right">
                  <span>$0.00</span>
                  <input type="hidden" name="subtotal" value="0.00" />
                  <input type="hidden" name="total_tax" value="0.00" />
                </TableCell>
              </TableRow>
              <TableRow id="discount_area">
                <TableCell>
                  <Grid container>
                    <Grid item xs={7}>
                      <span style={{ fontWeight: "bold" }}>Discount</span>
                    </Grid>
                    <Grid item xs={5}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={8}>
                            <TextField
                              type="number"
                              value={0}
                              onChange={() => {}}
                              inputProps={{
                                min: 0,
                                max: 100,
                                style: {
                                  padding: "6px 8px",
                                  fontSize: "1rem",
                                },
                              }}
                              fullWidth
                              sx={{
                                "& .MuiInputBase-root": { height: "40px" },
                              }}
                            />
                          </Grid>

                          <Grid item xs={4}>
                            <Select
                              name="discount_total_type"
                              defaultValue="%"
                              fullWidth
                              sx={{
                                border: "none",
                                "& .MuiSelect-select": {
                                  padding: "6px 8px",
                                  fontSize: "0.875rem",
                                  height: "32px",
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                  border: "none",
                                },
                              }}
                            >
                              <MenuItem value="%">%</MenuItem>
                              <MenuItem value="fixed">Fixed Amount</MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell align="right">-$0.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Grid container>
                    <Grid item xs={7}>
                      <span style={{ fontWeight: "bold" }}>Adjustment</span>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        type="number"
                        value={0}
                        onChange={() => {}}
                        inputProps={{
                          min: 0,
                          max: 100,
                          style: {
                            padding: "6px 8px",
                            fontSize: "1rem",
                          },
                        }}
                        fullWidth
                        sx={{
                          "& .MuiInputBase-root": { height: "40px" },
                        }}
                      />
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell align="right">$0.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <span style={{ fontWeight: "bold" }}>Total :</span>
                </TableCell>
                <TableCell align="right">
                  <span>$0.00</span>
                  <input type="hidden" name="total" value="0.00" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default CalculationTable;
