import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import AuthNavigation from "../authNav/AuthNavigation";
import Navigation from "../navigation/Navigation";
import Menu from "../menu/Menu";
import style from "./Header.module.css";

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={style.headerWrapper}>
      <Navigation /> {isLoggedIn ? <Menu /> : <AuthNavigation />}
    </header>
  );
}
