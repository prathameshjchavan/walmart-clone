import { notFound } from "next/navigation";
import Image from "next/image";

import { fetchProduct } from "@/actions/fetchProduct";
import { results } from "@/data/sampleProductResult";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ProductPageProps {
  searchParams: {
    url: string;
  };
}

const ProductPage = async ({ searchParams: { url } }: ProductPageProps) => {
  // const results = await fetchProduct(url);
  const product = results.data.content;

  if (!results?.data) return notFound();

  return (
    <div className="flex w-full flex-col p-4 lg:flex-row lg:p-10">
      <div className="hidden lg:inline lg:space-y-4">
        {product.images.map((image, i) => (
          <Image
            key={i}
            src={image}
            alt={product.title + " " + i}
            width={90}
            height={90}
            className="rounded-md border"
          />
        ))}
      </div>

      <Carousel
        opts={{ loop: true }}
        className="mx-auto flex w-3/5 max-w-xl items-center self-start lg:mx-20 lg:mb-0 lg:w-full"
      >
        <CarouselContent>
          {product.images.map((image, i) => (
            <CarouselItem key={i}>
              <div className="p-1">
                <div className="relative flex aspect-square items-center justify-center p-2">
                  <Image
                    key={i}
                    src={image}
                    alt={product.title + " " + i}
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="w-full flex-1 space-y-5 rounded-md border p-5">
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <div className="space-x-2">
          {product.breadcrumbs.map((breadcrumb, i) => (
            <Badge key={breadcrumb + i} variant="outline">
              {breadcrumb}
            </Badge>
          ))}
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: product.description }}
          className="py-5"
        />

        {product.rating && (
          <p className="text-sm text-yellow-500">
            {product.rating.rating} ⭐
            <span className="ml-2 text-gray-400">
              ({product.rating.count} reviews)
            </span>
          </p>
        )}

        <p className="mt-2 text-2xl font-bold">
          {product.currency} {product.price}
        </p>

        {/* Add to Cart Button */}

        <hr />
        <h3 className="pt-10 text-xl font-bold">Specifications</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Specification</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {product.specifications.map((spec) => (
              <TableRow key={spec.key}>
                <TableCell className="font-bold">{spec.key}</TableCell>
                <TableCell>{spec.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductPage;
