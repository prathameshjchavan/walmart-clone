import { Content } from "@/typings/searchProduct";

export const getCartTotal = (products: Content[]): string => {
  const total = products.reduce((accumulator, product) => {
    return accumulator + product.price;
  }, 0);

  return `$ ${total.toFixed(2)}`;
};
