import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import NavWrapper from './navResp';
import {
  StyledAppBar,
  StyledInputBase,
  StyledLogo,
  StyledNoti,
  StyledSearch,
  StyledSearchIconWrapper,
  StyledLogoWrapper,
  StyledNotificationsIcon,
  StyledSiteLogo,
  StyledHeader,
  StyledNavItems,
  StyledNavIcons,
  StyledBoxSelect,
} from './styles';
import Badge from '@mui/material/Badge';
import logo from '../../images/streetRage.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = 'primary-search-account-menu';

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <StyledHeader> */}
      <StyledAppBar className='dsa'>
        <StyledLogoWrapper to='/'>
          <StyledLogo src={logo} alt='' />
        </StyledLogoWrapper>
        <StyledNavItems>
          <StyledNavIcons>
            <NavWrapper />
          </StyledNavIcons>
          <StyledSearch>
            <StyledSearchIconWrapper>
              <SearchIcon />
            </StyledSearchIconWrapper>
            <StyledInputBase
              placeholder='Wyszukaj produktu...'
              inputProps={{ 'aria-label': 'search' }}
            />
          </StyledSearch>
        </StyledNavItems>
      </StyledAppBar>
      {/* </StyledHeader> */}
    </Box>
  );
};
