import { type Organic } from "@/typings/searchTypings";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

interface ProductProps {
  product: Organic;
}

const Product = ({ product }: ProductProps) => {
  return (
    <Link
      href={{ pathname: "/product", query: { url: product.url } }}
      className="relative flex flex-col rounded-md border p-5"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="mx-auto object-contain"
      />

      <p className="text-xl font-bold">
        {product.price.currency}
        {product.price.price}
      </p>

      {product.badge && (
        <Badge className="absolute right-2 top-2">{product.badge}</Badge>
      )}

      <p className="font-light">{product.title}</p>

      {product.rating && (
        <p className="text-sm text-yellow-500">
          {product.rating.rating}⭐
          <span className="ml-2 text-gray-400">({product.rating.count})</span>
        </p>
      )}
    </Link>
  );
};

export default Product;
