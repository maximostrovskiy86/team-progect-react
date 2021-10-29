import DiaryAddProductForm from "../../components/diaryAddProductForm/DiaryAddProductForm";
import DiaryDateСalendar from "../../components/diaryDateСalendar/DiaryDateСalendar";
import RightSideBar from "../../components/rightSideBar/RightSideBar";
import style from "./DiaryPage.module.scss";

export default function DiaryPage() {
  return (
    <div className={style.diaryPageWraper}>
      <div>
        <DiaryDateСalendar />
        <DiaryAddProductForm />
      </div>
      <RightSideBar />
    </div>
  );
}
