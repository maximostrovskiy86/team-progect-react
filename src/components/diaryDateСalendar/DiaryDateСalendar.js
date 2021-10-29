import React, { useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DiaryDateСalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const customeDate = moment(startDate).format("YYYY-MM-DD");
  console.log(customeDate);

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
