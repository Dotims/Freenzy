import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {
  StyledProcuctItem,
  WrapperProductImg,
  ContainerProduct,
  StyledImgProduct,
  ProductContent,
  ProductDetails,
  PromoCode,
} from './styles';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const ProductPage = ({ category }) => {
  const { id } = useParams();

  const [promotionItem, setPromotionItem] = useState();
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

  console.log('promotionItem: ', promotionItem);

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Skopiowano do schowka: ', text);
        setIsCopied(true);

        // Ukryj komunikat po 3 sekundach
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Błąd przy kopiowaniu do schowka: ', error);
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
                {promotionItem.attributes.PromoCode}
              </h5>
              <a href={promotionItem.attributes.website} target='_blank'>
                przejdź na stronę
              </a>
            </PromoCode>
            {isCopied && <span>Skopiowano kod promocyjny!</span>}
            <p>Data dodania: {promotionItem.attributes.date}</p>
          </ProductContent>
        </ContainerProduct>
      ) : (
        <ContainerProduct>
          <SkeletonTheme baseColor='#ffffff' highlightColor='#e2e2e2'>
            <Skeleton containerClassName='product-content-skeleton' />
          </SkeletonTheme>
          <Skeleton
            containerClassName='product-content-skeleton-text'
            count={3}
          />
        </ContainerProduct>
      )}
    </StyledProcuctItem>
  );
};
