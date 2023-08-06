import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

import Hamburger from 'hamburger-react';

export const StyledHeader = styled('section')(({ theme }) => ({
  borderRadius: '0 0 15px 15px',
  width: '100%',
  background: '#ffa502',
  height: 'auto',
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: '0 0 15px 15px',
  background: '#ff3838',
  width: '100%',
  height: 'auto',
  boxShadow: 'none',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'start',
  margin: 'auto',
  padding: 10,
  [theme.breakpoints.up('md')]: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },

  [theme.breakpoints.up('xl')]: {
    width: '100%',
  },
}));

export const StyledLogoWrapper = styled(Link)(({ theme }) => ({
  display: 'block',
  height: '40px',
  padding: '15px',
  width: '50%',
  [theme.breakpoints.up('md')]: {
    maxWidth: '150px',
  },
}));

export const StyledSearch = styled('div')(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.4)',
  backdropFilter: 'blur(5.5px)',
  '-webkit-backdrop-filter': 'blur(5.5px)',
  borderRadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  color: 'black',
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  display: 'flex',
  width: '100%',
  height: 40,
  position: 'relataive',
  zIndex: 1,
  [theme.breakpoints.up('lg')]: {
    width: '35%',
  },
}));

export const StyledSearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    width: '100%',
    fontSize: '15px',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const StyledNoti = styled(Box)(({ theme }) => ({
  marginRight: 10,
  marginLeft: -15,
}));

export const StyledNotificationsIcon = styled(NotificationsIcon)(
  ({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
      fontSize: '27px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '30px',
    },
  })
);

export const StyledHamburger = styled(Hamburger)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    fontSize: '27px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '30px',
  },
}));

export const StyledLogo = styled('img')(({ theme }) => ({
  width: 'auto',
  height: '100%',
  [theme.breakpoints.up('sm')]: {},
}));

export const NavContent = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
}));

export const BurgerMenu = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '50px 0px',
  [theme.breakpoints.up('lg')]: {
    columnGap: 20,
    padding: 0,
    flexDirection: 'row',
  },
  [theme.breakpoints.up('xl')]: {
    display: 'flex',
    columnGap: 80,
    padding: 0,
  },
}));

export const NavItems = styled('div')({
  width: '100%',
  display: 'block',
});

export const SingleItem = styled(Link)(({ theme }) => ({
  textAlign: 'center',
  padding: 25,
  transition: '.4s',
  fontSize: 16,
  fontWeight: 700,
  border: '1px solid transparent',
  margin: '5px 0',
  textDecoration: 'none',
  color: 'white',
  transition: 'border 0.2s',
  '&:hover': {
    border: '1px solid white',
    cursor: 'pointer',
    color: 'white',
  },
  [theme.breakpoints.up('md')]: { fontSize: 18 },
  [theme.breakpoints.up('lg')]: {
    '&:hover': {
      borderTop: '1px solid transparent',
      borderLeft: '1px solid transparent',
      borderRight: '1px solid transparent',
      borderBottom: '1px solid white',
      cursor: 'pointer',
      color: 'white',
    },
    padding: 0,
    margin: '0',
    boxShadow: 'none !important',
    borderRadius: 'none',
    fontSize: 17,
    fontWeight: 600,
  },
}));

export const NavWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 150,
  width: '50%',
  [theme.breakpoints.up('lg')]: {
    width: '100%',
  },
}));

export const StyledNavItems = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row-reverse',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row-reverse',
  },
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'space-between',
  },
}));

export const StyledNavIcons = styled('div')(({ theme }) => ({
  display: 'flex',
  // flexDirection: 'row-reverse',
  position: 'fixed',
  justifyContent: 'flex-end',
  right: 15,
  top: 15,
  zIndex: 2,
  [theme.breakpoints.up('md')]: {
    // position: 'relative',
    right: 'auto',
    top: 'auto',
    flexDirection: 'unset',
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    right: 'auto',
    top: 'auto',
    flexDirection: 'unset',
    width: '100%',
  },
}));

export const NavBox = styled('nav')(({ isOpen }) => ({ theme }) => ({
  transform: isOpen
    ? 'translateX(calc(0.3% + 15px))'
    : 'translateX(calc(100.3% + 15px))',
  background: 'rgb(0 0 0 / 54%)',
  boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
  backdropFilter: 'blur( 18.5px )',
  height: '150vh',
  position: 'fixed',
  top: -20,
  right: 0,
  width: '250px',
  transition: '0.3s',
  [theme.breakpoints.up('md')]: {
    width: '100%',
    width: '450px',
  },
  [theme.breakpoints.up('lg')]: {
    top: 'auto',
    position: 'relative',
    boxShadow: 'none',
    backdropFilter: 'none',
    background: 'none',
    height: 'auto',
    transform: 'none',
    margin: '0 auto',
    width: 'auto',
  },
}));

export const HamburgerBox = styled('div')(({ theme }) => ({
  marginTop: 25,
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

export const ResponsiveHamb = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

export const StyledBox = styled(Box)({
  zIndex: 999,
});
export const StyledBoxSelect = styled(Box)({
  height: '10px',
  position: 'absolute',
});

// export const StyledHamburger = styled(Hamburger)({
//   border: '2px solid red !important',
//   display: 'none',
//   '@media (max-width: 640px)': {
//     display: 'flex',
//   },
// });
