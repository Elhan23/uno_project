import React from "react";
import "./GlobalProduct.scss";
import image46 from "../../assets/images/image46.png";
import user from "../../assets/images/user.png";

function GlobalProduct() {
  return (
    <div className="product-container container">
      <div className="image-gallery">
        <span className="gallety_span">
          <img src={image46} alt="thumbnail" />
        </span>
        <span className="gallety_span">
          <img src={image46} alt="thumbnail" />
        </span>
        <span className="gallety_span">
          <img src={image46} alt="thumbnail" />
        </span>
        <span className="gallety_span">
          <img src={image46} alt="thumbnail" />
        </span>
      </div>
      <div className="main-image">
        <img src={image46} alt="Main Product" />
      </div>
      <div className="product-details">
        <h1>Стиральная машина Atlant на 7 кг</h1>
        <span className="user_style">
          <img src={user} alt="user" />
          <p className="store-name">Название магазина</p>
        </span>
        <p className="brand">Бренд</p>
        <div className="rating">
          <span>⭐ 4.9</span>
          <span>60 отзывов</span>
        </div>
        <div className="description">
             <h2>Описание</h2>
          <p>
            Промышленная швейная машина «Jack JK-H2» выполнена с увеличенным
            челноком и двойным транспортом ткани. Ось челнока расположена
            горизонтально. Двойной механизм подачи ткани позволяет предотвратить
            посадку материала. Модель является усовершенствованным вариантом
            машины Jack JK6380BCQ но имеет ряд доработок: Латунные втулки на
            механизме продвижения.
          </p>
        </div>
        <a href="#" className="spec-link">
          Смотреть характеристики
        </a>
      </div>
      <div className="price-container">
        <p className="price">
          32500 сом <span className="old-price">32500 сом</span>
        </p>
        <button className="buy-now">Купить сейчас</button>
        <button className="credit">Оформить в кредит</button>
      </div>
    </div>
  );
}

export default GlobalProduct;
