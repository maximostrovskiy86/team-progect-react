import RightSideBar from "../../components/rightSideBar/RightSideBar";
import style from "./DiaryPage.module.scss";

export default function DiaryPage() {
  return (
    <div className={style.diaryPageWraper}>
      <h2> DiaryPage</h2>
      <RightSideBar />
    </div>
  );
}
