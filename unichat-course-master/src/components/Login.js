import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";
import { auth } from "../firebase";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to DateRoulatte</h2>
        <div className="login-button google">
          <GoogleOutlined style={{ marginRight: "10px" }} />
          SignIn with Google
        </div>
        <br /> <br />
        <div className="login-button facebook">
          <FacebookOutlined style={{ marginRight: "10px" }} />
          SignIn with Facebooke
        </div>
      </div>
    </div>
  );
};

export default Login;
