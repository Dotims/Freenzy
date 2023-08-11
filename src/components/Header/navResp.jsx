import { React, useEffect, useRef, useState } from "react";
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
} from "./styles";

import Hamburger from "hamburger-react";

const NavResp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <NavContent>
      <ResponsiveHamb>
        <Hamburger
          direction="right"
          size={30}
          color="white"
          duration={0.2}
          toggled={isOpen}
          toggle={handleToggle}
        ></Hamburger>
      </ResponsiveHamb>

      <NavWrapper>
        <NavBox ref={navRef} isOpen={isOpen} className={isOpen ? "open" : ""}>
          <HamburgerBox>
            <StyledHamburger toggled={isOpen} toggle={handleToggle} />
          </HamburgerBox>
          <BurgerMenu>
            <SingleItem to="/">Strona Główna</SingleItem>
            <SingleItem to="/odziez">Odzież</SingleItem>
            <SingleItem to="/elektronika">Elektronika</SingleItem>
          </BurgerMenu>
        </NavBox>
      </NavWrapper>
    </NavContent>
  );
};

export default NavResp;
