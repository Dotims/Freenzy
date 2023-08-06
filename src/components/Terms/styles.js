import React from 'react';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled('section')(({ theme }) => ({
  width: '80%',
  margin: '10vh auto 10vh auto',
  borderRadius: '25px',
  boxShadow: '0 6px 28px 0 rgba(31, 38, 135, 0.37);',
  padding: '30px',
  '& h1:First-of-type': {
    textAlign: 'center',
    paddingBottom: '10px',
    fontWeight: '900',
  },
  [theme.breakpoints.up('md')]: {
    padding: '60px',
    width: '60%',
  },
}));

export const SingleTerm = styled('div')(({ theme }) => ({
  padding: '20px 0',
}));
