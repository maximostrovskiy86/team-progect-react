import { useState } from "react";
import style from "./DiaryPage.module.scss";

import DiaryAddProductForm from "../../components/diaryAddProductForm/DiaryAddProductForm";
import DiaryDateСalendar from "../../components/diaryDateСalendar/DiaryDateСalendar";
import RightSideBar from "../../components/rightSideBar/RightSideBar";
import { useDispatch } from "react-redux";
import Modal from "../../components/modal/Modal";
import Button from "../../components/button/Button";
import { useMediaQuery } from "react-responsive";
import GoBack from "../../components/goBack/GoBack";
import Close from "../../components/closeIcon/Close";

export default function DiaryPage() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  // const toggleform = () => setIsOpen((prev) => !prev);
  // console.log(date);
  const orMobile = useMediaQuery({ query: "(max-width: 320px)" });
  // useEffect(() => {
  //   dispatch(dailyOperations.fetchDayInfo({ date: date }));
  //   // axios
  //   //     .post('https://slimmom-backend.goit.global/day/info', {date: date})
  //   //     .then((response) => {
  //   //         console.log(response.data);
  //   //         console.log('Date------------------------')
  //   //     })
  // }, [date]);
  // const orMobile = useMediaQuery({ query: "(max-width: 320px)" });
  return (
    <div className={style.diaryPageWraper}>
      <div className={style.dairyFormContainer}>
        <DiaryDateСalendar date={date} selectDate={setDate} />
        {!orMobile && <DiaryAddProductForm date={date} />}
      </div>
      <div className={style.RightSideBarContainer}>
        <RightSideBar date={date} />
      </div>
      {!isOpen && (
        <button
          type="submit"
          onClick={toggle}
          className={style.diaryProductFormBtn}
        >
          +
        </button>
      )}
      {isOpen && (
        <Modal toggle={toggle}>
          {orMobile ? <GoBack onClick={toggle} /> : <Close toggle={toggle} />}
          <DiaryAddProductForm
            orMobile={orMobile}
            isOpen={isOpen}
            toggle={toggle}
          />
          <Button onClick={() => console.log("hello")} text="Добавить"></Button>
        </Modal>
      )}
    </div>
  );
}
