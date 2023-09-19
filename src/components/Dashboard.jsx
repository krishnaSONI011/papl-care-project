import React from "react";
import logo from "../logo.png";
let Dashboard = () => {
  return (
    <>
      <div className="d-flex justify-content-center vw-100 dash align-items-center">
        <div className="border-bottom border-primary border-5 pb-2 ">
          <div className="logo text-center border-bottom border-primary border-5 pb-2">
            <img src={logo} alt="" className="w-50" />
          </div>

          <div className="w-100 d-flex text-center justify-centent-evenly fs-5 py-3 ">
            <div className="w-50 text-primary fw-medium ">Name:-</div>
            <div className="w-50">Krishna Soni </div>
          </div>
          <div className="w-100 d-flex text-center justify-centent-evenly fs-5 py-3">
            <div className="w-50 text-primary fw-medium ">Project:-</div>
            <div className="w-50">Dashboard </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
