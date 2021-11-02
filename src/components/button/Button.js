import React from "react";
import s from "./Button.module.scss";

const Button = ({ onClick, text }) => {
  return (
    <button type="submit" className={s.Button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
