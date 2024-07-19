import React, { useState } from "react";
import "./NavBar.scss";
import ModalComponents from "../../../components/ModalComponents/ModalComponents";
import logo from "../../../assets/icons/logo.svg";
import account from "../../../assets/icons/account.svg";
import shopping from "../../../assets/icons/shopping.svg";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import burger from "../../../assets/images/burger.png";

function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
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
              <span className="CiSearch1">
                <CiSearch className="navbar__search-icon1" />
              </span>
              <NavLink to="/login">
                <button className="navbar__link">
                  <img src={account} alt="Войти" />
                  <p>Войти</p>
                </button>
              </NavLink>
              <button className="navbar__link">
                <img src={shopping} alt="Корзина" />
                <p>Корзина</p>
              </button>
              <div className="burger1">
                <span className="burger" onClick={toggleModal}>
                  <img src={burger} alt="Menu" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <ModalComponents isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
}

export default NavBar;
