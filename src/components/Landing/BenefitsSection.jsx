import React from "react";
import { StyledBenefit, StyledBenefitSection } from "./styles";
import DataBenefits from './data';

export const BenefitsSection = () => {
  return (
    <StyledBenefitSection>
      {DataBenefits.map((item, index) => {
        return (
          <StyledBenefit key={index}>
            <img src={item.imgSrc} alt={item.imgSrc} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </StyledBenefit>
        );
      })}
    </StyledBenefitSection>
  );
};
