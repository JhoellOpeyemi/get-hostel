import React from "react";
import InputBox from "../InputBox";
import RadioInput from "../RadioInput";

const StudentSignUp = ({ handleSubmit }) => {
  return (
    <div>
      <form className="form" onSubmit={(e) => handleSubmit(e, "signup")}>
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

        <div className="input-group">
          <p className="label">Gender</p>
          <div className="radio-group-wrapper">
            <RadioInput name="gender" value="male" id="male" label="Male" />
            <RadioInput
              name="gender"
              value="female"
              id="female"
              label="Female"
            />
            <RadioInput
              name="gender"
              value="others"
              id="others"
              label="Others"
            />
          </div>
        </div>

        <InputBox
          label="Phone number"
          type="number"
          name="phone-number"
          id="phone-number-input"
        />
        <InputBox
          label="Password"
          type="password"
          name="password"
          id="password-input"
        />
        <InputBox
          label="Confirm password"
          type="password"
          name="password"
          id="confirm-password-input"
        />
        <button type="submit" className="form-btn">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default StudentSignUp;
