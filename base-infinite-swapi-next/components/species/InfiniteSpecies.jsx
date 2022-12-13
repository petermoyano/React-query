import InfiniteScroll from "react-infinite-scroller";
import { Species } from "./Species";
import { useInfinteQuery } from "@tanstack/react-query";

const initialUrl = "https://swapi.dev/api/species/";
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfiniteSpecies() {
  const {
    data,
    isError,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfinteQuery(
    ["sw-species"],
    ({ pageParam = initialUrl }) => {
      return fetchUrl(pageParam);
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.next || undefined;
      },
    }
  );
  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error! {error.toString()}</h2>;
  return (
    <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
      {console.log(data)}
    </InfiniteScroll>
  );
}
