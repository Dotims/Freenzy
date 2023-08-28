import * as React from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import NavWrapper from "./navResp";
import {
  StyledAppBar,
  StyledInputBase,
  StyledLogo,
  StyledSearch,
  StyledSearchIconWrapper,
  StyledLogoWrapper,
  StyledNavItems,
  StyledNavigation,
} from "./styles";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar className="dsa">
        <StyledLogoWrapper to="/">
          <StyledLogo src={"/images/freenzy.svg"} alt="" />
        </StyledLogoWrapper>
        <StyledNavItems>
          <StyledNavigation>
            <NavWrapper />
          </StyledNavigation>
          <StyledSearch>
            <StyledSearchIconWrapper>
              <SearchIcon />
            </StyledSearchIconWrapper>
            <StyledInputBase
              placeholder="Wyszukaj produktu..."
              inputProps={{ "aria-label": "search" }}
            />
          </StyledSearch>
        </StyledNavItems>
      </StyledAppBar>
    </Box>
  );
};
