import React from "react";
import DatePicker from "react-datepicker";
import {ReactComponent as CalendarLogo} from "../../images/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DiaryDateСalendar.module.scss";

const DiaryDateСalendar = ({selectDate, date}) => {
    return (
        <div className={styles.сalendar}>
            <label>
                <DatePicker
                    className={styles.datePicker}
                    selected={date}
                    dateFormat="dd.MM.yyyy"
                    onChange={(date) => selectDate(date)}
                />
                <CalendarLogo className={styles.datePickerLogo}/>
            </label>
        </div>
    );
};

export default DiaryDateСalendar;
