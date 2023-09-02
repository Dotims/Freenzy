import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { ProductsList } from "./components/ProductsLists";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/Terms/PrivacyPolicy";
import { Regulations } from "./components/Terms/Regulations";
import { Landing } from "./components/Landing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Providers } from "./components/Providers";

const App = () => {
  return (
    <Providers>
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
            <Route path="" element={<ProductsList category="electronics" />} />
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
    </Providers>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
