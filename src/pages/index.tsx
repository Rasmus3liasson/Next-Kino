import Head from "next/head";
import AllMovies from "@/components/AllMovies";
import ScreeningsHome from "../components/ScreeningsHome";
import { ScreeningType, MovieType } from "@/util/types";
import { getData } from "./api/screenings";
import { getMovies } from "./api/movies";
import { useContext, useEffect } from "react";
import { accountStateContext } from "./_app";

// TODO: Add database functions here.
export async function getServerSideProps() {
  return {
    props: {
      screenings: await getData(),
      movies: await getMovies(),
    },
  };
}

export default function Home({
  screenings,
  movies,
}: {
  screenings: ScreeningType[];
  movies: MovieType[];
}) {
  return (
    <>
      <Head>
        <title>Lule Northern Light Cinema</title>
        <meta name="description" content="Kino project in next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AllMovies movieData={movies} />
      <ScreeningsHome screenings={screenings} />
    </>
  );
}
