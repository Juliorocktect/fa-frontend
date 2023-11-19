import React from "react";
import { ArrowLeft12Filled } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";
import "./Search.css";

function Search() {
  const navigate = useNavigate();
  return (
    <>
      <div className="search-head">
        <ArrowLeft12Filled
          className="nav-icon"
          onClick={() => {
            navigate("/");
          }}
        />
        <input type="text" className="search-input" placeholder="Suche..." />
      </div>
      <div className="suggestions"></div>
    </>
  );
}

export default Search;
