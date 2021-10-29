import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useHistory } from "react-router";
import s from "./NavModale.module.scss";

const modalRoot = document.querySelector("#navmodal-root");

const NavModale = ({ toggle }) => {
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });
  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      toggle();
    }
  };

  const redirectToCalculator = () => history.push("/calculator");
  const redirectToDiary = () => history.push("/diary");

  return createPortal(
    <div className={s.Overlay}>
      <div className={s.NavModale}>
        <ul className={s.NavModaleMenu}>
          <li className={s.NavModalelist} onClick={redirectToDiary}>
            Дневник
          </li>
          <li className={s.NavModalelist} onClick={redirectToCalculator}>
            Калькулятор
          </li>
        </ul>
      </div>
    </div>,
    modalRoot
  );
};

export default NavModale;
