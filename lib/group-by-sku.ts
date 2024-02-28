import { Content } from "@/typings/searchProduct";

export const groupBySKU = (products: Content[]): Record<string, Content[]> => {
  return products.reduce((accumulator: Record<string, Content[]>, product) => {
    const sku = product.meta.sku;
    if (!accumulator[sku]) {
      accumulator[sku] = [];
    }
    accumulator[sku].push(product);

    return accumulator;
  }, {});
};
