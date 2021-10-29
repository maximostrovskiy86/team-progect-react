import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {authSelectors} from "../../redux/authorization";
import AuthNavigation from "../authNavigation/AuthNavigation";
import Navigation from "../navigation/Navigation";
import Menu from "../menu/Menu";
import style from "./Header.module.scss";
import Logo from "../logo/Logo";

export default function Header() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <header className={style.headerWrapper}>
            <div className={style.headerContainer}>

                <Link to={isLoggedIn ? "/diary" : "/"} exact>
                    <Logo/>
                </Link>
                <Navigation/>
                {isLoggedIn ? <Menu/> : <AuthNavigation/>}
            </div>
        </header>
    );
}
