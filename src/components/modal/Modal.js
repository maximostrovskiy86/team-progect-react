import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.scss";
import sprite from "../../images/modal/close.svg";
import spriter from "../../images/modal/sprite.svg";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ toggle, children, isRedirect = false }) => {
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      toggle();
    }
  };
  const backdropClick = (event) => {
    if (event.currentTarget === event.target) {
      toggle();
    }
  };

  const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 321px)" });
  const orMobile = useMediaQuery({ query: "(max-width: 320px)" });

  const redirectToHome = () => history.push("/register");

  const submit = () => {
    toggle();
    isRedirect && redirectToHome();
  };
  return createPortal(
    <div className={s.Overlay} onClick={backdropClick}>
      <div className={s.Modal}>
        {isTabletOrDesktop && (
          <svg className={s.ModalCloseSvg} onClick={toggle}>
            <use href={sprite + "#icon-close"} />
          </svg>
        )}
        {orMobile && (
          <div className={s.ModalExit}>
            <svg className={s.ModalCloseSvgBack} onClick={toggle}>
              <use href={spriter + "#exit"} />
            </svg>
          </div>
        )}
        {children}
        <button onClick={submit} type="submit" className={s.button}>
          Начать худеть
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
