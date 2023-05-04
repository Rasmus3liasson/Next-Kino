import Head from "next/head";
import ScreeningsHome from '../components/ScreeningsHome'
import { movieData } from "@/util/mockMovieData";
import { movieDataArray } from "@/util/mockMovieData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lule Northern Light Cinema</title>
        <meta name="description" content="Kino project in next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ScreeningsHome screenings={movieDataArray} />
    </>
  );
}
