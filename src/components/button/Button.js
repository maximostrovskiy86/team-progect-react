import React from "react";
import s from "./Button.module.scss";

const Button = ({ toggle, text }) => {
  return (
    <button type="submit" className={s.Button} onClick={toggle}>
      {text}
    </button>
  );
};

export default Button;
