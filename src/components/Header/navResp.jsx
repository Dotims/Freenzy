import { React, useState } from 'react';
import {
  NavContent,
  BurgerMenu,
  SingleItem,
  NavWrapper,
  NavBox,
  HamburgerBox,
  StyledHamburger,
  // StyledHamburger,
  ResponsiveHamb,
} from './styles';

import Hamburger from 'hamburger-react';

const NavResp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <NavContent>
      <ResponsiveHamb>
        <Hamburger
          direction='right'
          size={30}
          color='white'
          duration={0.2}
          toggled={isOpen}
          toggle={handleToggle}
        ></Hamburger>
      </ResponsiveHamb>

      <NavWrapper>
        <NavBox isOpen={isOpen} className={isOpen ? 'open' : ''}>
          <HamburgerBox>
            <StyledHamburger toggled={isOpen} toggle={handleToggle} />
          </HamburgerBox>
          <BurgerMenu>
            <SingleItem to='/'>Strona Główna</SingleItem>
            <SingleItem to='/odziez'>Odzież</SingleItem>
            <SingleItem to='/elektronika'>Elektronika</SingleItem>
          </BurgerMenu>
        </NavBox>
      </NavWrapper>
    </NavContent>
  );
};

export default NavResp;
