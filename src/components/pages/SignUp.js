import React, { useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

const SignUp = () => {
  const [switchBtn, setSwitchBtn] = useState(null);

  const switchSignUpForm = (e) => {
    let buttons = document.querySelectorAll(".switch-btn");
    buttons.forEach((button) => {
      let target = e.target;
      button.classList.remove("active");
      target.classList.add("active");
    });
  };
  return (
    <div className="container">
      <main className="form-wrapper">
        <h1 className="form-title">Sign Up</h1>
        <div className="button-group">
          <NavLink
            className={({ isActive }) =>
              isActive ? "switch-btn active" : "switch-btn"
            }
            to="/signup/student"
          >
            Student
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "switch-btn active" : "switch-btn"
            }
            to="/signup/agent"
          >
            Agent
          </NavLink>
        </div>

        <Outlet />

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
