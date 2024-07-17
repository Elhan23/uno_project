import React from "react";
import "./NavBar.scss";
import logo from "../../../assets/icons/logo.svg";
import account from "../../../assets/icons/account.svg";
import shopping from "../../../assets/icons/shopping.svg";
import { CiSearch } from "react-icons/ci";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar_style">
          <div className="navbar__logo">
            <img src={logo} alt="TANDA Logo" />
          </div>
          <div className="navbar__search">
            <div className="navbar__search-container">
              <CiSearch className="navbar__search-icon" />
              <input type="text" placeholder="Искать на UNO" />
            </div>
          </div>
          <div className="navbar__actions">
            <button className="navbar__link">
              <img src={account} alt="Войти" />
              Войти
            </button>
            <button className="navbar__link">
              <img src={shopping} alt="Корзина" />
              Корзина
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
