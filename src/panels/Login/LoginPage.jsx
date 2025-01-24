import React, { useState } from "react";
import "./LoginPage.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase.js";
import spinner from "../../assets/netflix_spinner.gif";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LoginPage = () => {
  const [signState, setSignState] = useState("Sign In");

  // storing form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Properly call the hook here
  const [loading, setLoading] = useState(false);

  // fucntion for user authentication
  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="spinner">
      <img src={spinner} alt="" />
    </div>
  ) : (
    <div className="login">
      <img
        onClick={() => {
          navigate("/");
        }}
        src={logo}
        className="login-logo"
        alt="logo"
        style={{ cursor: "pointer" }}
      />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Name . . ."
            />
          ) : (
            <></>
          )}

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email . . ."
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password . . ."
          />
          <button onClick={user_auth} type="submit">
            {signState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remeber Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        {signState === "Sign In" ? (
          <p className="forgot-pass">Forgot Password?</p>
        ) : (
          <></>
        )}
        <div className="form-switch">
          {signState === "Sign Up" ? (
            <p>
              Already have account?
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In
              </span>
            </p>
          ) : (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
