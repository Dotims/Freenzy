import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  StyledProcuctItem,
  WrapperProductImg,
  ContainerProduct,
  StyledImgProduct,
  ProductContent,
  ProductDetails,
  PromoCode,
  StyledSnackbar,
} from "./styles";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Alert, Snackbar } from "@mui/material";

export const ProductPage = ({ category }) => {
  const { id } = useParams();

  const [promotionItem, setPromotionItem] = useState();
  const [isCopied, setIsCopied] = useState(false);
  const pageName = useLocation().pathname;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `http://localhost:1337/api/${category}/?populate=%2A`
      );
      const res = await data.json();
      setPromotionItem(res.data.find((item) => item.id === parseInt(id)));
    };
    fetchData();
  }, [pageName]);

  console.log("promotionItem: ", promotionItem);

  const handleCopyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        console.log("Skopiowano do schowka: ", text);
        // ...
      })
      .catch((error) => {
        console.error("Błąd przy kopiowaniu do schowka: ", error);
      });
  };

  return (
    <StyledProcuctItem>
      {promotionItem ? (
        <ContainerProduct>
          <WrapperProductImg>
            <StyledImgProduct
              src={`http://localhost:1337${promotionItem.attributes.thumbnail.data.attributes.url}`}
            />
          </WrapperProductImg>

          <ProductContent>
            <div>
              <h1>{promotionItem.attributes.title}</h1>
              <h4>
                <s>{promotionItem.attributes.initialPrice} zł</s>
              </h4>
              <h3>{promotionItem.attributes.discount} zł</h3>
              <p>{promotionItem.attributes.description}</p>
              <PromoCode>
                <h5
                  onClick={() => {
                    const promoCode = promotionItem.attributes.PromoCode;
                    handleCopyToClipboard(promoCode);
                  }}
                >
                  {promotionItem.attributes.promoCode}
                </h5>
                <a href={promotionItem.attributes.website} target="_blank">
                  przejdź na stronę
                </a>
              </PromoCode>
              <StyledSnackbar
                anchorOrigin={{
                  open: false,
                  vertical: "bottom",
                  horizontal: "right",
                }}
                open={isCopied}
                autoHideDuration={6000}
                onClose={() => setIsCopied(false)}
              >
                <Alert onClose={() => setIsCopied(false)}>Skopiowano kod</Alert>
              </StyledSnackbar>
            </div>
            <p className="date">
              Data dodania: {promotionItem.attributes.date}
            </p>
          </ProductContent>
        </ContainerProduct>
      ) : (
        <ContainerProduct>
          <SkeletonTheme baseColor="#ffffff" highlightColor="#e2e2e2">
            <Skeleton containerClassName="product-content-skeleton" />
            <Skeleton
              containerClassName="product-content-skeleton-text"
              count={3}
            />
          </SkeletonTheme>
        </ContainerProduct>
      )}
    </StyledProcuctItem>
  );
};
