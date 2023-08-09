import React from "react";
import { StyledBenefit, StyledBenefitSection } from "./styles";

export const BenefitsSection = () => {
  return (
    <StyledBenefitSection>
      <StyledBenefit>
        <img src="/images/benefit1.svg" alt="" />
        <div>
          <h3>Przeceny do -80%</h3>
          <p>
            Wydawaj mądrze pieniądze i kupuj przecenione produkty które cię
            interesują, dzieki zespołowi Freenzy który wyszukuje najlepsze
            oferty i okazje
          </p>
        </div>
      </StyledBenefit>
      <StyledBenefit>
        <img src="/images/benefit2.svg" alt="" />
        <div>
          <h3>Zaoszczędź swój czas</h3>
          <p>
            Nie trać swojego czasu na ręczne i czasochłonne szukanie produktów w
            atrakcyjnej cenie
          </p>
        </div>
      </StyledBenefit>
      <StyledBenefit>
        <img src="/images/benefit3.svg" alt="" />
        <div>
          <h3>Najpopularniejsze marki</h3>
          <p>
            Najwyższej jakości produkty otrzymujesz teraz w wyjątkowych cenach -
            to idealna okazja, by skorzystać z topowych produktów w atrakcyjnych
            przecenach.
          </p>
        </div>
      </StyledBenefit>
      <StyledBenefit>
        <img src="/images/benefit4.svg" alt="" />
        <div>
          <h3>Aktywność naszego zespołu</h3>
          <p>
            Stale wyszukujemy nowych produktów, które mogą Cię zainteresować.
            Zachęcamy do regularnego odwiedzania strony, aby nie przegapić
            atrakcyjnych promocji i ciekawych ofert.
          </p>
        </div>
      </StyledBenefit>
    </StyledBenefitSection>
  );
};
