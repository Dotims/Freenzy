import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  StyledProcuctItem,
  WrapperProductImg,
  ContainerProduct,
  StyledImgProduct,
  ProductContent,
  PromoCode,
  StyledSnackbar,
  StyledProductInner,
  StyledProcuct,
  StyledProductWrapper,
  StyledBackBtn,
} from "./styles";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Alert } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import LocalMallIcon from "@mui/icons-material/LocalMall";

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
      })
      .catch((error) => {
        console.error("Błąd przy kopiowaniu do schowka: ", error);
      });
  };

  return (
    <StyledProductWrapper>
      <StyledBackBtn to={`/${"odziez"}`}>
        <span>
          <WestIcon />
          Powrót
        </span>
      </StyledBackBtn>
      <StyledProcuct>
        {promotionItem ? (
          <StyledProductInner>
            <WrapperProductImg>
              <StyledImgProduct
                src={`http://localhost:1337${promotionItem.attributes.thumbnail.data?.attributes.url}`}
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
                  <span
                    onClick={() => {
                      const promoCode = promotionItem.attributes.PromoCode;
                      handleCopyToClipboard(promoCode);
                    }}
                  >
                    <LocalMallIcon />
                    {promotionItem.attributes.promoCode}
                  </span>
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
                  <Alert onClose={() => setIsCopied(false)}>
                    Skopiowano kod
                  </Alert>
                </StyledSnackbar>
              </div>
              <p className="date">
                Data dodania: {promotionItem.attributes.date}
              </p>
            </ProductContent>
          </StyledProductInner>
        ) : (
          <SkeletonTheme baseColor="#ffffff" highlightColor="#e2e2e2">
            <StyledProductInner>
              <Skeleton containerClassName="product-content-skeleton" />
              <Skeleton
                containerClassName="product-content-skeleton-text"
                count={3}
              />
            </StyledProductInner>
          </SkeletonTheme>
        )}
      </StyledProcuct>
    </StyledProductWrapper>
  );
};
