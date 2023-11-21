import React from "react";
import logo from "./w.svg";
import "./NavbarDesk.css";
import {
  Search12Regular,
  Person12Regular,
  Alert12Regular,
} from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";

function NavbarDesk() {
  const navigate = useNavigate();
  return (
    <>
      <div className="desk-nav">
        <div className="nav-logo">
          <img src={logo} alt="" className="nav-logo-svg" />
        </div>
        <div className="search-container-nav">
          <div className="search-icon-container">
            <Search12Regular className="nav-icon" />
          </div>
          <input type="text" className="search-bar-nav-desk" />
        </div>
        <div className="icons-container-nav">
          <div className="bell-container">
            <Alert12Regular className="nav-icon" />
          </div>
          <div className="account-container">
            <Person12Regular
              className="nav-icon"
              onClick={() => {
                navigate("/login");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarDesk;
