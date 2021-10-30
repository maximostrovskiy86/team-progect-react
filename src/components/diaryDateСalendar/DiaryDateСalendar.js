import React, { useState, useEffect } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import {dailyOperations} from "../../redux/daily";
// import {useDispatch} from "react-redux";

const DiaryDateСalendar = ({selectDate}) => {
  const [startDate, setStartDate] = useState(new Date());
  const customeDate = moment(startDate).format("YYYY-MM-DD");
  selectDate(customeDate);
  // selectDate(startDate);
  // const dispatch = useDispatch();
  console.log(customeDate);

    // useEffect(() => {
    //     dispatch(dailyOperations.fetchDayInfo({date: customeDate}))
    // }, [startDate]);


  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default DiaryDateСalendar;
