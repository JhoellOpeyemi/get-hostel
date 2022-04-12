import React from "react";

const RadioInput = ({ name, value, id, label }) => {
  return (
    <div className="radio-group">
      <input
        type="radio"
        name={name}
        value={value}
        className="radio-input"
        id={id}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioInput;
