import React from "react";

function CustomSelect({ id, value, onChange, className = "", options }) {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className={`w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default CustomSelect;
