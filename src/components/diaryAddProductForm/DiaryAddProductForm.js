import React, { useState } from "react";
import style from "./DiaryAddProductForm.module.scss";
import moment from "moment";
import {dailyOperations, dailySelector} from "../../redux/daily";
import {authSelectors} from "../../redux/authorization";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
// import { useMediaQuery } from "react-responsive";
import Button from "../button/Button";
axios.defaults.baseURL = "https://slimmom-backend.goit.global";


const DiaryAddProductForm = ({toggle, isOpen, orMobile, date, submit}) => {
    const [value, setValue] = useState("");
    const [products, setProducts] = useState([]);
    const [weight, setWeight] = useState("");
    const dispatch = useDispatch();
    const isWeight = useSelector(dailySelector.getWeight);
    console.log(isWeight)


  const handleInput = (e) => {
    const { value } = e.target;
    getProduct(value);
  };

  const getProduct = (value) => {
    setValue(value);

    if (value.length < 3) {
      return;
    }

    axios.get(`/product?search=${value}`).then(({ data }) => {
      setProducts(data);
      // toggle();
    });
  };

  const getWeight = (e) => {
    const { value } = e.target;
    setWeight(value);
  };


  const setProduct = async (e) => {
    e.preventDefault();
    const customeDate = moment(date).format("YYYY-MM-DD");
    if (getProductIdByName()) {
      const requestData = {
        date: customeDate,
        productId: getProductIdByName()._id,
        weight: weight,
      };

      dispatch(dailyOperations.addProductByDay(requestData));
    }
    isOpen && toggle();
  };

  const getProductIdByName = () => {
    return products.find((item) => item.title.ru === value);
  };

  const orDesk = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <form className={style.diaryProductForm} onSubmit={setProduct}>
      {/*<form className={style.diaryProductForm}>*/}
      <label>
        <input
          className={style.productInput}
          type="text"
          placeholder="Введите название продукта"
          list="produsts"
          value={value}
          onChange={handleInput}
          // id="myBrowser"
        />
      </label>
      <datalist id="produsts">
        {products.map((item) => (
          <option key={item._id}>{item.title.ru}</option>
        ))}
      </datalist>
      <label>
        <input
          className={style.weightInput}
          type="text"
          value={weight}
          onChange={getWeight}
          placeholder="Граммы"
        />
      </label>
      {!orDesk && isOpen && <Button onClick={setProduct} text="Добавить" />}
      {orDesk && !isOpen && (
        <button
            disabled={!isWeight}
            className={isWeight ? style.active : style.disabled}
            type="submit"
          onClick={setProduct}
        >
          +
        </button>
      )}
    </form>
  );
};

export default DiaryAddProductForm;
