"use client";

import Image from "next/image";

import { getCartTotal } from "@/lib/get-cart-total";
import { groupBySKU } from "@/lib/group-by-sku";
import { useCartStore } from "@/store";
import AddToCart from "./add-to-cart";
import { Button } from "./ui/button";

const Basket = () => {
  const { cart } = useCartStore();
  const basketTotal = getCartTotal(cart);
  const grouped = groupBySKU(cart);

  return (
    <div className="mx-auto max-w-7xl">
      <ul className="gap-y-2 divide-y-2">
        {Object.keys(grouped).map((sku) => {
          const item = grouped[sku][0];
          const total = getCartTotal(grouped[sku]);

          return (
            <li
              key={sku}
              className="my-2 flex items-center justify-between p-5"
            >
              {item.images[0] && (
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              )}

              <div className="flex gap-x-4 pl-4">
                <div>
                  <p className="line-clamp-2 font-bold">{item.title}</p>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className="mt-2 line-clamp-1 text-sm font-light"
                  />
                </div>
                <div className="flex flex-col rounded-md border p-5">
                  <AddToCart product={item} />

                  <p className="mt-4 text-right font-bold">{total}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col justify-end p-5">
        <p className="mb-5 text-right text-2xl font-bold text-walmart">
          Total: {basketTotal}
        </p>

        <Button className="mt-5 h-20 bg-walmart hover:bg-walmart/50">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Basket;
