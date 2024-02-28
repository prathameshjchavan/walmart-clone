"use client";

import { useCartStore } from "@/store";
import { Content } from "@/typings/searchProduct";
import { Button } from "./ui/button";
import RemoveFromCart from "./remove-from-cart";

type AddToCartProps = {
  product: Content;
};

const AddToCart = ({ product }: AddToCartProps) => {
  const { cart, addToCart } = useCartStore();
  const howManyInCart = cart.filter(
    (item) => item.meta.sku === product.meta.sku,
  ).length;

  const handleAdd = () => {
    addToCart(product);
  };

  if (howManyInCart > 0) {
    return (
      <div className="flex items-center gap-x-5">
        <RemoveFromCart product={product} />
        <span>{howManyInCart}</span>
        <Button className="bg-walmart hover:bg-walmart/50" onClick={handleAdd}>
          +
        </Button>
      </div>
    );
  }

  return <Button className="bg-walmart hover:bg-walmart/50" onClick={handleAdd}>Add to Cart</Button>;
};

export default AddToCart;
