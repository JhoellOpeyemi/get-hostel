import { Link } from "react-router-dom";

import InputBox from "../InputBox";

const SignIn = ({
  signin,
  setSignin,
  handleEmail,
  handlePassword,
  handleSubmit,
  profile,
}) => {
  return (
    <div className="container">
      <main className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
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
          <Link
            onClick={handleSubmit}
            to={profile && "/profile"}
            type="submit"
            className="form-btn"
          >
            Sign in
          </Link>
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
