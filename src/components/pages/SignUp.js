import React from "react";
import { Link } from "react-router-dom";

import InputBox from "../InputBox";

const SignUp = ({ handleSubmit }) => {
  return (
    <div className="container">
      <main className="form-wrapper">
        <form className="form" onSubmit={(e) => handleSubmit(e, "signup")}>
          <h1 className="form-title">Sign Up</h1>
          <div className="input-section">
            <InputBox
              label="First name"
              type="text"
              name="first-name"
              id="first-name-input"
            />
            <InputBox
              label="Last name"
              type="text"
              name="last-name"
              id="last-name-input"
            />
          </div>
          <InputBox label="Email" type="email" name="email" id="email-input" />
          <InputBox
            label="Password"
            type="password"
            name="password"
            id="password-input"
          />
          <button type="submit" className="form-btn">
            Sign up
          </button>
        </form>
        <p className="account-prompt">
          Already have an account?{" "}
          <Link to="/signin" className="account-prompt-link">
            Sign In
          </Link>
        </p>
      </main>
    </div>
  );
};

export default SignUp;
