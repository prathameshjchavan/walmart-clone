"use client";

import { useCartStore } from "@/store";
import { Content } from "@/typings/searchProduct";
import { Button } from "./ui/button";

interface RemoveFromCartProps {
  product: Content;
}

const RemoveFromCart = ({ product }: RemoveFromCartProps) => {
  const { removeFromCart } = useCartStore();

  const handleRemove = () => {
    removeFromCart(product);
  };

  return (
    <Button className="bg-walmart hover:bg-walmart/50" onClick={handleRemove}>
      -
    </Button>
  );
};

export default RemoveFromCart;
