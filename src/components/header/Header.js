/* eslint-disable no-undef */
import React, { useState } from "react";
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
import NavModale from "../navModale/NavModale";
import Close from "../closeIcon/Close";

const Header = (props) => {
  const { width } = props.size;
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

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
                    {!isOpen ? (
                      <Burger toggle={toggle} />
                    ) : (
                      <Close toggle={toggle} />
                    )}
                  </>
                ) : width < 768 ? (
                  <Burger toggle={toggle} />
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
          {isOpen && width < 1050 && <NavModale toggle={toggle} />}
        </Container>
      </header>
    </>
  );
};

export default withSize()(Header);
