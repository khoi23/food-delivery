import React, { useEffect, useRef, useState } from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  // mobile active menu
  const menuActive = useRef(null);

  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const menuToggle = () => menuActive.current.classList.toggle("active");

  return (
    <header className={isShrunk === true ? "header shrink" : "header"}>
      <Container>
        <div className="nav__wrapper">
          {/* Logo */}
          <div className="nav__wrapper__logo">
            <img src={logo} alt="" />
            <h5 className="nav__wrapper__logo__title">Tasty Treat</h5>
          </div>
          {/* End Logo */}
          {/* =============== Menu ===============*/}
          <div className="nav__wrapper__navigition">
            <div className="nav__wrapper__navigition__menu" ref={menuActive}>
              <i className="ri-close-fill" onClick={menuToggle}></i>
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                  onClick={menuToggle}>
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* =============== End Menu ===============*/}

          {/* =============== nav right icon ===============*/}
          <div className="nav__wrapper__right">
            <span className="nav__wrapper__right__icon">
              <span className="nav__wrapper__right__icon__cart">
                <i className="ri-shopping-bag-line"></i>
                <span className="nav__wrapper__right__icon__cart__badge">
                  10
                </span>
              </span>

              <span className="nav__wrapper__right__icon__user">
                <Link to="/login">
                  <i className="ri-user-line"></i>
                </Link>
              </span>

              <span className="nav__wrapper__right__icon__mobile__menu">
                <i className="ri-menu-line" onClick={menuToggle}></i>
              </span>
            </span>
          </div>
          {/* =============== End nav right icon ===============*/}
        </div>
      </Container>
    </header>
  );
};

export default Header;
