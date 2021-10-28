import React from "react";
import logoFull from "../../images/logoJPG.jpg";
import logo from "../../images/logo-mob-JPG.jpg";
const Logo = () => {
  return (
    <img srcset={logo} alt="logo" width="47" height="44" />

    // <picture>
    //   <source srcset="../../images/logoJPG.jpg" media="(min-width:768px)" />
    //   <img src="../../images/logo-mob-JPG.jpg" alt="SlimMom" />
    // </picture>
  );
};

export default Logo;
