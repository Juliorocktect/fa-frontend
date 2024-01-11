import React, { useState } from "react";
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
  let search = "";
  return (
    <>
      <div className="desk-nav">
        <div className="nav-logo">
          <img
            src={logo}
            alt=""
            className="nav-logo-svg"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="search-container-nav">
          <div className="search-icon-container">
            <Search12Regular className="nav-icon" />
          </div>
          <input
            type="text"
            className="search-bar-nav-desk"
            onKeyUp={(e) => {
              search = e.target.value;
              console.log(search);
            }}
          />
        </div>
        <div className="icons-container-nav">
          <div className="bell-container">
            <Alert12Regular className="nav-icon" />
          </div>
          <div className="account-container">
            <Person12Regular
              className="nav-icon"
              onClick={() => {
                navigate("/dashboard");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarDesk;
