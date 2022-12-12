import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Posts } from "./Posts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Peter's Blog Posts</h1>
        <Posts />
      </div>
    </QueryClientProvider>
  );
}
