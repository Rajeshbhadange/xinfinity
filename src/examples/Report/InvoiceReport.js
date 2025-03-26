import { Box, Button, Collapse, Typography } from "@mui/material";
import React, { useState } from "react";

const commonBoxStyles = {
  border: "2px solid #f2f2f2",
  p: 2,
  backgroundColor: "#FFF",
  borderRadius: "5px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const buttonData = [
  { label: "COPY", href: null },
  { label: "CSV", href: "../../assets/Image/Expense List - Generic Crm.csv" },
  { label: "EXCEL", href: "../../assets/Image/Expense List - Generic Crm.csv" },
  { label: "PRINT", href: "../../assets/Image/Expense List - Generic Crm.csv" },
  { label: "PDF", href: "../../assets/Image/Expense List - Generic Crm.csv" },
];
const InvoiceReport = () => {
  const [showPage] = useState(false);
  return (
    <div>
      <Collapse in={showPage}>
        <Box>
          <Typography variant="h4">Generated Report</Typography>
          <Box
            sx={{
              ...commonBoxStyles,
              display: "flex",
              flexDirection: "column",
              ml: "20px",
              mb: "50px",
              mt: 2,
            }}
          >
            <Box
              display="flex"
              flexDirection="row"
              gap={1}
              mb={2}
              flexWrap="wrap"
            >
              {buttonData.map((button, index) => (
                <Button
                  key={index}
                  component={button.href ? "a" : "button"}
                  href={button.href || undefined}
                  download={
                    button.href
                      ? button.label + " - Generic Crm.csv"
                      : undefined
                  }
                  sx={{
                    backgroundColor: "#34c38f",
                    color: "#FFF",
                    "&:hover": {
                      backgroundColor: "#34c38f",
                    },
                    marginBottom: 1,
                  }}
                >
                  {button.label}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </Collapse>
    </div>
  );
};

export default InvoiceReport;
