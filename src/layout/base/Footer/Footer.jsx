import React from "react";
import "./Footer.scss";
import logo from "../../../assets/icons/logo.svg";
import insta from "../../../assets/images/insta.png";
import whatsapp from "../../../assets/images/whatsapp.png";

function Footer() {
  return (
    <footer className="bg_footer">
      <div className="container">
        <div className="footer_style">
          <div className="footer_images">
            <img className="logo" src={logo} alt="logo" />
            <span className="footer_sot">
              <img src={insta} alt="insta" />
              <img src={whatsapp} alt="whatsapp" />
            </span>
          </div>

          <div className="descripton_footer">
            <h3>Компания</h3>
            <p>О нас</p>
            <p>Способы оплаты</p>
            <p>Доставка</p>
            <p>Политика конфиденциальности</p>
            <p>Персональные данные</p>
          </div>

          <div className="descripton_footer">
            <h3>Партнерам</h3>
            <p>Продавайте на UNO</p>
            <p>Курьерам</p>
          </div>

          <div className="descripton_footer">
            <h3>Контакты</h3>
            <p>unokg@gmail.com</p>
            <p>+996 700 000 000</p>
            <p>+996 500 000 000</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="buy_global">
        <div className="buy_class">
          <div className="buy_moment container">
            <span>
              <p className="new_style">100000 сом</p>
              <p className="old_style">99000 сом</p>
            </span>
            <button>Купить Сейчас</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
