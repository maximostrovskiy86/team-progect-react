import React from "react";
import sprite from "../../images/modal/burger.svg";
import s from "./Burger.module.scss";

const Burger = ({toggle}) => {
    return (
        <svg className={s.Burger} onClick={toggle}>
            <use href={sprite + "#icon-menu"}/>
        </svg>
    );
};

export default Burger;
