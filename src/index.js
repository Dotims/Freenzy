import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles/index.scss";
import { ProductsList } from "./components/ProductsLists";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/Terms/PrivacyPolicy";
import { Regulations } from "./components/Terms/Regulations";
import { Landing } from "./components/Landing";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { QueryClient } from "@tanstack/react-query";
import { ScrollToTop } from "./components/ScrollToTop";

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

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1200000, // 20 minutes
      staleTime: 900000, // 15 minutes
      retry: 0,
    },
  },
});

const App = () => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/">
              <Route index element={<Landing />} />
            </Route>
            <Route path="odziez">
              <Route path="" element={<ProductsList category="outfits" />} />
              <Route
                path="produkt/:id"
                element={<ProductPage category="outfits" />}
              />
            </Route>
            <Route path="elektronika">
              <Route
                path=""
                element={<ProductsList category="electronics" />}
              />
              <Route
                path="produkt/:id"
                element={<ProductPage category="electronics" />}
              />
            </Route>
            <Route path="polityka-prywatnosci" element={<PrivacyPolicy />} />
            <Route path="regulamin" element={<Regulations />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </PersistQueryClientProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
