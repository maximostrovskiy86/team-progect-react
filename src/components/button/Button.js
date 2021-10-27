import React from "react";
import s from "./Button.module.scss";

const Button = ({ onHandleClick, text }) => {
  return (
    <button type="button" className={s.Button} onClick={onHandleClick}>
      {text}
    </button>
  );
};

export default Button;
