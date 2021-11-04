import React from "react";
import {useEffect} from "react";
import {createPortal} from "react-dom";
import s from "./Modal.module.scss";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({toggle, children}) => {
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
    const backdropClick = (event) => {
        if (event.currentTarget === event.target) {
            toggle();
        }
    };

    return createPortal(
        <div className={s.Overlay} onClick={backdropClick}>
            <div className={s.Modal}>{children}</div>
        </div>,
        modalRoot
    );
};

export default Modal;
