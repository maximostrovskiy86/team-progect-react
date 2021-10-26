import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../redux/auth";
import style from "./Navigation.module.scss";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        className={style.nav}
        activeClassName={style.activeNav}
        to="/"
        exact
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink
            className={style.nav}
            activeClassName={style.activeNav}
            to="/diary"
            exact
          >
            Дневник
          </NavLink>
          <NavLink
            className={style.nav}
            activeClassName={style.activeNav}
            to="/calculator"
            exact
          >
            Калькулятор
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
