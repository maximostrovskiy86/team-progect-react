import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/authorization";
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
        <Navigation /> {isLoggedIn ? <Menu /> : <AuthNavigation />}
      </div>
    </header>
  );
}
