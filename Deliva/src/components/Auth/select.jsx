import React from "react";
import { select } from "tailwindcss";

// const Select = ({ options, value, onChange }) => {
//   const handleChange = (event) => {
//     onChange(event.target.value);
//   };





function Select () {
    
const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
const value = "Option 1";

  return (
    <select
      className={select}
      value={value}
      onChange={handleChange}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;