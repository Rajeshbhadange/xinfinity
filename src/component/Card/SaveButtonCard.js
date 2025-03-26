import { Button } from "@mui/material";
import React from "react";

const SaveButtonCard = () => {
  return (
    <div
      className="card"
      style={{
        bordar: "2px solid #f2f2f2",
        backgroundColor: "white",
        marginTop: "15px",
        borderRadius: "4px",
        marginLeft: "18px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="card-body">
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </div>
    </div>
  );
};

export default SaveButtonCard;
