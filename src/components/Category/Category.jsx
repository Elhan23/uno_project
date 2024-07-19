import React from "react";
import burger from "../../assets/images/burger.png";
import "./Category.scss";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <div className="category_style container">
      <div>
        <img src={burger} alt="burger" />
      </div>
      <ul>
        <li>
          <a href="#">Все категории</a>
        </li>
        <li>
          <a href="#">Стать продавцом</a>
        </li>
        <li>
          <a href="#">О нас</a>
        </li>
        <li>
          <a href="#">Курьерам</a>
        </li>
        <li>
          <a href="#">Доставка</a>
        </li>
      </ul>
    </div>
  );
}

export default Category;
