import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/authorization";
import AuthNavigation from "../authNavigation/AuthNavigation";
import Navigation from "../navigation/Navigation";
import style from "./Header.module.scss";

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={style.headerWrapper}>
      <Navigation /> {isLoggedIn && <AuthNavigation />}
    </header>
  );
}
