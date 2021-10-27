import { useEffect } from "react";
import { createPortal } from "react-dom";
// import PropTypes from "prop-types";
import s from "./Modal.module.scss";
import sprite from "../../images/modal/close.svg";
import spriter from "../../images/modal/sprite.svg";
import { useMediaQuery } from "react-responsive";

const modalRoot = document.querySelector("#modal-root");
// const [onClose, setOnClose] = useState(false);
// const toggleModal = () => setOnClose((prev) => !prev);

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      onClose();
    }
  };
  const backdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 321px)" });
  const orMobile = useMediaQuery({ query: "(max-width: 320px)" });

  return createPortal(
    <div className={s.Overlay} onClick={backdropClick}>
      <div className={s.Modal}>
        {isTabletOrDesktop && (
          <svg className={s.ModalCloseSvg} onClick={onClose}>
            <use href={sprite + "#icon-close"} />
          </svg>
        )}
        {orMobile && (
          <div className={s.ModalExit}>
            <svg className={s.ModalCloseSvgBack} onClick={onClose}>
              <use href={spriter + "#exit"} />
            </svg>
          </div>
        )}

        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

// Modal.propTypes = {
//   onClose: PropTypes.func,
// };
