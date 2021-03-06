import React from "react";
import {useSelector} from "react-redux";
import {dailySelector} from "../../redux/daily";
import moment from "moment";
import DiaryProductsListItem from "../DiaryProductsListItem/DiaryProductsListItem";
import {dailyOperations} from "../../redux/daily";
import {useDispatch} from "react-redux";
import style from "./DiaryProductsList.module.scss";

const DiaryProductsList = ({date}) => {
    const customeDate = moment(date).format("YYYY-MM-DD");
    const day = useSelector((state) =>
        dailySelector.getDailyRateByDay(state, customeDate)
    );

    const dispatch = useDispatch();

    const deleteProductByDay = (id) => {
        const deleteProduct = {
            eatenProductId: id,
            dayId: day._id || day.id,
        };

        dispatch(dailyOperations.deleteProductByDay(deleteProduct));
    };

    return (
        <>
            {day ? (
                <ul className={style.DiaryProductsList}>
                    {day.eatenProducts.map((product) => (
                        <DiaryProductsListItem
                            key={product.id}
                            title={product.title}
                            kcal={product.kcal}
                            weight={product.weight}
                            onDelete={deleteProductByDay}
                            id={product.id}
                        />
                    ))}
                </ul>
            ) : (
                []
            )}
        </>
    );
};

export default DiaryProductsList;
