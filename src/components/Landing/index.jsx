import React from "react";
import { StyledLandingContainer } from "./styles";
import { HeroSection } from "./HeroSection";
import { BenefitsSection } from "./BenefitsSection";
import { LastProductsSection } from "./LastProductsSection";

export const Landing = () => {
  return (
    <StyledLandingContainer>
      <HeroSection />
      <BenefitsSection />
      <LastProductsSection />
    </StyledLandingContainer>
  );
};
