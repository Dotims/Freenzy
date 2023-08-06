import React from 'react';
import { StyledContainer, SingleTerm } from './styles';
import RegulationsData from './RegulationsData';

export const Regulations = () => {
  return (
    <StyledContainer>
      <h1>Regulamin</h1>
      <p>
        Niniejszy regulamin określa warunki korzystania z naszej strony
        internetowej, na której prezentowane są przecenione produkty. Prosimy o
        dokładne zapoznanie się z poniższymi zasadami przed rozpoczęciem
        korzystania z serwisu.
      </p>
      {RegulationsData.map((regulationsItem) => {
        const { title, paragraph } = regulationsItem;
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
