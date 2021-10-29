import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../redux/authorization";
// import Logo from "../logo/Logo";
import style from "./Navigation.module.scss";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={style.nav}>
      {isLoggedIn && (
        <>
          <NavLink
            className={style.navLink}
            activeClassName={style.activeNav}
            to="/diary"
            exact
          >
            Дневник
          </NavLink>
          <NavLink
            className={style.navLink}
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
