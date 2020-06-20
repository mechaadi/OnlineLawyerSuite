/* eslint-disable no-unused-vars */
import React from "react";
import login_styles from "./css/login.module.css";
import Button from "../Components/Buttons/Button";
import Input from "../Components/Inputs/Input";
import Nav from "../Components/Navbar/Navbar.js";
import app from "./css/app.module.css";
import { login } from "../api/user";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginState, setLoginState] = useState("Login");

  const history = useHistory();

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  async function handleLoginButton() {
    setError("");
    setLoginState("Wait..");
    if (!validateEmail(Email)) {
      setError((e) => [e + "Email is not valid"]);
      setLoginState("Login");
    } else if (Password === "" || Password === null || Password === undefined) {
      setError((e) => [e + "Password is required"]);
      setLoginState("Login");
    } else {
      const resp = await login(Email, Password);
      if (resp.status === 201) {
        history.push("/Profile");
      } else if (resp.data.status) {
        setError("Wrong credentials");
        setLoginState("Login");
      }
    }
  }

  function handleRegisterButton(event) {}

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div style={{ background: "#e5e5e5" }}>
      <div className={app.navbarhandler}>
        <Nav />
      </div>
      <div className={login_styles.body}>
        <div className={login_styles.login + " " + login_styles.flex_center}>
          <div className={login_styles.main + " " + login_styles.flex_center}>
            <div className={login_styles.header}>
              Welcome Back. {process.env.NEXT_APP_API_URL}
            </div>
            <div className={login_styles.subheader}>Login to get access.</div>
            <div className={login_styles.box + " " + login_styles.flex_center}>
              <div className={login_styles.form}>
                <div className={login_styles.box_title}>Login</div>
              </div>
              <div className={login_styles.formc}>
                <div className={login_styles.border}>
                  <Input
                    placeholder="Email Address"
                    onChange={handleEmailChange}
                    autoComplete={true}
                    type="email"
                  />
                </div>
                <div className={login_styles.border}>
                  <Input
                    placeholder="Enter Password"
                    onChange={handlePasswordChange}
                    autoComplete={false}
                    type="password"
                  />
                </div>
              </div>
              <div style={{ display: "flex", width: "100%" }}>
                <p
                  style={{ margin: 10, color: "red" }}
                  dangerouslySetInnerHTML={{ __html: error }}
                ></p>
              </div>
              <div className={login_styles.buttons}>
                {/* <Link to="/Lawyer" > */}
                <Button function={handleLoginButton} name={loginState} />
                {/*  </Link> */}
                <Link to="/Register">
                  <Button function={handleRegisterButton} name="Register" />
                </Link>
              </div>
            </div>
          </div>
          <div className={login_styles.membership}>
            <div className={login_styles.mem_left}>
              <div className={login_styles.mem_text}>
                Enjoy our exclusive service with uplaw Premium with high
                prioritiy acess and other benifits{" "}
              </div>
            </div>
            <div className={login_styles.mem_right}>
              {/* <Link to="/" > */}
              <Button name="Join Today" />
              {/*  </Link>  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
