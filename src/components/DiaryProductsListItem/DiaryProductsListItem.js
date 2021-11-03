import style from "./DiaryProductsListItem.module.scss";

const DiaryProductsListItem = ({ title, kcal, weight, onDelete, id }) => {
  return (
    <li className={style.itemProduct}>
      <p className={style.itemElement}>
        <span className={style.itemTitle}>{title}</span>
        <span className={style.itemWeight}>{weight} г</span>
        <span className={style.itemKcal}>{kcal} ккал</span>
      </p>
      <button
        className={style.deleteBtn}
        type="button"
        onClick={() => onDelete(id)}
      >
        &#10006;
      </button>
    </li>
  );
};

export default DiaryProductsListItem;
