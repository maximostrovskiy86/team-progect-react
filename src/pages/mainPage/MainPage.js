import style from "./MainPage.module.css";
import React, { useState } from "react";
import DailyCaloriesForm from "../../components/dailyCaloriesForm/DailyCaloriesForm";
import DailyCalorieIntake from "../../components/dailyCalorieIntake/DailyCalorieIntake";
import Modal from "../../components/modal/Modal";

export default function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState([]);
  console.log(result);

  const toggle = () => setIsOpen((prev) => !prev);
  const setValue = (value) => {
    setResult(value);
  };

  return (
    <>
      <main className={style.main}>
        <DailyCaloriesForm toggle={toggle} setValue={setValue} />
        {isOpen && (
          <Modal toggle={toggle}>
            <DailyCalorieIntake result={result} />
          </Modal>
        )}
      </main>
    </>
  );
}
