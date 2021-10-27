import React from "react";
import { useFormik } from "formik";
import styles from "./DailyCaloriesForm.module.scss";

import axios from "axios";

const DailyCaloriesForm = ({toggle, setValue}) => {
  // const { values, submitForm } = useFormikContext();

  const formik = useFormik({
    initialValues: {
      height: "",
      age: "",
      weight: "",
      desiredWeight: "",
      bloodType: 4,
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
        axios
          .post("https://slimmom-backend.goit.global/daily-rate", values)
          .then((response) => {
            console.log(response.data);
            toggle();
            setValue(response.data.notAllowedProducts)
          });
      // };
    },
  });

  const showModal = () => {};

  return (
    <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
      <label htmlFor="height">Рост*</label>
      <input
        id="height"
        name="height"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.height}
        className={styles.field}
      />
      <label htmlFor="age">Возраст*</label>
      <input
        id="age"
        name="age"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.age}
        className={styles.field}
      />
      <label htmlFor="weight">Текущий вес*</label>
      <input
        id="weight"
        name="weight"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.weight}
        className={styles.field}
      />
      <label htmlFor="desiredWeight">Желаемый вес*</label>
      <input
        id="desiredWeight"
        name="desiredWeight"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.desiredWeight}
        className={styles.field}
      />
      <div id="my-radio-group" className={styles.formInput}>
        Группа крови*
      </div>

      <button type="submit" onClick={showModal} className={styles.button}>
        Похудеть
      </button>
    </form>
  );
};
export default DailyCaloriesForm;

// import React from "react";
// import { Formik, Field, Form } from "formik";
// import BasicFormSchema from "./DailyCaloriesFormValidator";
// import styles from "./DailyCaloriesForm.module.scss";
// // import { useSelector } from "react-redux";

// const DailyCaloriesForm = () => {
//   // const [height,setHeight] = useState("")

//   // onSubmit,
//   // initialValues,
//   // enableReinitialize = false,
//   return (
//     <div className={styles.calculator}>
//       <div>
//         <h1 className={styles.title}>
//           Просчитай свою суточную норму калорий прямо сейчас
//         </h1>
//         <div className={styles.inputWrapper}>
//           <Formik
//             // enableReinitialize={enableReinitialize}
//             // initialValues={initialValues}
//             // initialValues={{ height: "", age: "", weight: "" }}
//             // validationSchema={BasicFormSchema}
//             // onSubmit={(values) => {
//             //   console.log(values);
//             // }}
//             const HandleChange = () => {

//             }

//             render={({ errors, touched, values }) => (
//               <Form className={styles.formContainer}>
//                 <div className={styles.formWrapper}>
//                   <div>
//                     <label htmlFor="height" className={styles.formInput}>
//                       Рост*
//                     </label>
//                     <Field
//                       value={values}
//                       onChange={HandleChange}
//                       name="height"
//                       type="text"
//                       className={styles.field}
//                     />

//                     {errors.height && touched.height && (
//                       <div className={styles.fieldError}>{errors.height}</div>
//                     )}
//                     <label htmlFor="age" className={styles.formInput}>
//                       Возраст*
//                     </label>
//                     <Field
//                       value={values.age}
//                       name="age"
//                       type="text"
//                       className={styles.field}
//                     />

//                     {errors.age && touched.age && (
//                       <div className={styles.fieldError}>{errors.age}</div>
//                     )}
//                     <label htmlFor="weight" className={styles.formInput}>
//                       Текущий вес*
//                     </label>
//                     <Field
//                       value={values.weight}
//                       name="weight"
//                       type="text"
//                       className={styles.field}
//                     />

//                     {errors.weight && touched.weight && (
//                       <div className={styles.fieldError}>{errors.weight}</div>
//                     )}
//                   </div>
//                   <div className={styles.radioWrapper}>
//                     <label htmlFor="desiredWeight" className={styles.formInput}>
//                       Желаемый вес*
//                     </label>
//                     <Field
//                       value={values.desiredWeight}
//                       name="desiredWeight"
//                       type="text"
//                       className={styles.field}
//                     />

//                     {errors.desiredWeight && touched.desiredWeight && (
//                       <div className={styles.fieldError}>
//                         {errors.desiredWeight}
//                       </div>
//                     )}
//                     <div id="my-radio-group" className={styles.formInput}>
//                       Группа крови*
//                     </div>
//                     <div
//                       role="group"
//                       aria-labelledby="my-radio-group"
//                       className={styles.radio}
//                     >
//                       <label className={styles.formRadio}>
//                         <Field
//                           type="radio"
//                           name="bloodType"
//                           value="1"
//                           // checked={values.bloodType === "1"}
//                           className={styles.customRadio}
//                         />
//                         <span></span>
//                         <small>1</small>
//                       </label>
//                       <label className={styles.formRadio}>
//                         <Field
//                           type="radio"
//                           name="bloodType"
//                           value="2"
//                           // checked={values.bloodType === "2"}
//                           className={styles.customRadio}
//                         />
//                         <span></span>
//                         <small>2</small>
//                       </label>
//                       <label className={styles.formRadio}>
//                         <Field
//                           type="radio"
//                           name="bloodType"
//                           value="3"
//                           // checked={values.bloodType === "3"}
//                           className={styles.customRadio}
//                         />
//                         <span></span>
//                         <small>3</small>
//                       </label>
//                       <label className={styles.formRadio}>
//                         <Field
//                           type="radio"
//                           name="bloodType"
//                           value="4"
//                           // checked={values.bloodType === "4"}
//                           className={styles.customRadio}
//                         />
//                         <span></span>
//                         <small>4</small>
//                       </label>
//                     </div>
//                   </div>
//                 </div>

//                 <button type="submit" className={styles.button}>
//                   Похудеть
//                 </button>
//               </Form>
//             )}
//           />
//         </div>
//       </div>
//       <div>{/* {!isAuth ? <p></p> : <RightSideBar />} */}</div>
//     </div>
//   );
// };

// export default DailyCaloriesForm;
