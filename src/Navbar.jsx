import React from "react";
import {useNavigate } from "react-router-dom";
import ToolBar from "./Admin/ToolBar";

function Navbar() {
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="navbar_container">
      <div>
       <ToolBar/>
      </div>
        <div className="title">
        Shopping Website 
        </div>
      <div className="navbar_wrapper">
          <button onClick={() => handlelogout()} className="logout">LOGOUT</button>
      </div>
    </div>
  );
}
export default Navbar;