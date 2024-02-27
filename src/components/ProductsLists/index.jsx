import React, { useEffect, useState } from "react";
import {
  StyledProductsWrapper,
  ProductsBox,
  StyledProduct,
  StyledPrice,
} from "./styles";
import { useLocation } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useGetProductsQuery } from "../../hooks/useGetProductsQuery";
import { useSearch } from "../../hooks/useSearch";

export const ProductsList = ({ category }) => {
  const pageName = useLocation().pathname.split("/")[1]; // for example: path: /outfits

  const productsQuery = useGetProductsQuery(category);
  const { searchPhrase } = useSearch();

  return (
    <StyledProductsWrapper>
      <h2>Produkty</h2>
      <ProductsBox>
        {productsQuery.isSuccess ? (
          productsQuery.data
            .filter((item) => {
              return (
                item === "" ||
                item.attributes.title
                  .toLowerCase()
                  .includes(searchPhrase.toLowerCase())
              );
            })
            .map((item, index) => {
              console.log('dsds', item);
              return (
                <StyledProduct
                  to={`/${pageName}/produkt/${item.id}`}
                  key={index}
                >
                  {item.attributes.thumbnail.data && (
                    <img
                      src={`http://localhost:1337${item.attributes.thumbnail.data?.attributes.url}`}
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
                    <span className="product-item-action">Sprawdź okazję</span>
                  </section>
                </StyledProduct>
              );
            })
        ) : (
          <>
            <SkeletonTheme baseColor="#ffffff" highlightColor="#e2e2e2">
              <StyledProduct sx={{ height: 377, justifyContent: "start" }}>
                <Skeleton containerClassName="product-card-skeleton" />
                <Skeleton
                  containerClassName="product-card-skeleton-text"
                  count={2}
                />
              </StyledProduct>
              <StyledProduct sx={{ height: 377, justifyContent: "start" }}>
                <Skeleton containerClassName="product-card-skeleton" />
                <Skeleton
                  containerClassName="product-card-skeleton-text"
                  count={2}
                />
              </StyledProduct>
              <StyledProduct sx={{ height: 377, justifyContent: "start" }}>
                <Skeleton containerClassName="product-card-skeleton" />
                <Skeleton
                  containerClassName="product-card-skeleton-text"
                  count={2}
                />
              </StyledProduct>
            </SkeletonTheme>
          </>
        )}
      </ProductsBox>
    </StyledProductsWrapper>
  );
};
