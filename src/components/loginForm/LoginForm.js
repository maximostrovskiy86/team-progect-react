import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/authorization";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };
  const resetForm = () => {
    setEmail("");
    setPassword("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    resetForm();
  };

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.title}>ВХОД</h2>

      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={styles.formLabel}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
            title="Email должен содержать символ @ и иметь формат example@mail.com"
            required
            placeholder="Логин *"
            className={styles.field}
          />
        </label>

        <label className={styles.formLabel}>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            pattern="[0-9a-zA-Z!@#$%^&*]{7,}"
            title="Пароль должен состоять минимум из 7 символов, может состоять из цифр, букв латинского алфавита и спецсимволов ! @ # $ % ^ & *"
            required
            placeholder="Пароль *"
            className={styles.field}
          />
        </label>

        <div className={styles.buttonBlock}>
          <button className={styles.button} type="submit">
            Вход
          </button>
          {/* <Link className={styles.buttonLink} to="/register">
                        Регистрация
                    </Link> */}
        </div>
      </form>
    </div>
  );
}
