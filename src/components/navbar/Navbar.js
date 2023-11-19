import React from "react";
import "./Navbar.css";
import {
  Home12Regular,
  Search12Regular,
  Alert12Regular,
  Person12Regular,
} from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav">
        <div className="icons-container">
          <Home12Regular
            className="nav-icon"
            onClick={() => {
              navigate("/");
            }}
          />
          <Search12Regular
            className="nav-icon"
            onClick={() => {
              navigate("/search/");
            }}
          />
          <Alert12Regular className="nav-icon" />
          <Person12Regular className="nav-icon" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
