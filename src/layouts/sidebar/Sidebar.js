import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  faAddressBook,
  faUsers,
  faCalendar,
  faTasks,
  faBalanceScale,
  faMoneyBill,
  faFileContract,
  faProjectDiagram,
  faLifeRing,
  faFile,
  faCog,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";

const Sidebar = () => {
  const [dropdownStates, setDropdownStates] = useState({
    contact: false,
    leads: false,
    events: false,
    tasks: false,
    sales: false,
    contract: false,
    expence: false,
    project: false,
    suppot: false,
    reports: false,
    preference: false,
    settings: false,
  });

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = (section) => {
    setDropdownStates((prevState) => {
      const newState = {};
      for (const key in prevState) {
        newState[key] = key === section ? !prevState[key] : false;
      }
      return newState;
    });
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const handleOutsideClick = useCallback(
    (e) => {
      if (
        isSidebarOpen &&
        !e.target.closest(".sidebar") &&
        e.target.closest(".sidebar-toggle")
      ) {
        setIsSidebarOpen(false);
      }
    },
    [isSidebarOpen]
  );

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [handleOutsideClick]);

  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? "open" : "close"}`}>
        <h2>Upping CRM</h2>
        <button className="sidebar-toggle" onClick={handleSidebarToggle}>
          {isSidebarOpen ? <MenuIcon /> : <CloseIcon />}
        </button>

        <h6>MENU</h6>

        <ul>
          <li>
            <a href="#Dashboard" onClick={() => handleNavigation("/")}>
              <DashboardIcon size="0.5x" fontSize="15px" />
              <div style={{ marginRight: "4em", fontSize: 15 }}>Dashboard</div>
            </a>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Contact" onClick={() => toggleDropdown("contact")}>
                <div>
                  <FontAwesomeIcon icon={faAddressBook} size="1x" />
                </div>
                <div style={{ marginRight: "3em", fontSize: 15 }}>Contact</div>
                <ExpandMoreIcon />
              </a>
              {dropdownStates.contact && (
                <ul className="dropdown-menu">
                  <li>
                    <a
                      href="#ListContact"
                      onClick={() => handleNavigation("/contactList")}
                    >
                      List Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#CreateNew"
                      onClick={() => handleNavigation("/CreateContact")}
                    >
                      Create New
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Leads" onClick={() => toggleDropdown("leads")}>
                <FontAwesomeIcon icon={faUsers} size="1x" />
                <div style={{ marginRight: "3.5em", fontSize: 15 }}>Leads</div>
                <ExpandMoreIcon />
              </a>
              {dropdownStates.leads && (
                <ul className="dropdown-menu">
                  <li>
                    <a
                      href="#LeadList"
                      onClick={() => handleNavigation("/LeadList")}
                    >
                      List Lead
                    </a>
                  </li>
                  <li>
                    <a
                      href="#CreateLead"
                      onClick={() => handleNavigation("/CreateLead")}
                    >
                      Create new
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Events" onClick={() => toggleDropdown("events")}>
                <FontAwesomeIcon icon={faCalendar} size="1x" />
                <div style={{ marginRight: "3em", fontSize: 15 }}>Events </div>
                <ExpandMoreIcon />
              </a>
              {dropdownStates.events && (
                <ul className="dropdown-menu">
                  <li>
                    <a
                      href="#Calendar"
                      onClick={() => handleNavigation("/MyCalendar")}
                    >
                      My Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#SharedCalender"
                      onClick={() => handleNavigation("/SharedCalender")}
                    >
                      Shared Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#CreateEvent"
                      onClick={() => handleNavigation("/CreateEvent")}
                    >
                      Create new
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Tasks" onClick={() => toggleDropdown("tasks")}>
                <FontAwesomeIcon icon={faTasks} size="1x" />
                <div style={{ marginRight: "3.5em", fontSize: 15 }}>Tasks</div>
                <ExpandMoreIcon />
              </a>
              {dropdownStates.tasks && (
                <ul className="dropdown-menu">
                  <li>
                    <a
                      href="#TaskList"
                      onClick={() => handleNavigation("/TaskList")}
                    >
                      Tasks List
                    </a>
                  </li>
                  <li>
                    <a
                      href="#TasksCard"
                      onClick={() => handleNavigation("/TasksCard")}
                    >
                      Tasks Card
                    </a>
                  </li>
                  <li>
                    <a
                      href="#NewTask"
                      onClick={() => handleNavigation("/NewTask")}
                    >
                      Create new
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Sales" onClick={() => toggleDropdown("sales")}>
                <FontAwesomeIcon icon={faBalanceScale} size="1x" />
                <div style={{ marginRight: "3.5em", fontSize: 15 }}>Sales</div>
                <ExpandMoreIcon />
              </a>
              {dropdownStates.sales && (
                <ul className="dropdown-menu">
                  <li>
                    <a
                      href="#Proposal"
                      onClick={() => handleNavigation("/Proposal")}
                    >
                      Proposal
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Estimates"
                      onClick={() => handleNavigation("/Estimates")}
                    >
                      Estimates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Invoices"
                      onClick={() => handleNavigation("/Invoices")}
                    >
                      Invoices
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Payment"
                      onClick={() => handleNavigation("/Payment")}
                    >
                      Payment
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Items"
                      onClick={() => handleNavigation("/ItemsList")}
                    >
                      Items
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Expence" onClick={() => toggleDropdown("expence")}>
                <FontAwesomeIcon icon={faMoneyBill} size="1x" />
                <div style={{ marginRight: "2em", fontSize: 15 }}>Expence</div>
                <ExpandMoreIcon />
              </a>
              {dropdownStates.expence && (
                <ul className="dropdown-menu">
                  <li>
                    <a
                      href="#Expence List"
                      onClick={() => handleNavigation("/ExpenseList")}
                    >
                      Expence List
                    </a>
                  </li>
                  <li>
                    <a
                      href="#NewExpence"
                      onClick={() => handleNavigation("/NewExpense")}
                    >
                      Create New
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#contract" onClick={() => toggleDropdown("contract")}>
                <FontAwesomeIcon icon={faFileContract} size="1x" />
                <div style={{ marginRight: "2em", fontSize: 15 }}>Contract</div>
                <ExpandMoreIcon />
              </a>
              {dropdownStates.contract && (
                <ul className="dropdown-menu">
                  <li>
                    <a
                      href="#ContractList"
                      onClick={() => handleNavigation("/ContractList")}
                    >
                      Contract List
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Contract"
                      onClick={() => handleNavigation("/NewContract")}
                    >
                      Create New
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Project" onClick={() => toggleDropdown("project")}>
                <FontAwesomeIcon icon={faProjectDiagram} size="1x" />
                <div style={{ marginRight: "2.8em", fontSize: 15 }}>
                  Project
                </div>
                <ExpandMoreIcon />
              </a>
              {dropdownStates.project && (
                <ul className="dropdown-menu">
                  <li>
                    <a
                      href="#ProjectList"
                      onClick={() => handleNavigation("/ProjectList")}
                    >
                      Project List
                    </a>
                  </li>
                  <li>
                    <a
                      href="#createProject"
                      onClick={() => handleNavigation("/CreateProject")}
                    >
                      Create new
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Suppot" onClick={() => toggleDropdown("suppot")}>
                <FontAwesomeIcon icon={faLifeRing} size="1x" />
                <div style={{ marginRight: "2.5em", fontSize: 15 }}>
                  Support
                </div>
                <ExpandMoreIcon />
              </a>
              {dropdownStates.suppot && (
                <ul className="dropdown-menu">
                  <li>
                    <a
                      href="#SupportList"
                      onClick={() => handleNavigation("/SupportList")}
                    >
                      List
                    </a>
                  </li>
                  <li>
                    <a
                      href="#CreateSupport"
                      onClick={() => handleNavigation("/CreateSupport")}
                    >
                      Create New
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Reports" onClick={() => toggleDropdown("reports")}>
                <FontAwesomeIcon icon={faFile} size="1x" />
                <div style={{ marginRight: "2.2em", fontSize: 15 }}>
                  Reports
                </div>
                <ExpandMoreIcon />
              </a>
              {dropdownStates.reports && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#Sales" onClick={() => handleNavigation("/Sales")}>
                      Sales
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Expence"
                      onClick={() => handleNavigation("/Expence")}
                    >
                      Expence
                    </a>
                  </li>
                  <li>
                    <a
                      href="#ExpenceVSIncome"
                      onClick={() => handleNavigation("/ExpenceVSIncome")}
                    >
                      Expence Vs Income
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="pre">
              <a
                href="#preference"
                className="pre"
                onClick={() => handleNavigation("/preference")}
              >
                <FontAwesomeIcon icon={faCog} size="1x" />
                <div style={{ marginLeft: "1.5em", fontSize: 15 }}>
                  Preference
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="#Settings" onClick={() => toggleDropdown("settings")}>
                <FontAwesomeIcon icon={faCogs} size="1x" />{" "}
                <div style={{ marginRight: "2.7em", fontSize: 15 }}>
                  Settings
                </div>{" "}
                <ExpandMoreIcon />
              </a>
              {dropdownStates.settings && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#Users" onClick={() => handleNavigation("/Users")}>
                      Users
                    </a>
                  </li>
                  <li>
                    <a
                      href="#CustomField"
                      onClick={() => handleNavigation("/CustomFields")}
                    >
                      Custom Field
                    </a>
                  </li>
                  <li>
                    <a
                      href="#CustomFieldList"
                      onClick={() => handleNavigation("/CustomFieldList")}
                    >
                      Custom Field Lists
                    </a>
                  </li>
                  <li>
                    <a href="#Roles" onClick={() => handleNavigation("/Roles")}>
                      Roles
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Importer"
                      onClick={() => handleNavigation("/Importer")}
                    >
                      Importer
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
