import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useGetNewestProductsQuery = () => {
  const clothesUrl = `http://localhost:1337/api/outfits?populate=*&pagination[limit]=2&sort[0]=createdAt:desc`;
  const electronicsUrl = `http://localhost:1337/api/electronics?populate=*&pagination[limit]=2&sort[0]=createdAt:desc`;

  const getNewestProducts = async () => {
    const clothesRes = await axios
      .get(clothesUrl)
      .then((res) =>
        res.data.data.map((item) => ({ ...item, category: "odziez" }))
      );
    const electronicsRes = await axios
      .get(electronicsUrl)
      .then((res) =>
        res.data.data.map((item) => ({ ...item, category: "elektronika" }))
      );
    const productsList = [...clothesRes, ...electronicsRes];
    const sortedProductsList = productsList
      .sort(
        (a, b) =>
          new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
      )
      .slice(0, 3);

    return sortedProductsList;
  };

  return useQuery(["products", "latest"], getNewestProducts);
};
