import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ProductPage = () => {
  const { id } = useParams();

  const [promotionItem, setPromotionItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        'http://localhost:1337/api/promotions/?populate=%2A'
      );
      const res = await data.json();
      console.log('res.data: ', res.data);
      setPromotionItem(res.data.find((item) => item.id === parseInt(id)));
    };
    fetchData();
  }, []);

  console.log('promotionItem: ', promotionItem);

  return <div>index</div>;
};
