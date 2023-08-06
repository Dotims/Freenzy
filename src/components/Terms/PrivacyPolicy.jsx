import React from 'react';
import { StyledContainer, SingleTerm } from './styles';
import PrivacyPolicyData from './PrivacyPolicyData';

export const PrivacyPolicy = () => {
  return (
    <StyledContainer>
      <h1>Polityka Prywatności</h1>
      <p>
        Niniejsza Polityka Prywatności ma na celu wyjaśnienie, w jaki sposób
        zbieramy, wykorzystujemy, przechowujemy i chronimy Twoje dane osobowe
        podczas korzystania z naszej strony internetowej, na której prezentowane
        są przecenione produkty.
      </p>
      {PrivacyPolicyData.map((singleTerm) => {
        const { title, paragraph } = singleTerm;
        return (
          <SingleTerm>
            <h2>{title}</h2>
            <p>{paragraph}</p>
          </SingleTerm>
        );
      })}
    </StyledContainer>
  );
};
