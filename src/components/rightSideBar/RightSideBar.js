import React from "react";
import style from "./RightSideBar.module.scss";

const RightSideBar = ({
  data,
  percentsOfDailyRate,
  dailyRate,
  kcalConsumed,
  kcalLeft,
  notAllowedProducts,
}) => {
  return (
    <>
      <p className={style.sideBarTitle}>Сводка за {data}</p>
      <ul className={style.sideBarList}>
        <li className={style.sideBarItem}>Осталось{kcalLeft}</li>
        <li className={style.sideBarItem}>Употреблено{kcalConsumed}</li>
        <li className={style.sideBarItem}>Дневная норма{dailyRate}</li>
        <li className={style.sideBarItem}>n% от нормы{percentsOfDailyRate}</li>
      </ul>
      <p>Нерекомендуемые продукты</p>
      <p>{notAllowedProducts.join(",")}</p>
      {/* {notAllowedProducts.map((product) => (
        <span>{product},</span>
      ))} */}
    </>
  );
};

export default RightSideBar;
