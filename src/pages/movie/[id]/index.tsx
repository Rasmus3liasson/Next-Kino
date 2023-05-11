import Head from "next/head";
import MovieInfoPage from "@/components/MovieInfo";

import { ScreeningType } from "@/util/types";
import { getData } from "@/pages/api/screenings";

export async function getServerSideProps() {
  const data = await getData();
  return {
    props: {
      screenings: data,
    },
  };
}

export default function MovieDetailsPage({
  screenings,
}: {
  screenings: ScreeningType[];
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
      <MovieInfoPage screenings={screenings} />
    </>
  );
}
