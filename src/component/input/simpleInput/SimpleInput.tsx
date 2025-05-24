import React from "react";
import style from "./SimpleInput.module.css";

const SimpleInput = () => {
  return (
    <div>
      <input type="text" className={style.simpleInput}  placeholder="🔍 Search here"/>
    </div>
  );
};

export default SimpleInput;
