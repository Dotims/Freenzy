import React from "react";
import { StyledLastProducts, StyledLastProductsWrapper } from "./styles";
import { StyledPrice, StyledProduct } from "../ProductsLists/styles";

export const LastProductsSection = () => {
  return (
    <StyledLastProductsWrapper>
      <h3>Sprawdź oferty</h3>
      <h2>Ostatnio dodane oferty</h2>
      <StyledLastProducts>
        {[1, 2, 3].map(() => (
          <StyledProduct to={`/`}>
            <img src={`/images/hero_image.png`} />
            <section>
              <div>
                <h2>asd</h2>
                <StyledPrice>
                  <s>asd zł</s>
                  <h3>asd zł</h3>
                </StyledPrice>
              </div>
              <a>Sprawdź okazję</a>
            </section>
          </StyledProduct>
        ))}
      </StyledLastProducts>
    </StyledLastProductsWrapper>
  );
};
