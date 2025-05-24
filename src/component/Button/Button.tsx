'use client'
import React, { useState } from "react";
import style from "./Button.module.css";

const Button = () => {
    const [rippleStyle, setRippleStyle] = useState<any>();
    const [isRippling, setIsRippling] = useState(false);
  
    const createRipple = (event:any) => {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;
  
      setRippleStyle({
        top: y + "px",
        left: x + "px",
        width: size + "px",
        height: size + "px",
      });
  
      setIsRippling(true);
  
      // Remove the ripple after animation
      setTimeout(() => {
        setIsRippling(false);
      }, 600);
    };
  return (
    <div className={style.buttonui}>
      {" "}
      <button className={style.buttonStyle}>Button</button>
      <button className={style.buttonColor}> button</button>
      <button className={style.ripplebutton} onClick={createRipple}>
      {isRippling && <span className={style.ripple} style={rippleStyle} />}
      Click Me
    </button>
    </div>
  );
};

export default Button;
