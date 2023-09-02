import * as React from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import NavWrapper from "./navResp";
import {
  StyledAppBar,
  StyledLogo,
  StyledSearch,
  StyledSearchIconWrapper,
  StyledLogoWrapper,
  StyledNavItems,
  StyledNavigation,
  StyledInput,
} from "./styles";
import { useSearch } from "../../hooks/useSearch";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const { setSearchPhrase } = useSearch();
  const { pathname } = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar>
        <StyledLogoWrapper to="/">
          <StyledLogo src={"/images/freenzy.svg"} alt="" />
        </StyledLogoWrapper>
        <StyledNavItems>
          <StyledNavigation>
            <NavWrapper />
          </StyledNavigation>
          {(pathname === "/odziez" || pathname === "/elektronika") && (
            <StyledSearch>
              <StyledSearchIconWrapper>
                <SearchIcon />
              </StyledSearchIconWrapper>
              <StyledInput
                placeholder="Wyszukaj produktu..."
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => setSearchPhrase(e.target.value)}
              />
            </StyledSearch>
          )}
        </StyledNavItems>
      </StyledAppBar>
    </Box>
  );
};
