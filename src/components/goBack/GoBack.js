import React from "react";
import s from "../goBack/GoBack.module.scss";
import spriter from "../../images/modal/sprite.svg";
const GoBack = ({ onClick }) => {
  return (
    <div className={s.ModalExit}>
      <svg className={s.ModalCloseSvgBack} onClick={onClick}>
        <use href={spriter + "#exit"} />
      </svg>
    </div>
  );
};

export default GoBack;
