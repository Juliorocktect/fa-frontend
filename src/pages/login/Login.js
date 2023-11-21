import React from "react";
import "./Login.css";
import w from "./w.svg";

function Login() {
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
                  placeholder="Email"
                />
              </div>
              <div className="passwd-container">
                <label htmlFor="Passwort">Passwort</label>
                <input
                  type="password"
                  className="login-input"
                  placeholder="Passwort"
                />
              </div>
              <div className="submit-button-container">
                <button className="sign-in-button">Anmelden</button>
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
