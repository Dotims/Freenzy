import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/Notifications';

import Hamburger from 'hamburger-react';

export const StyledHeader = styled('section')(({ theme }) => ({
  borderRadius: '0 0 15px 15px',
  background: '#ffa502',
  width: '100%',
  height: 'auto',
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: 9999999,
  boxShadow: 'none',
  background: 'transparent',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-beetwen',
  alignItems: 'center',
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    height: '120px',
    width: '100%',
    justifyContent: 'space-beetwen',
    flexWrap: 'wrap',
  },
  [theme.breakpoints.up('md')]: {
    width: '100%',
    justifyContent: 'space-around',
    flexWrap: 'nowrap',
  },
  [theme.breakpoints.up('lg')]: {
    height: '70px',
    width: '95%',
  },
  [theme.breakpoints.up('xl')]: {
    width: '90%',
  },
}));

export const StyledLogoWrapper = styled('a')(({ theme }) => ({
  display: 'block',
  height: '10%',
  width: '30%',
  [theme.breakpoints.up('sm')]: {
    height: '40%',
  },
  [theme.breakpoints.up('md')]: {
    height: '50%',
  },
  [theme.breakpoints.up('lg')]: {
    height: '70%',
  },
}));

export const StyledSearch = styled('div')(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.4)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  backdropFilter: 'blur(5.5px)',
  '-webkit-backdrop-filter': 'blur(5.5px)',
  borderRadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  color: 'black',
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  display: 'block',
  [theme.breakpoints.up('sm')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '40%',
  },
}));

export const StyledSearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
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
}));

export const NavContent = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    width: '100%',
  },
}));

export const BurgerMenu = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'block',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '50px 0px',
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    padding: 0,
    justifyContent: 'start',
  },
}));

export const NavItems = styled('div')({
  width: '100%',
  display: 'block',
});

export const SingleItem = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: 45,
  boxShadow: '0 5px 10px 0px rgba(84, 60, 81, 0.25)',
  transition: '.4s',
  fontSize: 19,
  fontWeight: 700,
  '&:hover': {
    cursor: 'pointer',
    boxShadow: '0 5px 10px 0px rgba(84, 60, 81, 0.5)',
    color: '#eb3b5a',
  },
  [theme.breakpoints.up('lg')]: {
    padding: 0,
    margin: '0',
    boxShadow: 'none !important',
    borderRadius: 'none',
    fontSize: 17,
    fontWeight: 600,
    width: '25%',
  },
}));

export const NavWrapper = styled('div')(({ theme }) => ({
  width: '50%',
  [theme.breakpoints.up('lg')]: {
    width: '100%',
  },
}));

export const NavBox = styled('nav')(({ isOpen }) => ({ theme }) => ({
  // display: isOpen ? 'none' : 'block',
  transform: isOpen ? 'translateX(0.3%)' : 'translateX(100.3%)',
  background: '#a229f2',
  position: 'absolute',
  zIndex: 999999,
  top: 0,
  right: 0,
  width: '60%',
  transition: '0.3s',
  display: 'flex',
  [theme.breakpoints.up('lg')]: {
    position: 'relative',
    background: 'none',
    height: 'auto',
    width: '80%',
    transform: 'none',
    margin: '0 auto',
  },
}));

export const HamburgerBox = styled('div')(({ theme }) => ({
  width: '92%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  marginTop: 12,
  // border: '2px solid red',
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

export const ResponsiveHamb = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

export const StyledBox = styled(Box)({});

// export const StyledHamburger = styled(Hamburger)({
//   border: '2px solid red !important',
//   display: 'none',
//   '@media (max-width: 640px)': {
//     display: 'flex',
//   },
// });
