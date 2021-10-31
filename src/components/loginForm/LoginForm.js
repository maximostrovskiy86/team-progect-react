import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/authorization";
import { Link } from "react-router-dom";

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
    <div>
      <h2>Login form</h2>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            pattern=" /^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.*@.+(\..{1,11})?)$/"
            title="Email должен содержать символ @ и иметь формат example@mail.com"
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            pattern="[0-9a-zA-Z!@#$%^&*]{7,}"
            title="Пароль должен состоять минимум из 7 символов, может состоять из цифр, букв латинского алфавита и спецсимволов ! @ # $ % ^ & *"
            required
          />
        </label>

        <button type="submit">Вход</button>
        <Link to="/register">Регистрация</Link>
      </form>
    </div>
  );
}
