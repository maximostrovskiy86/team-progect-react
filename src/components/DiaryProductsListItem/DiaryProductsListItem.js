import style from "./DiaryProductsListItem.module.scss";

const DiaryProductsListItem = ({title, kcal, weight, onDelete, id}) => {
    return (
        <li className={style.itemProduct}>
            <p className={style.itemElement}>
                <span className={style.itemTitle}>{title}</span>
                <span className={style.itemWeight}>{weight} г</span>
                <span className={style.itemKcal}>{kcal.toFixed()} ккал</span>
                <span className={style.wrapperButton}>
                <button
                    className={style.deleteBtn}
                    type="button"
                    onClick={() => onDelete(id)}
                >
                    &times;
                </button>
                    </span>
            </p>

        </li>
    );
};

export default DiaryProductsListItem;
