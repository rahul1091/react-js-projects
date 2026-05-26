import { useLoaderData } from "react-router-dom";
import type { SearchLoaderResult } from "./searchLoader";
import PackageListItem from "../../components/PackageListItem";

export default function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;

  const renderedResults = searchResults.map((result) => {
    return <PackageListItem key={result.name} pack={result} />;
  });

  return (
    <div>
      <h2 className="text-xl font-bold px-4 my-6 text-slate-900">Search Results</h2>
      <div className="space-y-4 mt-4">{renderedResults}</div>
    </div>
  );
}
