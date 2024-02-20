import { fetchSearch } from "@/actions/fetch";

interface SearchPageProps {
  searchParams: { q: string };
}

const SearchPage = async ({ searchParams: { q } }: SearchPageProps) => {
  // fetch the search results
  const results = await fetchSearch(q);

  if (!results?.data) {
    return <div>Fetch Failed!</div>;
  }

  console.log(results.data);

  return <div>SearchPage</div>;
};

export default SearchPage;
