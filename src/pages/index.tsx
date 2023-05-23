import Head from "next/head";
import AllMovies from "@/components/AllMovies";
import ScreeningsHome from "../components/ScreeningsHome";
import { MovieProps } from "@/util/types";
import Rating from "@/components/Rating";
import { getTenScreenings } from "./api/screenings";
import { getTenMovies } from "./api/movies";

export async function getServerSideProps() {
  return {
    props: {
      screenings: await getTenScreenings(),
      movies: await getTenMovies(),
    },
  };
}

export default function Home({
  screenings,
  movies,
}: {
  screenings: string;
  movies: MovieProps[];
}) {
  const parsedScreenings = JSON.parse(screenings);

  return (
    <>
      <Head>
        <title>Lule Northern Light Cinema</title>
        <meta name="description" content="Kino project in next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AllMovies movieData={movies} />
      <ScreeningsHome screenings={parsedScreenings} />
      {movies.map((movie) => (
        <Rating key={movie.title} movieData={movie} />
      ))}
    </>
  );
}
