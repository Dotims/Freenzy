import React from "react";
import { StyledLastProducts, StyledLastProductsWrapper } from "./styles";
import { StyledPrice, StyledProduct } from "../ProductsLists/styles";
import { useGetNewestProductsQuery } from "../../hooks/useGetNewestProductsQuery";

export const LastProductsSection = () => {
  const lastProductsQuery = useGetNewestProductsQuery();
  console.log(lastProductsQuery);
  return (
    <StyledLastProductsWrapper>
      <h3>Sprawdź oferty</h3>
      <h2>Ostatnio dodane oferty</h2>
      <StyledLastProducts>
        {lastProductsQuery.isSuccess &&
          lastProductsQuery.data.map((item, index) => (
            <StyledProduct
              to={`/${item.category}/produkt/${item.id}`}
              key={index}
            >
              <img
                src={`http://localhost:1337${item.attributes.thumbnail.data.attributes.url}`}
              />
              <section>
                <div>
                  <h2>{item.attributes.title}</h2>
                  <StyledPrice>
                    <s>{item.attributes.initialPrice}</s>
                    <h3>{item.attributes.discount}</h3>
                  </StyledPrice>
                </div>
                <span className="product-item-action">Sprawdź okazję</span>
              </section>
            </StyledProduct>
          ))}
      </StyledLastProducts>
    </StyledLastProductsWrapper>
  );
};
