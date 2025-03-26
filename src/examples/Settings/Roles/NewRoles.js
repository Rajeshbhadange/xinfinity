import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Button,
  TextField,
} from "@mui/material";

const NewRoles = () => {
  const [permissions, setPermissions] = useState({
    "Contact-list": false,
    "Contact-create": false,
    "Contact-edit": false,
    "Contact-delete": false,
    "Contact-show": false,
    "Contact-assigned-edit": false,
    "Contact-assigned-show": false,
    "Contact-export": false,
    "Contact-transfer": false,
    "Lead-list": false,
    "Lead-create": false,
    "Lead-edit": false,
    "Lead-delete": false,
    "Lead-show": false,
    "Lead-assigned-edit": false,
    "Lead-assigned-show": false,
    "Lead-export": false,
    "Lead-transfer": false,
    "Task-list-all": false,
    "Task-list-assigned": false,
    "Task-create": false,
    "Task-edit": false,
    "Task-delete": false,
    "Task-show": false,
    "Task-assigned-edit": false,
    "Task-assigned-show": false,
    "Task-export": false,
    "Task-attachment": false,
    "Task-uploadattachment": false,
    "Task-comments-show": false,
    "Task-comments-add": false,
    "Task-comments-edit": false,
    "Task-comments-delete": false,
    "Task-checklist-view": false,
    "Task-checklist-add": false,
    "Task-checklist-delete": false,
    "Task-checklist-edit": false,
    "Reports-sales": false,
    "Reports-invoicesreport": false,
    "Reports-itemreport": false,
    "Reports-paymentreceived": false,
    "Payment-dashboard-show": false,
    "Proposal-assigned-edit": false,
    "Reports-proposals": false,
    "Reports-estimates": false,
    "Reports-salescustomer": false,
    "Reports-totalincome": false,
    "Reports-charttotalincome": false,
    "Reports-expensevsincome": false,
    "Manage-languages": false,
    "Item-list": false,
    "Item-create": false,
    "Item-edit": false,
    "Item-delete": false,
    "Item-assigned-edit": false,
    "Proposal-list": false,
    "Proposal-create": false,
    "Proposal-edit": false,
    "Proposal-delete": false,
    "Estimate-list": false,
    "Estimate-create": false,
    "Estimate-edit": false,
    "Estimate-delete": false,
    "Estimate-dashboard-show": false,
    "Estimate-assigned-edit": false,
    "Invoice-list": false,
    "Invoice-create": false,
    "Invoice-edit": false,
    "Invoice-delete": false,
    "Invoice-show": false,
    "Invoice-dashboard-show": false,
    "Invoice-assigned-edit": false,
    "User-management": false,
    "Roles-management": false,
    Administer: false,
    "Expense-all": false,
    "Expense-assigned": false,
    "Expense-create": false,
    "Expense-export": false,
    "Expense-edit": false,
    "Expense-delete": false,
    "Expense-assigned-edit": false,
    "Expense-show": false,
    "Expense-import": false,
    "Reminders-add": false,
    "Reminders-edit": false,
    "Reminders-delete": false,
    "Expenses-report": false,
    "Contract-all": false,
    "Contract-assigned": false,
    "Contract-create": false,
    "Contract-edit": false,
    "Contract-delete": false,
    "Contract-export": false,
    Contract_show: false,
    "Contract-attachment": false,
    "Contract-attachment-upload": false,
    "Contract-attachment-delete": false,
    "Contract-comments-add": false,
    "Contract-comments-edit": false,
    "Contract-comments-delete": false,
    "Contract-comments-show": false,
    "Contract-renew-history": false,
    "Contract-renew-history-add": false,
    "Contract-renew-history-delete": false,
    "Contract-notes-show": false,
    "Contract-notes-add": false,
    "Contract-notes-edit": false,
    "Contract-notes-delete": false,
    "Contract-template-show": false,
    "Contract-template-add": false,
    "Contract-template-edit": false,
    "Contract-template-delete": false,
    "Contract-template-insert": false,
    "Contract-public-view": false,
    "Contract-download": false,
    "Contract-sign": false,
    "Contract-copy": false,
    "Contact-clear-signature": false,
    "Contract-sendemail": false,
    "Project-all": false,
    "Project-assigned": false,
    "Project-create": false,
    "Project-edit": false,
    "Project-delete": false,
    "Project-assigned-edit": false,
    Project_show: false,
    "Project-export": false,
    "Project-timesheet": false,
    "Project-addtimesheet": false,
    "Project-edittimesheet": false,
    "Project-deletetimesheet": false,
    "Project-addmilestone": false,
    "Project-listmilestone": false,
    "Project-deletemilestone": false,
    "Project-editmilestone": false,
    "Project-creatediscussion": false,
    "Project-editdiscussion": false,
    "Project-deletediscussion": false,
    "Project-showdiscussion": false,
    "Project-attachmentupload": false,
    "Project-attachmentlist": false,
    "Project-attachmentdelete": false,
    "Tickets-list": false,
    "Tickets-add": false,
    "Tickets-edit": false,
    "Tickets-show": false,
    "Tickets-delete": false,
    "Tickets-reply": false,
    "Tickets-showreply": false,
    "Tickets-addnote": false,
    "Tickets-notelist": false,
    "Tickets-editnote": false,
    "Tickets-reminderlist": false,
    "Tickets-reminderadd": false,
    "Tickets-reminderedit": false,
    "Tickets-reminderdelete": false,
    "Tickets-deletenote": false,
    "Tickets-takslist": false,
    "Tickets-taskedit": false,
    "Tickets-taskdelete": false,
    "Tickets-settings": false,
    "Tickets-dashboard-show": false,
    "Ticketsstaff-dashboard-show": false,
    "Project-notes": false,
    "Project-activity": false,
    "Project-activity-visicustomer": false,
    "Project-proposals-tab": false,
    "Project-dashboard-show": false,
    "Proposal-dashboard-show": false,
    "Project-estimates-tab": false,
    "Project-invoices-tab": false,
    "Project-expense-tab": false,
    "Project-copy": false,
    "Project-viewprojectascustomer": false,
    "Tickets-all": false,
    "Tickets-create": false,
    "Tickets-export": false,
    "Tickets-deletereply": false,

    // Add more permissions as needed
  });

  const handlePermissionChange = (permission) => {
    setPermissions({
      ...permissions,
      [permission]: !permissions[permission],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(permissions);
    // Add logic to submit form data to the backend
  };

  return (
    <div>
      <Box sx={{ ml: 2, mt: 1 }}>
        <Box className="page-title">
          <h3>Importer</h3>
          <h3 className="link">
            <Link to="/">Dashboard</Link> / Importer
          </h3>
        </Box>
      </Box>
      <Card sx={{ ml: 2, mt: 1 }}>
        <Typography
          variant="h6"
          padding={2}
          sx={{ backgroundColor: "#f2f2f2" }}
        >
          Create New Role
        </Typography>
        <CardContent m="16px">
          <form onSubmit={handleSubmit}>
            <InputLabel>Role Name</InputLabel>
            <FormControl
              sx={{
                mt: "2px",
                "& .MuiInputBase-root": {
                  height: "40px",
                  width: "50vw",
                },
              }}
            >
              <TextField type="text" />
            </FormControl>

            <Typography variant="h6" align="center" gutterBottom mt={2}>
              <b>Assign Permissions</b>
            </Typography>

            <Grid container spacing={0.5}>
              {Object.keys(permissions).map((permission) => (
                <Grid item xs={12} sm={6} md={3} key={permission}>
                  <FormControlLabel
                    label={permission.replace(/-/g, " ")}
                    control={
                      <Checkbox
                        checked={permissions[permission]}
                        onChange={() => handlePermissionChange(permission)}
                        name="permissions[]"
                        value={permission}
                        sx={{ fontSize: "10px" }}
                      />
                    }
                  />
                </Grid>
              ))}
            </Grid>

            <Box textAlign="left" marginTop={2}>
              <Button type="submit" variant="contained" color="primary">
                Add
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewRoles;
