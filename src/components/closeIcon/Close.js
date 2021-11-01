import React from "react";
import s from "./Close.module.scss";
import sprite from "../../images/modal/close.svg";

const Close = ({ toggle }) => {
  return (
    <svg className={s.ModalCloseSvg} onClick={toggle}>
      <use href={sprite + "#icon-close"} />
    </svg>
  );
};

export default Close;
