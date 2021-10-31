import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {authSelectors} from "../../redux/authorization";
import style from "./Navigation.module.scss";

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <nav className={style.nav}>
            {isLoggedIn && (
                <ul className={style.listNavigation}>
                    <li>
                        <NavLink
                            className={style.navLink}
                            activeClassName={style.activeNav}
                            to="/diary"
                            exact
                        >
                            Дневник
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={style.navLink}
                            activeClassName={style.activeNav}
                            to="/calculator"
                            exact
                        >
                            Калькулятор
                        </NavLink>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navigation;
