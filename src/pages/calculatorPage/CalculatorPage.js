import style from "./CalculatorPage.module.scss";
import DailyCaloriesForm from "../../components/dailyCaloriesForm/DailyCaloriesForm";
import RightSideBar from "../../components/rightSideBar/RightSideBar";

export default function CalculatorPage() {
    return (
        <div className={style.calcPageWrapper}>
            <DailyCaloriesForm/>
            <RightSideBar/>
        </div>
    );
}
