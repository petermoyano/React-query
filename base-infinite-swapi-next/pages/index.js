import styles from "../styles/Home.module.css";
import { InfinitePeople } from "../components/people/InfinitePeople";
import { InfiniteSpecies } from "../components/species/InfiniteSpecies";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.container}>
        <div className="App">
          <h1>Infinite SWAPI</h1>
          <InfinitePeople />
          {/* <InfiniteSpecies /> */}
        </div>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
