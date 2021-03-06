import React from "react";
import style from "./RightSideBar.module.scss";
import {useSelector} from "react-redux";
import {dailySelector} from "../../redux/daily";
import {authSelectors} from "../../redux/authorization";
import moment from "moment";

const RightSideBar = ({date}) => {
    const customeDate = moment(date).format("YYYY-MM-DD");
    const notAllowedProducts = useSelector(authSelectors.getNotAllowedProducts);
    const day = useSelector((state) =>
        dailySelector.getRightSideBarRateByDay(state, customeDate)
    );

    const getInfo = (key) => {
        return day ? day.daySummary[key]?.toFixed() : 0;
    };

    return (
        <div className={style.sideBarContainer}>
            <div className={style.characteristicBox}>
                <p className={style.sideBarTitle}>
                    Сводка за {moment(date).format("DD-MM-YYYY")}
                </p>
                <ul className={style.sideBarList}>
                    <li className={style.sideBarItem}>
                        <p className={style.sideBarItem_text}>
                            Осталось
                            <span className={style.sideBarItem_span}>
                {getInfo("kcalLeft") || getInfo("dailyRate") || 0} ккал
              </span>
                        </p>
                    </li>
                    <li className={style.sideBarItem}>
                        <p className={style.sideBarItem_text}>
                            Употреблено
                            <span className={style.sideBarItem_span}>
                {getInfo("kcalConsumed") || 0} ккал
              </span>
                        </p>
                    </li>
                    <li className={style.sideBarItem}>
                        <p className={style.sideBarItem_text}>
                            Дневная норма
                            <span className={style.sideBarItem_span}>
                {getInfo("dailyRate") || 0} ккал
              </span>
                        </p>
                    </li>
                    <li className={style.sideBarItem}>
                        <p className={style.sideBarItem_text}>
                            % от нормы
                            <span className={style.sideBarItem_span}>
                {getInfo("percentsOfDailyRate") || 0} %
              </span>
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
