import { useState } from "react";
import { SearchResultsHeader } from "./components/SearchResultsHeader";
import { SearchProductList } from "./components/SearchProductList";
import { useSearchParams } from "react-router-dom";

export const SearchPage = () => {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const [totalResults, setTotalResults] = useState(0);
  const keyword = searchParams.get("keyword") || "";

  return (
    <main className="main">
      <SearchResultsHeader totalResults={totalResults} />
      <SearchProductList
        keyword={keyword}
        page={page}
        setPage={setPage}
        onTotalResultsChange={setTotalResults}
      />
    </main>
  );
};
