import Head from "next/head";
import AllSpecificMovieScreenings from "@/components/AllSpecificMovieScreenings";
import { ScreeningType, SortedScreenings } from "@/util/types";
import { getData } from "@/pages/api/screenings";
import { getMovieScreenings } from "@/pages/api/upcoming-screenings";
import type { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {

  return {
    props: {
      movie: null,
      movieScreenings: await getMovieScreenings(context.params.id),
    },
  };
}

export default function MovieDetailsPage({
  movieScreenings, 
}: {
  movieScreenings: SortedScreenings;
}) {
  console.log('index.tsx-Movie' + movieScreenings)
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
      <AllSpecificMovieScreenings screenings={movieScreenings} />
      {/* <MovieInfoPage params={params} screenings={screenings} /> */}
    </>
  );
}
