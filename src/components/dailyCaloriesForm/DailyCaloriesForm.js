import React from "react";
import { Formik, Field, Form } from "formik";
import BasicFormSchema from "./DailyCaloriesFormValidator";
import styles from "./DailyCaloriesForm.module.scss";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// import {dailyRateAction} from "../../redux/user";
import { authSelectors, authOperations } from "../../redux/authorization";
// import { Modal } from "bootstrap";

const CalculatorСalorieForm = ({ toggle, setValue }) => {
  const isLogged = useSelector(authSelectors.getIsLoggedIn);
  const id = useSelector(authSelectors.getUserId);
  const dispatch = useDispatch();
  console.log(id);

  const getNumbers = (data) => {
    const newData = {};
    const keys = Object.keys(data);
    keys.map((key) => (newData[key] = Number(data[key])));
    return newData;
  };

  return (
    <div className={styles.calculator}>
      <div>
        <h1 className={styles.title}>
          Просчитай свою суточную норму калорий прямо сейчас
        </h1>
        <div className={styles.inputWrapper}>
          <Formik
            initialValues={{
              weight: "",
              height: "",
              age: "",
              desiredWeight: "",
              bloodType: "",
            }}
            validationSchema={BasicFormSchema}
            onSubmit={(values) => {
              {
                isLogged
                  ? dispatch(authOperations.rateDailyUser(getNumbers(values)))
                  : axios
                      .post(
                        "https://slimmom-backend.goit.global/daily-rate",
                        getNumbers(values)
                      )
                      .then((response) => {
                        console.log(response.data);
                        console.log("LOG------------------------");

                        setValue(response.data);
                        toggle();
                      });
              }
            }}
            render={({ errors, touched, values }) => (
              <Form className={styles.formContainer}>
                <div className={styles.formWrapper}>
                  <div>
                    <label htmlFor="height" className={styles.formInput}>
                      Рост*
                    </label>
                    <Field
                      value={values.height}
                      name="height"
                      type="text"
                      className={styles.field}
                    />

                    {errors.height && touched.height && (
                      <div className={styles.fieldError}>{errors.height}</div>
                    )}
                    <label htmlFor="age" className={styles.formInput}>
                      Возраст*
                    </label>
                    <Field
                      value={values.age}
                      name="age"
                      type="text"
                      className={styles.field}
                    />

                    {errors.age && touched.age && (
                      <div className={styles.fieldError}>{errors.age}</div>
                    )}
                    <label htmlFor="weight" className={styles.formInput}>
                      Текущий вес*
                    </label>
                    <Field name="weight" type="text" className={styles.field} />

                    {errors.weight && touched.weight && (
                      <div className={styles.fieldError}>{errors.weight}</div>
                    )}
                  </div>
                  <div className={styles.radioWrapper}>
                    <label htmlFor="desiredWeight" className={styles.formInput}>
                      Желаемый вес*
                    </label>
                    <Field
                      name="desiredWeight"
                      type="text"
                      className={styles.field}
                    />

                    {errors.desiredWeight && touched.desiredWeight && (
                      <div className={styles.fieldError}>
                        {errors.desiredWeight}
                      </div>
                    )}
                    <div id="my-radio-group" className={styles.formInput}>
                      Группа крови*
                    </div>
                    <div
                      role="group"
                      aria-labelledby="my-radio-group"
                      className={styles.radio}
                    >
                      <label className={styles.formRadio}>
                        <Field
                          type="radio"
                          name="bloodType"
                          value="1"
                          // checked={values.bloodType === "1"}
                          className={styles.customRadio}
                        />
                        <span></span>
                        <small>1</small>
                      </label>
                      <label className={styles.formRadio}>
                        <Field
                          type="radio"
                          name="bloodType"
                          value="2"
                          // checked={values.bloodType === "2"}
                          className={styles.customRadio}
                        />
                        <span></span>
                        <small>2</small>
                      </label>
                      <label className={styles.formRadio}>
                        <Field
                          type="radio"
                          name="bloodType"
                          value="3"
                          // checked={values.bloodType === "3"}
                          className={styles.customRadio}
                        />
                        <span></span>
                        <small>3</small>
                      </label>
                      <label className={styles.formRadio}>
                        <Field
                          type="radio"
                          name="bloodType"
                          value="4"
                          // checked={values.bloodType === "4"}
                          className={styles.customRadio}
                        />
                        <span></span>
                        <small>4</small>
                      </label>
                    </div>
                  </div>
                </div>

                <button type="submit" className={styles.button}>
                  Похудеть
                </button>
              </Form>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default CalculatorСalorieForm;
