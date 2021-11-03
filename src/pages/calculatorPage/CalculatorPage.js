import style from "./CalculatorPage.module.scss";
import DailyCaloriesForm from "../../components/dailyCaloriesForm/DailyCaloriesForm";
import RightSideBar from "../../components/rightSideBar/RightSideBar";
// import Container from "../../components/container/Container";

export default function CalculatorPage() {
  return (
    // <Container>
    <div className={style.calcPageWrapper}>
      <div className={style.calcPageContainer}>
        <DailyCaloriesForm />
      </div>
      <div className={style.RightSideBarContainer}>
        <RightSideBar />
      </div>
    </div>
    // </Container>
  );
}
