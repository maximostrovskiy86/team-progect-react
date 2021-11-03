import { useState } from "react";
import style from "./DiaryPage.module.scss";

import DiaryAddProductForm from "../../components/diaryAddProductForm/DiaryAddProductForm";
import DiaryDateСalendar from "../../components/diaryDateСalendar/DiaryDateСalendar";
import RightSideBar from "../../components/rightSideBar/RightSideBar";
// import { useDispatch } from "react-redux";
import Modal from "../../components/modal/Modal";
import Button from "../../components/button/Button";
import { useMediaQuery } from "react-responsive";
import GoBack from "../../components/goBack/GoBack";
import Close from "../../components/closeIcon/Close";
import Menu from "../../components/menu/Menu";

export default function DiaryPage() {
  const [date, setDate] = useState(new Date());

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const orMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // const orDesk = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className={style.diaryPageWraper}>
      <div className={style.dairyFormContainer}>
        <DiaryDateСalendar date={date} selectDate={setDate} />
        {!orMobile && <DiaryAddProductForm date={date} />}
      </div>
      <div className={style.RightSideBarContainer}>
        <RightSideBar date={date} />
      </div>
      {!isOpen && orMobile && (
        <button
          type="submit"
          onClick={toggle}
          className={style.diaryProductFormBtnAdd}
        >
          +
        </button>
      )}
      {isOpen && orMobile && (
        <Modal toggle={toggle}>
          {orMobile ? (
            <div className={style.menuBack}>
              <GoBack onClick={toggle} />
              <Menu />
            </div>
          ) : (
            <Close toggle={toggle} />
          )}
          <DiaryAddProductForm
            orMobile={orMobile}
            isOpen={isOpen}
            toggle={toggle}
          />
          <Button
            onClick={() => console.log("Add product")}
            text="Добавить"
          ></Button>
        </Modal>
      )}
    </div>
  );
}
