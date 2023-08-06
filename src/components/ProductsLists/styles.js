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
  color: 'black',
  '&:hover': {
    cursor: 'pointer',
    transform: 'translateY(-5px)',
  },
  '& section': {
    padding: '15px',
  },

  '& img': {
    width: '100%',
    objectFit: 'cover',
    height: 250,
  },
  '& h2': {
    textAlign: 'center',
    fontsize: '20px',
  },
  '& h3': {
    fontsize: '20px',
  },
  '& span': {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontweight: '800',
    width: '70%',
    textAlign: 'center',
    color: 'white',
    background: '#ff3838',
    padding: '13px',
    borderRadius: '15px',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const StyledPrice = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: '15px 0',
  alignItems: 'center',
  justifyContent: 'center',
  '& s': {
    marginRight: '15px',
    fontWeight: '700',
    fontSize: '19px',
  },
  '& h3': {},
}));
