import {
  StyledFooter,
  StyledContactWrapper,
  StyledLinks,
  StyledAlternateEmailIcon,
  EmailWrapper,
} from "./styles";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledLinks>
        <StyledContactWrapper>
          <div>
            <h3>Kontakt</h3>
            <p>
              W razie jakichkolwiek pytań lub potrzeby pomocy zachęcamy do
              kontaktu drogą mailową. Jesteśmy tutaj, aby odpowiedzieć na Twoje
              zapytania i służyć wsparciem.
            </p>
            <EmailWrapper>
              <StyledAlternateEmailIcon />
              <div>
                <h5>Email:</h5>
                <a href="mailto:hello@freenzy.com">hello@freenzy.com</a>
              </div>
            </EmailWrapper>
          </div>
        </StyledContactWrapper>
        <StyledContactWrapper>
          <div>
            <h3>Linki</h3>
            <Link to="/privacy-policy">Polityka Prywatności</Link>
            <Link to="/regulations">Regulamin</Link>
          </div>
        </StyledContactWrapper>
        <StyledContactWrapper>
          <div>
            <h3>Oferty</h3>
            <Link to="/">Strona główna</Link>
            <a href="">Odzież</a>
            <a href="">Elektronika</a>
          </div>
        </StyledContactWrapper>
      </StyledLinks>
      <p>StreetRage © 2023</p>
    </StyledFooter>
  );
};
