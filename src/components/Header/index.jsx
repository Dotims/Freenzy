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
} from './styles';
import Badge from '@mui/material/Badge';
import logo from '../../images/streetRage.svg';

export const Header = () => {
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

  // Phone

  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar className='dsa'>
        <StyledLogoWrapper>
          <StyledLogo src={logo} alt='' />
        </StyledLogoWrapper>
        <StyledNavItems>
          <StyledNavIcons className='asd'>
            <NavWrapper />
            <StyledNoti>
              <IconButton
                size='large'
                aria-label='show 17 new notifications'
                color='inherit'
              >
                <Badge badgeContent={1} color='error'>
                  <StyledNotificationsIcon sx={{ fontSize: '30px' }} />
                </Badge>
              </IconButton>
            </StyledNoti>
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
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      ></Menu>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    </Box>
  );
};
