import React from "react";
import style from "./RightSideBar.module.scss";
import {useSelector} from "react-redux";
import {dailyRateSelector} from "../../redux/user";

const RightSideBar = ({date}) => {
    const dailyRate = useSelector((state) =>dailyRateSelector.getDailyRate(state, date));
    // const date = useSelector(dailyRateSelector.getDate);
    const notAllowedProducts = useSelector(dailyRateSelector.getNotAllowedProducts);

    return (
        <div className={style.sideBarContainer}>
            <div className={style.characteristicBox}>
                <p className={style.sideBarTitle}>Сводка за {date}</p>
                <ul className={style.sideBarList}>
                    <li className={style.sideBarItem}>
                        <p className={style.sideBarItem_text}>
                            Осталось
                            <span className={style.sideBarItem_span}>0000 ккал</span>
                        </p>
                    </li>
                    <li className={style.sideBarItem}>
                        <p className={style.sideBarItem_text}>
                            Употреблено
                            <span className={style.sideBarItem_span}>
                0000 ккал
              </span>
                        </p>
                    </li>
                    <li className={style.sideBarItem}>
                        <p className={style.sideBarItem_text}>
                            Дневная норма
                            <span className={style.sideBarItem_span}>
                {dailyRate} ккал
              </span>
                        </p>
                    </li>
                    <li className={style.sideBarItem}>
                        <p className={style.sideBarItem_text}>
                            n% от нормы
                            <span className={style.sideBarItem_span}>
                0000 ккал
              </span>
                        </p>
                    </li>
                </ul>
            </div>

            <div className={style.notAllowedProductsBox}>
                <p className={style.notAllowedProductsTitle}>
                    Нерекомендуемые продукты
                </p>
                <p>{notAllowedProducts.slice(0, 5).join(", ")}</p>
            </div>
        </div>
    );
};

export default RightSideBar;
