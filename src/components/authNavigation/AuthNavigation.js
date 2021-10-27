import { NavLink } from "react-router-dom";
import style from "./AuthNavigation.module.scss";

const AuthNavigation = () => {
  return (
    <div className={style.AuthNavigationBox}>
      <NavLink
        className={style.authNav}
        activeClassName={style.activeNav}
        to="/login"
        exact
      >
        Вход
      </NavLink>
      <NavLink
        className={style.authNav}
        activeClassName={style.activeNav}
        to="/register"
        exact
      >
        Регистрация
      </NavLink>
    </div>
  );
};

export default AuthNavigation;
