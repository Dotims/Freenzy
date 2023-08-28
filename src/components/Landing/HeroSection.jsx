import React from "react";
import {
  StyledHeroContent,
  StyledHeroImageWrapper,
  StyledHeroSection,
} from "./styles";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <StyledHeroSection>
      <StyledHeroContent>
        <h3>Witamy w Freenzy!</h3>
        <div className="stack" style={{ "--stacks": 3 }}>
          <span style={{ "--index": 0 }}>Topowe marki w niskich cenach</span>
          <span style={{ "--index": 1 }}>Topowe marki w niskich cenach</span>
          <span style={{ "--index": 2 }}>Topowe marki w niskich cenach</span>
        </div>
        <p>
          Odkrywaj topowe marki w przystępnych <br />
          cenach i zaoszczędź do 80%
        </p>
        <Link to="">Przejdź do ofert</Link>
      </StyledHeroContent>
      <StyledHeroImageWrapper>
        <img src="images/hero_image.png" alt="" />
      </StyledHeroImageWrapper>
    </StyledHeroSection>
  );
};
