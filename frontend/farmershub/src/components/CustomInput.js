import React from "react";

function CustomInput({
  type = "text",
  id,
  value,
  onChange,
  className = "",
  placeholder,
  required = false,
}) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className={`w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 ${className}`}
      placeholder={placeholder}
      required={required}
    />
  );
}

export default CustomInput;
