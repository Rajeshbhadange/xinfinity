import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Project.css";
import PaymentRecord from "../../component/Graph/Project/PaymentRecord";
// import G1 from "./assets/images/G1.png";

const MyProject = () => {
  const [activeTab, setActiveTab] = useState(0);
  const data = []; // Sample data, replace with actual data as needed

  return (
    <div className="col-1">
      <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
        <TabList className="nav nav-tabs" id="myTab" role="tablist">
          <Tab className="nav-item">
            <span
              className={`nav-link ${activeTab === 0 ? "active" : ""}`}
              role="tab"
              aria-controls="myprojects"
              aria-selected={activeTab === 0}
            >
              My Projects
            </span>
          </Tab>
          <Tab className="nav-item">
            <span
              className={`nav-link ${activeTab === 1 ? "active" : ""}`}
              role="tab"
              aria-controls="tickets"
              aria-selected={activeTab === 1}
            >
              Tickets
            </span>
          </Tab>
          <Tab className="nav-item">
            <span
              className={`nav-link ${activeTab === 2 ? "active" : ""}`}
              role="tab"
              aria-controls="staffticketsreport"
              aria-selected={activeTab === 2}
            >
              Staff Tickets Report
            </span>
          </Tab>
          <Tab className="nav-item">
            <span
              className={`nav-link ${activeTab === 3 ? "active" : ""}`}
              role="tab"
              aria-controls="paymentrecords"
              aria-selected={activeTab === 3}
            >
              Payment Records
            </span>
          </Tab>
        </TabList>

        <div className="tab-content" id="myTabContent">
          <TabPanel
            className={`tab-pane fade ${activeTab === 0 ? "show active" : ""}`}
            id="myprojects"
            role="tabpanel"
            aria-labelledby="myprojects-tab"
          >
            <div className="row">
              <div className="col-12">
                <div className="card-1">
                  <div className="card-body">
                    <table
                      className="table table-bordered dt-responsive nowrap"
                      style={{
                        borderCollapse: "collapse",
                        borderSpacing: 0,
                        width: "100%",
                      }}
                    >
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Start date</th>
                          <th>Due date</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel
            className={`tab-pane fade ${activeTab === 1 ? "show active" : ""}`}
            id="tickets"
            role="tabpanel"
            aria-labelledby="tickets-tab"
          >
            <div className="card-1">
              <div className="card-body">
                <div
                  id="ticket-datatables_wrapper"
                  className="dataTables_wrapper dt-bootstrap4 no-footer"
                >
                  <div className="dataTables_filter">
                    <label>
                      Search:
                      <input
                        type="search"
                        className="form-control form-control-sm"
                        placeholder=""
                        aria-controls="ticket-datatables"
                      />
                    </label>
                  </div>
                  <div
                    className="dataTables_processing card"
                    style={{ display: "none" }}
                  >
                    Processing...
                  </div>
                  <table
                    className="table table-bordered dt-responsive nowrap dataTable no-footer dtr-inline"
                    role="grid"
                    aria-describedby="ticket-datatables_info"
                    style={{
                      borderCollapse: "collapse",
                      borderSpacing: "0px",
                      width: "100%",
                    }}
                  >
                    <thead>
                      <tr role="row">
                        <th>#</th>
                        <th>Subject</th>
                        <th>Tags</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Last reply</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.length === 0 ? (
                        <tr className="odd">
                          <td
                            valign="top"
                            colSpan="6"
                            className="dataTables_empty"
                          >
                            <div className="dataTable">
                              No data available in table
                            </div>
                          </td>
                        </tr>
                      ) : (
                        data.map((row, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{row.subject}</td>
                            <td>{row.tags}</td>
                            <td>{row.status}</td>
                            <td>{row.priority}</td>
                            <td>{row.lastReply}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                  <div
                    className="dataTables_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 0 to 0 of 0 entries
                  </div>
                  <div className="dataTables_paginate paging_simple_numbers">
                    <ul className="pagination">
                      <li className="paginate_button page-item previous disabled">
                        <a
                          href="#"
                          alt="fgre"
                          aria-controls="ticket-datatables"
                          data-dt-idx="0"
                          tabIndex="0"
                          className="page-item-1"
                        >
                          Previous
                        </a>
                      </li>
                      <li className="paginate_button page-item next disabled">
                        <a
                          href="#"
                          aria-controls="ticket-datatables"
                          data-dt-idx="1"
                          tabIndex="0"
                          className="page-item-2"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel
            className="tab-pane fade"
            role="tabpanel"
            aria-labelledby="staffticketsreport-tab"
          >
            <div className="card-1">
              <div className="card-body">
                <table
                  className="table table-bordered dt-responsive nowrap"
                  style={{
                    borderCollapse: "collapse",
                    borderSpacing: 0,
                    width: "100%",
                  }}
                >
                  <thead>
                    <tr>
                      <th>Staff member</th>
                      <th>Total Assigned Tickets</th>
                      <th>Open Tickets</th>
                      <th>Closed Tickets</th>
                      <th>Replies To Tickets</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </TabPanel>

          <TabPanel
            className="tab-pane fade"
            role="tabpanel"
            aria-labelledby="paymentrecords-tab"
          >
            <div className="row">
              <div className="col-md-12">
                <div className="card-2">
                  <div
                    className="card-body"
                    style={{ position: "relative", height: "365px" }}
                  >
                    <PaymentRecord />
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default MyProject;
