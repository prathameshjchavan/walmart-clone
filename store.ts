import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Content } from "./typings/searchProduct";

interface CartState {
  cart: Content[];
  addToCart: (product: Content) => void;
  removeFromCart: (product: Content) => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        addToCart: (product) => {
          set((state) => ({
            cart: [...state.cart, product],
          }));
        },
        removeFromCart: (product) => {
          const productToRemove = get().cart.findIndex(
            (item) => item.meta.sku === product.meta.sku,
          );

          set((state) => {
            const newCart = [...state.cart];

            newCart.splice(productToRemove, 1);
            return { cart: newCart };
          });
        },
      }),
      {
        name: "shopping-cart-storage",
      },
    ),
  ),
);
