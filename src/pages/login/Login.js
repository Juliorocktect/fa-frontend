import React, { useState } from "react";
import "./Login.css";
import w from "./w.svg";
import { setSession } from "../../Cookie.js";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  function getUrlByForm() {
    const Url = new URL("http://192.168.178.95:9090/user/auth");
    Url.searchParams.append("userName", userName);
    Url.searchParams.append("password", password);
    return Url.toString();
  }
  function sendForm() {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch(getUrlByForm(), requestOptions)
      .then((response) => {
        if (response.status == 200) {
          return response.text();
        } else {
          throw new Error("HTTP Status:" + response.status);
        }
      })
      .then((result) => {
        setSession(result);
        window.location.href = "/dashboard";
      })
      .catch((error) => console.log("error", error));
  }
  return (
    <>
      <div className="login-page">
        <img alt="" className="logo" src={w}></img>
        <div className="login-block">
          <h1 className="login-title">Anmelden</h1>
          <div className="auth-form-body">
            <form>
              <div className="passwd-container">
                <label htmlFor="email">Benutzername oder Email</label>
                <input
                  type="text"
                  className="login-input"
                  placeholder="User Name"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="passwd-container">
                <label htmlFor="Passwort">Passwort</label>
                <input
                  type="password"
                  className="login-input"
                  placeholder="Passwort"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="submit-button-container">
                <button
                  className="sign-in-button"
                  onClick={(e) => {
                    e.preventDefault();
                    sendForm();
                  }}
                >
                  Anmelden
                </button>
              </div>
            </form>
          </div>
          <div className="sign-up-section">
            <h4>Neu hier?</h4>
            <a href="/signup">Erstelle einen Account</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
