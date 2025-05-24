"use client";
import React, { useState } from "react";
import style from "./Select.module.css";

const Select = () => {
  const [age, setAge] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (age === "") {
      setIsFocused(false);
    }
  };
  return (
    <div className={style.selectcontainer}>
      <div
        className={`${style.selectwrapper} ${
          isFocused || age ? style.focused : ""
        }`}
      >
        <label htmlFor="age">Age</label>
        <select
          id="age"
          value={age == '' ? "":age}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <option value="" hidden></option>
          <option value="">none</option>
          <option value="10">Ten</option>
          <option value="20">Twenty</option>
          <option value="30">Thirty</option>
        </select>
      </div>
    </div>
  );
};

export default Select;
