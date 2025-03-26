import React from "react";
import { Gauge } from "@mui/x-charts/Gauge";
import "./box.css";
import TotalRevenueChart from "../../../component/Card/CardChart/TotalRevenueChart";

const MyBox = () => {
  return (
    <div className="box-container">
      <div className="box1">
        <div className="text1">
          <h2>100</h2>
          Contact<br></br>
          view all Contact
        </div>
        <div className="graph-1">
          <TotalRevenueChart />
        </div>
        <div>{/* <Chart /> */}</div>
      </div>
      <div className="box2">
        <div className="text2">
          <h2>100</h2>
          Leads<br></br>
          view all Contact
        </div>
        <div className="Circle">
          <Gauge
            value={72}
            startAngle={0}
            endAngle={360}
            innerRadius="80%"
            outerRadius="100%"
            // ...
          />
        </div>
      </div>
      <div className="box3">
        <div className="text3">
          <span>14</span>
          <div className="passage">Tasks Not Completed View All</div>
        </div>
        <div className="graph-2">
          <TotalRevenueChart />
        </div>
      </div>
      <div className="box4">
        <div className="text">
          <h2>0</h2>
          Project in Progress <br></br>
          View All
        </div>
        <div className="circle-2">
          <Gauge
            width={90}
            height={65}
            value={65}
            startAngle={0}
            endAngle={360}
            innerRadius="80%"
            outerRadius="100%"
            // ...
          />
        </div>
      </div>
    </div>
  );
};

export default MyBox;
