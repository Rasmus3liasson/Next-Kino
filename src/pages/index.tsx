import Head from "next/head";
import Screening from '../components/Screening'
import movieData from "@/util/mockMovieData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lule Northern Light Cinema</title>
        <meta name="description" content="Kino project in next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Screening movieData={movieData} />
    </>
  );
}
