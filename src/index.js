import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';
import { ProductsList } from './components/ProductsLists';
import { Header } from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductPage } from './pages/ProductPage';

const theme = createTheme({
  breakpoints: {
    values: {
      sm: 0,
      md: 640,
      lg: 1024,
      xl: 1200,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Header />
    <Router>
      <Routes>
        <Route path='/'>
          <Route index element={<ProductsList />} />
        </Route>
        <Route path='/product-page/:id'>
          <Route index element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
  </ThemeProvider>
);
