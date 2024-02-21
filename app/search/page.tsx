import { fetchSearch } from "@/actions/fetch";
import Product from "@/components/product";
import { results } from "@/data/sample";

interface SearchPageProps {
  searchParams: { q: string };
}

const SearchPage = async ({ searchParams: { q } }: SearchPageProps) => {
  // fetch the search results
  // const results = await fetchSearch(q);

  if (!results?.data) {
    return <div>Fetch Failed!</div>;
  }

  return (
    <div className="p-10">
      <h1 className="mb-2 text-3xl font-bold">Results for {q}</h1>
      <h2 className="mb-5 text-gray-400">
        ({results.data.content.total_results} results)
      </h2>

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {results.data.content.organic.map((product) => (
          <li key={product.product_id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
