import React, { useEffect, useState } from "react";
import {
  StyledProductsWrapper,
  ProductsBox,
  StyledProduct,
  StyledPrice,
} from "./styles";
import { useLocation } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const ProductsList = ({ category }) => {
  const [promotionItems, setPromotionItems] = useState([]);
  const pageName = useLocation().pathname.split("/")[1]; // for example: path: /outfits

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `http://localhost:1337/api/${category}/?populate=%2A`
      );
      const res = await data.json();
      setPromotionItems(res.data);
    };

    fetchData();
  }, [pageName]);

  console.log(promotionItems);

  return (
    <StyledProductsWrapper>
      <ProductsBox>
        {promotionItems.length ? (
          promotionItems.map((item, index) => {
            return (
              <StyledProduct to={`/${pageName}/produkt/${item.id}`} key={index}>
                {item.attributes.thumbnail.data && (
                  <img
                    src={`http://localhost:1337${item.attributes.thumbnail.data.attributes.url}`}
                  />
                )}
                <section>
                  <div>
                    <h2>{item.attributes.title}</h2>
                    <StyledPrice>
                      <s>{item.attributes.initialPrice} zł</s>
                      <h3>{item.attributes.discount} zł</h3>
                    </StyledPrice>
                  </div>
                  <a>Sprawdź okazję</a>
                </section>
              </StyledProduct>
            );
          })
        ) : (
          <>
            <StyledProduct>
              <SkeletonTheme baseColor="#ffffff" highlightColor="#e2e2e2">
                <Skeleton containerClassName="product-card-skeleton" />
                <Skeleton
                  containerClassName="product-content-skeleton-text"
                  count={2}
                />
              </SkeletonTheme>
            </StyledProduct>
            <StyledProduct>
              <SkeletonTheme baseColor="#ffffff" highlightColor="#e2e2e2">
                <Skeleton containerClassName="product-card-skeleton" />
                <Skeleton
                  containerClassName="product-content-skeleton-text"
                  count={2}
                />
              </SkeletonTheme>
            </StyledProduct>
            <StyledProduct>
              <SkeletonTheme baseColor="#ffffff" highlightColor="#e2e2e2">
                <Skeleton containerClassName="product-card-skeleton" />
                <Skeleton
                  containerClassName="product-content-skeleton-text"
                  count={2}
                />
              </SkeletonTheme>
            </StyledProduct>
          </>
        )}
      </ProductsBox>
    </StyledProductsWrapper>
  );
};
