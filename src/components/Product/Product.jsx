import React from "react";
import { useQuery, gql } from "@apollo/client";
import image45 from "../../assets/images/image45.png";
import star from "../../assets/images/star.png";
import "./Product.scss";

const GET_PRODUCT = gql`
  query Barcode {
    barcode(id: 365) {
      id
      barcodeValue
      title
      description
      deleted
      sellingPrice
      slug
      archived
      createdAt
      mute
      discountedPrice
      cost
      tags
      characteristic
      category {
        id
        name
        slug
        icon
        icon1
        isActive
        prioritization
        inTrend
        lft
        rght
        treeId
        level
        parent {
          id
          name
          slug
          icon
          icon1
          isActive
          prioritization
          inTrend
          lft
          rght
          treeId
          level
        }
      }
      images {
        id
        url
      }
      sizes {
        edges {
          node {
            id
            name
            value
          }
        }
      }
    }
  }
`;

const Product = () => {
  const { loading, error, data } = useQuery(GET_PRODUCT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const product = data.barcode;
  console.log(data);

  return (
    <div className="container">
      <h2>Похожие товары</h2>
      <div className="product-grid">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="product-card">
            <div className="img_bg">
              <img src={image45} alt="" />
            </div>
            <p>{product.title}</p>
            <span className="span_style">Швейная машина</span>
            <span className="star_class">
              <img src={star} alt="star" />
              <p>0 отзывов</p>
            </span>
            <p>Цена: {product.sellingPrice} Сом</p>
            <button>Купить сейчас</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
