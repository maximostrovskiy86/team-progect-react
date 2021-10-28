import axios from "axios";
import { useEffect } from "react";
import DailyCaloriesForm from "../../components/dailyCaloriesForm/DailyCaloriesForm";
import RightSideBar from "../../components/rightSideBar/RightSideBar";
import style from "./CalculatorPage.module.scss";

export default function CalculatorPage() {
  useEffect(() => {
    axios.get(`https://slimmom-backend.goit.global/user`).then((data) => {
      console.log(data);
      console.log("useEffect");
    });
  }, []);

  return (
    <div className={style.calculatorPageWraper}>
      <DailyCaloriesForm />
      <RightSideBar />
    </div>
  );
}
