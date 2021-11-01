import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../redux/authorization";
import AuthNavigation from "../authNavigation/AuthNavigation";
import Navigation from "../navigation/Navigation";
import Menu from "../menu/Menu";
import style from "./Header.module.scss";
import Logo from "../logo/Logo";
import Burger from "../burger/Burger";
import { withSize } from "react-sizeme";
import Container from "../container/Container";

const Header = (props) => {
  const { width } = props.size;
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <header className={style.headerWrapper}>
        <Container>
          <div className={style.headerContainer}>
            <NavLink to={isLoggedIn ? "/diary" : "/"} className={style.logo}>
              <Logo />
            </NavLink>
            {isLoggedIn ? (
              <div className={style.menuRight}>
                {width < 1050 ? (
                  <>
                    <Menu width={width} />
                    <Burger />
                  </>
                ) : width < 768 ? (
                  <Burger />
                ) : (
                  <>
                    <Navigation />
                    <Menu />
                  </>
                )}
              </div>
            ) : (
              <AuthNavigation />
            )}
          </div>
          {isLoggedIn && width < 768 && <Menu />}
        </Container>
      </header>
    </>
  );
};

export default withSize()(Header);
