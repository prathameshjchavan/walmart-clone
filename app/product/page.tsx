import { fetchProduct } from "@/actions/fetchProduct";
import { results } from "@/data/sampleProductResult";

interface ProductPageProps {
  searchParams: {
    url: string;
  };
}

const ProductPage = async ({ searchParams: { url } }: ProductPageProps) => {
  // const results = await fetchProduct(url);

  if (!results?.data) {
    return <div>Fetch Failed!</div>;
  }

  return <div>ProductPage</div>;
};

export default ProductPage;
