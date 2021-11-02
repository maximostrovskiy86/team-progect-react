import React from "react";
import {useSelector} from "react-redux";
import {dailySelector} from "../../redux/daily";
import moment from "moment";
import DiaryProductsListItem from "../DiaryProductsListItem/DiaryProductsListItem";

const DiaryProductsList = ({date}) => {

    const customeDate = moment(date).format("YYYY-MM-DD");
    const day = useSelector(state => dailySelector.getDailyRateByDay(state, customeDate));
    console.log(day ? day.eatenProducts : [])

    return (
        <>
            {day ?
                (<ul>
                    {day.eatenProducts.map(product => (
                        <DiaryProductsListItem
                            key={product.id}
                            title={product.title}
                            kcal={product.kcal}
                            weight={product.weight}
                        />
                    ))}
                </ul>)
                :
                []
            }
        </>

    );
}

export default DiaryProductsList;