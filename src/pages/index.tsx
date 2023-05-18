import Head from "next/head";
import AllMovies from "@/components/AllMovies";
import ScreeningsHome from "../components/ScreeningsHome";
import { ScreeningType, MovieType } from "@/util/types";
import { getData } from "./api/screenings";
import { getMovies } from "./api/movies";
import { GetServerSidePropsContext } from "next";
import validateAuthToken from "@/util/validateAuthToken";
import { IUser } from "../../models/user";

// TODO: Add database functions here.
export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      token: validateAuthToken(context.req.cookies.AuthToken!) /* TEST */,
      screenings: await getData(),
      movies: await getMovies(),
    },
  };
}
//TODO: Remove testcode, dont forget props.
export default function Home({
  screenings,
  movies,
  token,
}: {
  screenings: ScreeningType[];
  movies: MovieType[];
  token: IUser | null;
}) {
  return (
    <>
      <Head>
        <title>Lule Northern Light Cinema</title>
        <meta name="description" content="Kino project in next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {
        /* TEST */ <h1 className="text-center text-white text-6xl">
          {token?.name.first}
        </h1>
      }
      <AllMovies movieData={movies} />
      <ScreeningsHome screenings={screenings} />
    </>
  );
}
