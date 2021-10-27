import DailyCaloriesForm from "../../components/dailyCaloriesForm/DailyCaloriesForm";
import style from "./MainPage.module.css";
export default function MainPage() {
  return (
    <>
      <main className={style.main}>
        <DailyCaloriesForm />
      </main>
    </>
  );
}
