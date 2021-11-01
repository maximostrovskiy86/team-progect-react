import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import s from "./NavModale.module.scss";

const modalRoot = document.querySelector("#navmodal-root");

const NavModale = ({ toggle }) => {
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

  return createPortal(
    <div className={s.Overlay}>
      <div className={s.NavModale}>
        <NavLink
          onClick={toggle}
          className={s.navLink}
          activeClassName={s.activeNav}
          to="/diary"
          exact
        >
          Дневник
        </NavLink>
        <NavLink
          onClick={toggle}
          className={s.navLink}
          activeClassName={s.activeNav}
          to="/calculator"
          exact
        >
          Калькулятор
        </NavLink>
      </div>
    </div>,
    modalRoot
  );
};

export default NavModale;
