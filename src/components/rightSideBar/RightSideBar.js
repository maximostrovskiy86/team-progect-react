import React from "react";
import style from "./RightSideBar.module.scss";
import { useSelector } from "react-redux";
import {dailySelector} from "../../redux/daily";
import {authSelectors} from "../../redux/authorization";
import moment from "moment";

const RightSideBar = ({date}) => {
// const RightSideBar = ({ date }) => {
  const customeDate = moment(date).format("YYYY-MM-DD");
  const notAllowedProducts = useSelector(authSelectors.getNotAllowedProducts);
  const dailyRate = useSelector(dailySelector.getDailyRate);
  const kcalLeft = useSelector(dailySelector.getDailyKcalLeft);
  // const date = useSelector(dailySelector.getDate);
  const day = useSelector(state => dailySelector.getDailyRateByDay(state, customeDate));
  console.log(day)

  const getInfo = (key) => {
    return day ? day.daySummary[key] : 0;
  }

  return (
      <div className={style.sideBarContainer}>
        <div className={style.characteristicBox}>
          <p className={style.sideBarTitle}>Сводка за {moment(date).format("DD-MM-YYYY")}</p>
          <ul className={style.sideBarList}>
            <li className={style.sideBarItem}>
              <p className={style.sideBarItem_text}>
                Осталось
                <span className={style.sideBarItem_span}>{getInfo('kcalLeft')}ккал</span>
              </p>
            </li>
            <li className={style.sideBarItem}>
              <p className={style.sideBarItem_text}>
                Употреблено
                <span className={style.sideBarItem_span}>{getInfo('kcalConsumed')} ккал</span>
              </p>
            </li>
            <li className={style.sideBarItem}>
              <p className={style.sideBarItem_text}>
                Дневная норма
                <span className={style.sideBarItem_span}>{getInfo('dailyRate')} ккал</span>
              </p>
            </li>
            <li className={style.sideBarItem}>
              <p className={style.sideBarItem_text}>
                n% от нормы
                <span className={style.sideBarItem_span}>{getInfo('percentsOfDailyRate')} ккал</span>
              </p>
            </li>
          </ul>
        </div>

        <div className={style.notAllowedProductsBox}>
          <p className={style.notAllowedProductsTitle}>
            Нерекомендуемые продукты
          </p>
          <p className={style.notAllowedProductsItems}>
            {notAllowedProducts.slice(0, 5).join(", ")}
          </p>
        </div>
      </div>
  );
};

export default RightSideBar;