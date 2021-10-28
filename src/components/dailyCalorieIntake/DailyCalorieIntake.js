import React from "react";
import s from "./DailyCalorieIntake.module.scss";

// <<<<<<< HEAD
const DailyCalorieIntake = ({ result }) => {
  return (
    <>
      <h2 className={s.CalorieTitle}>
        Ваша рекомендуемая суточная норма калорий составляет
      </h2>
      <div className={s.Calorie}>
        <p className={s.CalorieValue}>{result.dailyRate}Ккал</p>
        <hr className={s.Line} />
        <h3 className={s.CalorieListTitle}>
          Продукты, которые вам не рекомендуется употреблять
        </h3>
        <ol className={s.CalorieList}>
          {result.notAllowedProducts?.slice(0, 8).map((item) => (
            <li className={s.CalorieItem} key={item}>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
  // =======
  // const DailyCalorieIntake = ({result}) => {
  //     return (
  //         <>
  //             <h2>Ваша рекомендуемая суточная норма калорий составляет</h2>
  //             <p>{result.dailyRate}Ккал</p>
  //             <ul>
  //                 {result.notAllowedProducts?.slice(0, 8).map((item) => (
  //                     <li key={item}>{item}</li>
  //                 ))}
  //             </ul>
  //         </>
  //     );
  // >>>>>>> 959a5e99388ec5d11cf5f03975a119b534a78b36
};

export default DailyCalorieIntake;
