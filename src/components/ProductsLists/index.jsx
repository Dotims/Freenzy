import React, { useEffect, useState } from 'react';
import { StyledProductsWrapper, ProductsBox, StyledProduct } from './styles';

export const ProductsList = () => {
  const [promotionItems, setPromotionItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        'http://localhost:1337/api/promotions/?populate=%2A'
      );
      const res = await data.json();
      setPromotionItems(res.data);
    };
    fetchData();
  }, []);
  console.log(promotionItems);
  return (
    <StyledProductsWrapper>
      <ProductsBox>
        {promotionItems.map((item, index) => {
          return (
            <StyledProduct to={`/product-page/${item.id}`}>
              <img
                src={`http://localhost:1337${item.attributes.thumbnail.data.attributes.url}`}
              />
              <h2>{item.attributes.title}</h2>
              <span>{item.attributes.price}</span>
              <p>{item.attributes.description}</p>
            </StyledProduct>
          );
        })}
      </ProductsBox>
    </StyledProductsWrapper>
  );
};
