// import React, { useEffect } from "react";
import style from "./RightSideBar.module.scss";
// import axios from "axios";

const RightSideBar = ({
  data,
  percentsOfDailyRate,
  dailyRate,
  kcalConsumed,
  kcalLeft,
  notAllowedProducts,
}) => {
  return (
    <div className={style.sideBarContainer}>
      <div className={style.characteristicBox}>
        <p className={style.sideBarTitle}>Сводка за {data}</p>
        <ul className={style.sideBarList}>
          <li className={style.sideBarItem}>
            <p className={style.sideBarItem_text}>
              Осталось
              <span className={style.sideBarItem_span}>{kcalLeft}000 ккал</span>
            </p>
          </li>
          <li className={style.sideBarItem}>
            <p className={style.sideBarItem_text}>
              Употреблено
              <span className={style.sideBarItem_span}>
                {kcalConsumed}000 ккал
              </span>
            </p>
          </li>
          <li className={style.sideBarItem}>
            <p className={style.sideBarItem_text}>
              Дневная норма
              <span className={style.sideBarItem_span}>
                {dailyRate}000 ккал
              </span>
            </p>
          </li>
          <li className={style.sideBarItem}>
            <p className={style.sideBarItem_text}>
              n% от нормы
              <span className={style.sideBarItem_span}>
                {percentsOfDailyRate}000 ккал
              </span>
            </p>
          </li>
        </ul>
      </div>

      <div className={style.notAllowedProductsBox}>
        <p className={style.notAllowedProductsTitle}>
          Нерекомендуемые продукты
        </p>
        {/* <p>{notAllowedProducts.join(",")}</p> */}
        {/* {notAllowedProducts.map((product) => (
        <span>{product},</span>
      ))} */}
      </div>
    </div>
  );
};

export default RightSideBar;
