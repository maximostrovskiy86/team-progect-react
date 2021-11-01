import React, {useState} from "react";
import style from "./DiaryAddProductForm.module.scss";
import moment from "moment";
import {dailyOperations} from "../../redux/daily";
import {useDispatch} from "react-redux";

import axios from "axios";
axios.defaults.baseURL = "https://slimmom-backend.goit.global";

const DiaryAddProductForm = ({date}) => {
    const [value, setValue] = useState('');
    const [products, setProducts] = useState([]);
    const [weight, setWeight] = useState('');
    const dispatch = useDispatch()

    // const [id, setId] = useState(null);


    const handleInput = (e) => {
        const {value} = e.target;
        getProduct(value)
    }

    const getProduct = (value) => {
        setValue(value)

        if (value.length < 3) {
            return
        }
        axios
            .get(`/product?search=${value}`)
            .then(({data}) => {
                console.log(data)

                setProducts(data)
            })


    };

    const getWeight = (e) => {
        const {value} = e.target;
        setWeight(value);
    }

    const setProduct = async (e) => {
        e.preventDefault();

        const customeDate = moment(date).format("YYYY-MM-DD");
        console.log(getProductIdByName())


        if (getProductIdByName()) {
            const requestData = {date: customeDate, productId: getProductIdByName()._id, weight: weight};
            dispatch(dailyOperations.addProductByDay(requestData));
        }

    }
    const getProductIdByName = () => {
        console.log(products)
        console.log(value)
        return products.find(item => item.title.ru === value);
    }


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
                {products.map(item => (<option key={item._id}>{item.title.ru}</option>))}
            </datalist>
            <label>
                <input className={style.weightInput} type="text" value={weight} onChange={getWeight}
                       placeholder="Граммы"/>
            </label>
            <button type="submit" className={style.diaryProductFormBtn}>
                +
            </button>
        </form>
    );
};

export default DiaryAddProductForm;
