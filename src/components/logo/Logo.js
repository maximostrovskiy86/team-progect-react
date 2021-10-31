import React from "react";
import logo from "../../images/logo-mob-JPG.jpg";
import logoTablet from "../../images/logo_tablet.png";
import logoDesktop from "../../images/logoFull.png";

const Logo = () => {
    return (
        <>
            <picture>
                <source
                    srcSet={logoDesktop}
                    media="(min-width: 1200px)"
                />
                <source
                    srcSet={logoTablet}
                    media="(min-width: 768px)"
                />
                <source
                    srcSet={logo}
                    media="(max-width: 767px)"
                />
                <img
                    className="team-list__images"
                    src="../../images/logo.png"
                    alt="Логотип"
                />
            </picture>
        </>
    );
};

export default Logo;
