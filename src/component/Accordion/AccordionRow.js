import React, { useState } from "react";
import "./AccordionRow.css"; // Import your custom styles if needed

const AccordionRow = ({ rowData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <tr className="accordion-row">
        <td>
          <button onClick={handleToggle}>{isOpen ? "−" : "+"} Details</button>
        </td>
        <td>{rowData.name}</td>
        <td>{rowData.email}</td>
      </tr>
      {isOpen && (
        <tr className="accordion-content-row">
          <td colSpan="3">
            <div className="accordion-content">{rowData.details}</div>
          </td>
        </tr>
      )}
    </React.Fragment>
  );
};

export default AccordionRow;
