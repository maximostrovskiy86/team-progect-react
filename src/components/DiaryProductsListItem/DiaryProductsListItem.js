import style from "./DiaryProductsListItem.module.scss";

const DiaryProductsListItem = ({title, kcal, weight}) => {

    return(
        <li className={style.itemProduct}>
            <span>{title}</span>
            <span>{weight}</span>
            <span>{kcal}</span>
            <button type="button">&#128736;</button>
        </li>
    );
}

export default DiaryProductsListItem;