import React from "react";

const InputBox = ({
  label,
  id,
  type,
  name,
  value,
  handleChange,
  placeholder,
}) => {
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
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputBox;
