import { NavLink } from "react-router-dom";
import style from "./AuthNavigation.module.scss";

const AuthNavigation = () => {
  return (
    <>
      <NavLink
        className={style.nav}
        activeClassName={style.activeNav}
        to="/login"
        exact
      >
        Вход
      </NavLink>
      <NavLink
        className={style.nav}
        activeClassName={style.activeNav}
        to="/register"
        exact
      >
        Регистрация
      </NavLink>
    </>
  );
};

export default AuthNavigation;
