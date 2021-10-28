import React from "react";
import s from "./DailyCalorieIntake.module.scss";

const DailyCalorieIntake = ({ result }) => {
  return (
    <>
      <h2 className={s.CalorieTitle}>
        Ваша рекомендуемая суточная норма калорий составляет
      </h2>
      <div className={s.Calorie}>
        <p className={s.CalorieValue}>2800</p>
        <hr className={s.Line} />
        <h3 className={s.CalorieListTitle}>
          Продукты, которые вам не рекомендуется употреблять
        </h3>
        <ol className={s.CalorieList}>
          {result.slice(0, 8).map((item) => (
            <li className={s.CalorieItem} key={item}>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default DailyCalorieIntake;
