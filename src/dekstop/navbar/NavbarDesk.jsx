import React, { useEffect, useState } from "react";
import logo from "./w.svg";
import "./NavbarDesk.css";
import {
  Search12Regular,
  Person12Regular,
  Alert12Regular,
} from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";
import Notifications from "../../components/notifications/Notifications";
  
function NavbarDesk({searchQuery,setSearch}) {
  const navigate = useNavigate();
  let search = "";
  useEffect(()=>{
    if (searchQuery != null){
      document.getElementById("search").setAttribute("value",searchQuery);
    }
  },[])
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
            }}
            id="search"
            onKeyDown={(e) => {
              if (e.key === 'Enter'){
                e.preventDefault();
                if (window.location !== "/search"){
                  navigate("/search?q=" + search);
                }
                setSearch(search);
              }
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
