import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledProductsWrapper = styled('main')(({ theme }) => ({
  width: '90%',
  margin: '150px auto',
  maxWidth: '1400px',
  // border: '1px solid black',
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
}));

export const ProductsBox = styled('section')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '25px',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

export const StyledProduct = styled(Link)(({ theme }) => ({
  overflow: 'hidden',
  width: '100%',
  background: 'rgba(255, 255, 255, 0.5)',
  boxShadow: '0 6px 28px 0 rgba(31, 38, 135, 0.37)',
  backdropFilter: 'blur(9px)',
  webkitBackdropFilter: 'blur(9px)',
  borderRadius: '10px',
  textDecoration: 'none',
  transition: '0.2s',
  minHeight: '350px',
  '&:hover': {
    cursor: 'pointer',
    transform: 'translateY(-5px)',
  },
  '& img': {
    width: '100%',
    objectFit: 'cover',
    height: 250,
  },
  // border: '1px solid black',
  // [theme.breakpoints.up('sm')]: {
  //   backgroundColor: 'green',
  // },
  // [theme.breakpoints.up('md')]: {
  //   backgroundColor: 'red',
  // },
  // [theme.breakpoints.up('lg')]: {
  //   backgroundColor: 'blue',
  // },
}));
