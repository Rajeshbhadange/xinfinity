import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./layouts/sidebar/Sidebar";
import Navbar from "./layouts/navbar/navbar";
import Box from "./layouts/dashbord/fbox/box";
import Dashboard from "./layouts/dashbord/Dashboard";
import Calendar from "./layouts/calender/calender";
import MyProject from "./examples/Myproject/MyProject";
import ContactList from "./examples/contact/contactList";
import CreateContact from "./examples/contact/ContactForm/CreateContact";
import TaskList from "./layouts/tasks/tasksList/TasksList";
import LeadList from "./examples/LeadsList/LeadList";
import CreateLead from "./examples/LeadsList/CreateLead";
import CreateEvent from "./layouts/calender/CreateEvent";
import Preference from "./layouts/Preference/preference";
import SearchForm from "./layouts/navbar/Search/searchForm";
import CalendarForm from "./layouts/Preference/Calender/CalenderForm";
import ReportDateModal from "./layouts/calender/ReportDate";
import SharedCalender from "./layouts/calender/SharedCalender";
import NewTask from "./layouts/tasks/tasksList/newTasks";
import TasksCard from "./layouts/tasks/TasksCard/TasksCard";
import Estimates from "./examples/sales/Esstimates/Estimates";
import Invoices from "./examples/sales/Invoices/Invoices";
import Proposal from "./examples/sales/Proposals/Proposal";
import CreateEstimate from "./examples/sales/Esstimates/CreateEstimates";
import CreateProposals from "./examples/sales/Proposals/CreateProposals";
import CreateInvoices from "./examples/sales/Invoices/CreateInvoices";
import Payment from "./examples/sales/Payment/Payment";
import ExpenseList from "./examples/Expense/ExpenseList";
import NewExpense from "./examples/Expense/NewExpense";
import Import from "./examples/Expense/Import";
import ContractList from "./examples/Contract/ContractList";
import NewContract from "./examples/Contract/NewContract";
import ProjectList from "./examples/Myproject/ProjectList";
import CreateProject from "./examples/Myproject/CreateProject";
import SupportList from "./examples/Support/SupportList";
import ItemsList from "./examples/sales/Items/ItemsList";
import CreateItems from "./examples/sales/Items/CreateItems";
import CreateSupport from "./examples/Support/CreateSupport";
import Sales from "./examples/Report/Sales";
import Expence from "./examples/Report/Expance/Expence";
import ExpenceVsIncome from "./examples/Report/ExpenceVsIncome";
import ExpensesReport from "./examples/Report/Expance/ExpensesReport";
import ManageLanguage from "./layouts/Preference/Language/ManageLanguage";
import NewLanguage from "./layouts/Preference/Language/NewLanguage";
import MyCalender from "./layouts/calender/MyCalender";
import Users from "./examples/Settings/Users/Users";
import CustomFields from "./examples/Settings/Customfields/CustomFields";
import CustomFieldList from "./examples/Settings/Customfields/CustomFieldList";
import Roles from "./examples/Settings/Roles/Roles";
import NewRoles from "./examples/Settings/Roles/NewRoles";
import Importer from "./examples/Settings/Impoter/Importer";



function App() {
  
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/box" element={<Box />} />
            <Route path="/myproject" element={<MyProject />} />
            <Route path="/ProjectList" element={<ProjectList />} />
            <Route path="/CreateProject" element={<CreateProject />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/MyCalendar" element={<MyCalender />} />
            <Route path="/contactList" element={<ContactList />} />
            <Route path="/createContact" element={<CreateContact />} />
            <Route path="/leadList" element={<LeadList />} />
            <Route path="/CreateLead" element={<CreateLead />} />
            <Route path="/CreateEvent" element={<CreateEvent />} />
            <Route path="/taskList" element={<TaskList />} />
            <Route path="/preference" element={<Preference />} />
            <Route path="/searchForm" element={<SearchForm />} />
            <Route path="/CalendarForm" element={<CalendarForm />} />
            <Route path="/ReportDate" element={<ReportDateModal />} />
            <Route path="/SharedCalender" element={<SharedCalender />} />
            <Route path="/NewTask" element={<NewTask />} />
            <Route path="/TasksCard" element={<TasksCard />} />
            <Route path="/Proposal" element={<Proposal />} />
            <Route path="/CreateProposals" element={<CreateProposals />} />
            <Route path="/Estimates" element={<Estimates />} />
            <Route path="/CreateEstimate" element={<CreateEstimate />} />
            <Route path="/Invoices" element={<Invoices />} />
            <Route path="/CreateInvoices" element={<CreateInvoices />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/ItemsList" element={<ItemsList />} />
            <Route path="/CreateItems" element={<CreateItems />} />
            <Route path="/ExpenseList" element={<ExpenseList />} />
            <Route path="/NewExpense" element={<NewExpense />} />
            <Route path="/Import" element={<Import />} />
            <Route path="/ContractList" element={<ContractList />} />
            <Route path="/NewContract" element={<NewContract />} />
            <Route path="/SupportList" element={<SupportList />} />
            <Route path="/CreateSupport" element={<CreateSupport />} />
            <Route path="/Sales" element={<Sales />} />
            <Route path="/Expence" element={<Expence />} />
            <Route path="/ExpensesReport" element={<ExpensesReport />} />
            <Route path="/ExpenceVSIncome" element={<ExpenceVsIncome />} />
            <Route path="/ManageLanguage" element={<ManageLanguage />} />
            <Route path="/NewLanguage" element={<NewLanguage />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/CustomFields" element={<CustomFields />} />
            <Route path="/CustomFieldList" element={<CustomFieldList />} />
            <Route path="/Roles" element={<Roles />} />
            <Route path="/NewRoles" element={<NewRoles />} />
            <Route path="/Importer" element={<Importer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;
