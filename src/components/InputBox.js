import React from "react";

const InputBox = ({ label, id, type, name, value, handleChange }) => {
  return (
    <div className="input-group">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        className="input"
      />
    </div>
  );
};

export default InputBox;
