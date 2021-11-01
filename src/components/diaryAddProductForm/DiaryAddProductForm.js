import React from "react";
import style from "./DiaryAddProductForm.module.scss";

const DiaryAddProductForm = () => {
  const onHandleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={style.diaryProductForm} onSubmit={onHandleSubmit}>
      <label>
        <input
          className={style.productInput}
          type="text"
          placeholder="Введите название продукта"
          list="produsts"
        />
      </label>
      <datalist id="produsts">
        <option value="Chocolate" />
        <option value="Coconut" />
        <option value="Mint" />
        <option value="Strawberry" />
        <option value="Vanilla" />
      </datalist>
      {/* <datalist>
        {products.map((product) => (
          <option value=""></option>
        ))}
      </datalist> */}
      <label>
        <input className={style.weightInput} type="text" placeholder="Граммы" />
      </label>
      <button type="submit" className={style.diaryProductFormBtn}>
        +
      </button>
    </form>
  );
};

export default DiaryAddProductForm;
