import Head from "next/head";
import MovieDetails from "@/components/MovieDetails";
import AllSpecificMovieScreenings from "@/components/AllSpecificMovieScreenings";
import { ScreeningType, SortedScreenings } from "@/util/types";
import { getMovieScreenings } from "@/pages/api/upcoming-screenings";
import type { GetServerSidePropsContext } from "next";
import { getMovieData } from "@/pages/api/movies";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      //TODO: Needs to assign function for fetching movie as serverside props
      movie: await getMovieData(),
      movieScreenings: await getMovieScreenings(context.params.id),
    },
  };
}

export default function MovieDetailsPage({
  movie,
  movieScreenings,
}: {
  movie: ScreeningType;
  movieScreenings: SortedScreenings;
}) {
  return (
    <>
      <Head>
        <title>Lule Northern Light Cinema</title>
        <meta
          name="This page get you see what screenings this movie has and information about it"
          content="Kino project in next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MovieDetails movieData={movie} />
      {/* Rating / Review - component goes here! */}
      <AllSpecificMovieScreenings screenings={movieScreenings} />
    </>
  );
}
