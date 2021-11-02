import style from "./DiaryProductsListItem.module.scss";

const DiaryProductsListItem = ({title, kcal, weight, onDelete, id}) => {
    return (
        <li className={style.itemProduct}>
            <span>{title}</span>
            <span>{weight}</span>
            <span>{kcal}</span>
            <button type="button" onClick={() => onDelete(id)}>&#128736;</button>
        </li>
    );
}

export default DiaryProductsListItem;