import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
  height: Yup.number()
    .required("Обязательное поле ввода")
    .typeError("Форма принимает, только числовое значение")
    .negative("Введите числовое значение от 2 до 3 символов")
    .min(100, "Введите Ваш рост от 100см")
    .max(250, "Введите Ваш рост до 250см")
    .integer(),
  age: Yup.number()
    .required("Обязательное поле ввода")
    .typeError("Форма принимает, только числовое значение")
    .min(18, "Введите Ваш возраст от 18 лет")
    .max(99, "Введите Ваш возраст до 100 лет")
    .integer(),
  weight: Yup.number()
    .required("Обязательное поле ввода")
    .typeError("Форма принимает, только числовое значение")
    .min(20, "Введите Ваш текущий вес от 20 кг")
    .max(500, "Введите Ваш текущий вес до 500 кг")
    .integer(),
  desiredWeight: Yup.number()
    .required("Обязательное поле ввода")
    .typeError("Форма принимает, только числовое значение")
    .min(20, "Введите Ваш желаемый вес от 20 кг")
    .max(500, "Введите Ваш текущий вес до 500 кг")
    .integer(),
});
export default BasicFormSchema;
