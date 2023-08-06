import {
  StyledFooter,
  StyledContactWrapper,
  StyledLinks,
  StyledAlternateEmailIcon,
  EmailWrapper,
} from './styles';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledLinks>
        <StyledContactWrapper>
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
              <a href='mailto:streetragecontact@gmail.com'>
                streetragecontact@gmail.com
              </a>
            </div>
          </EmailWrapper>
        </StyledContactWrapper>
        <StyledContactWrapper>
          <h3>Regulamin</h3>
          <Link to='/privacy-policy'>Polityka Prywatności</Link>
          <Link to='/regulations'>Regulamin strony</Link>
        </StyledContactWrapper>
        <StyledContactWrapper>
          <h3>Oferty</h3>
          <Link to='/'>Strona główna</Link>
          <a href=''>Odzież</a>
          <a href=''>Elektronika</a>
        </StyledContactWrapper>
      </StyledLinks>
      <p>StreetRage © 2023</p>
    </StyledFooter>
  );
};
