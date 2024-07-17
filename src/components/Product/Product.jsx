import React from "react";
import { useQuery, gql } from "@apollo/client";
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
    <div>
      <div className="reviews">
        <h2>Отзывы</h2>
        <div className="review-list">
          <div className="review">
            <p>Рейтинг: 5 звезд</p>
            <p>Отличная машина!</p>
          </div>
          <div className="review">
            <p>Рейтинг: 4 звезды</p>
            <p>Хороший продукт, но доставка задержалась.</p>
          </div>
        </div>
      </div>

      <div className="similar-products">
        <h2>Похожие товары</h2>
        <div className="product-grid">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="product-card">
              <img src={product.images[0]?.url} alt={product.title} />
              <p>{product.title}</p>
              <p>Цена: {product.sellingPrice} Сом</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
