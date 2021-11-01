import React, { useState, useEffect } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import { ReactComponent as CalendarLogo } from "../../images/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DiaryDateСalendar.module.scss";
// import {dailyOperations} from "../../redux/daily";
// import {useDispatch} from "react-redux";

const DiaryDateСalendar = ({ selectDate }) => {
  const [startDate, setStartDate] = useState(new Date());
  const customeDate = moment(startDate).format("YYYY-MM-DD");
  selectDate(customeDate);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(dailyOperations.fetchDayInfo({date: customeDate}))
  // }, [startDate]);

  return (
    <div className={styles.сalendar}>
      <label>
        <DatePicker
          className={styles.datePicker}
          selected={startDate}
          dateFormat="dd.MM.yyyy"
          onChange={(date) => setStartDate(date)}
        />
        <CalendarLogo className={styles.datePickerLogo} />
      </label>
    </div>
  );
};

export default DiaryDateСalendar;
