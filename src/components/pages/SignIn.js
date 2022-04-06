import React, { useState } from "react";
import { Link } from "react-router-dom";

import InputBox from "../InputBox";

const SignIn = () => {
  const [signin, setSignin] = useState({ email: "", password: "" });

  const handleEmail = (e) => {
    setSignin({ ...signin, email: e.target.value });
  };
  const handlePassword = (e) => {
    setSignin({ ...signin, password: e.target.value });
  };

  return (
    <div className="container">
      <main className="form-wrapper">
        <form className="form">
          <h1 className="form-title">Sign In</h1>
          <InputBox
            label="Email"
            type="email"
            name="email"
            id="email-input"
            handleChange={handleEmail}
          />
          <InputBox
            label="Password"
            type="password"
            name="password"
            id="password-input"
            handleChange={handlePassword}
          />
          <button type="submit" className="form-btn">
            Sign in
          </button>
        </form>
        <p className="account-prompt">
          Don't have an account?{" "}
          <Link to="/signup" className="account-prompt-link">
            Sign Up
          </Link>
        </p>
      </main>
    </div>
  );
};

export default SignIn;
