import { Link } from "react-router-dom";

import InputBox from "../InputBox";

const SignIn = ({ handleSubmit }) => {
  return (
    <div className="container">
      <main className="form-wrapper">
        <h1 className="form-title">Sign In</h1>
        <form className="form" onSubmit={(e) => handleSubmit(e, "signin")}>
          <InputBox label="Email" type="email" name="email" id="email-input" />
          <InputBox
            label="Password"
            type="password"
            name="password"
            id="password-input"
          />
          <button type="submit" className="form-btn">
            Sign in
          </button>
        </form>
        <p className="account-prompt">
          Don't have an account?{" "}
          <Link to="/signup/student" className="account-prompt-link">
            Sign Up
          </Link>
        </p>
      </main>
    </div>
  );
};

export default SignIn;
