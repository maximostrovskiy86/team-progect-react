import { useState} from "react";
import style from "./DiaryPage.module.scss";
// import {dailyOperations} from "../../redux/daily";
import DiaryAddProductForm from "../../components/diaryAddProductForm/DiaryAddProductForm";
import DiaryDateСalendar from "../../components/diaryDateСalendar/DiaryDateСalendar";
import RightSideBar from "../../components/rightSideBar/RightSideBar";
import DiaryProductsList from "../../components/diaryProductsList/DiaryProductsList";

export default function DiaryPage() {
    const [date, setDate] = useState(new Date());
    console.log(date);

    return (
        <div className={style.diaryPageWraper}>
            <div className={style.products}>
                <div className={style.dairyFormContainer}>
                    <DiaryDateСalendar date={date} selectDate={setDate}/>
                    <DiaryAddProductForm date={date}/>
                </div>
                <DiaryProductsList date={date}/>
            </div>

            <div className={style.RightSideBarContainer}>
                <RightSideBar date={date}/>
            </div>
        </div>
    );
}
