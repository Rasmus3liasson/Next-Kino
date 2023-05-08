import Head from "next/head";
import AllMovies from "@/components/AllMovies";
export default function Home() {
  return (
    <>
      <Head>
        <title>Lule Northern Light Cinema</title>
        <meta name="description" content="Kino project in next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AllMovies />
    </>
  );
}
