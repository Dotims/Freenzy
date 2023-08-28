import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useGetProductsQuery = (category) => {
  const url = `http://localhost:1337/api/${category}/?populate=*`;

  const getProducts = async () => {
    return await axios.get(url).then((res) => res.data.data); // strapi api has additional 'data' prop
  };

  return useQuery(["products", category], getProducts);
};
