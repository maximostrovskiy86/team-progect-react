import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/authorization/index";
import { Link } from "react-router-dom";
import styles from "./ReagistrationForm.module.css";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "username":
        return setUsername(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };
  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ username, email, password }));
    resetForm();
  };

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.title}>Регистрация</h2>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={styles.formLabel}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв латинского алфавита, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            placeholder="Имя *"
            className={styles.field}
          />
        </label>

        <label className={styles.formLabel}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            pattern="/^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.*@.+(\..{1,11})?)$/i"
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
          <Link className={styles.buttonLink} to="/register">
            Регистрация
          </Link>
        </div>
      </form>
    </div>
  );
}
