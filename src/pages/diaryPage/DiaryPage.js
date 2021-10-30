import {useEffect, useState} from "react";
import style from "./DiaryPage.module.scss";
import {dailyOperations} from "../../redux/daily";
import DiaryAddProductForm from "../../components/diaryAddProductForm/DiaryAddProductForm";
import DiaryDateСalendar from "../../components/diaryDateСalendar/DiaryDateСalendar";
import RightSideBar from "../../components/rightSideBar/RightSideBar";
import {useDispatch} from "react-redux";
// import axios from "axios";


export default function DiaryPage() {
    const dispatch = useDispatch();
    const [date, setDate] = useState('')
    console.log(date)

    useEffect(() => {
        dispatch(dailyOperations.fetchDayInfo({date: date}))
        // axios
        //     .post('https://slimmom-backend.goit.global/day/info', {date: date})
        //     .then((response) => {
        //         console.log(response.data);
        //         console.log('Date------------------------')
        //     })

    }, [date]);

    return (
        <div className={style.diaryPageWraper}>
            <div>
                <DiaryDateСalendar date={date} selectDate={setDate}/>
                <DiaryAddProductForm/>
            </div>
            <RightSideBar date={date}/>
        </div>
    );
}
