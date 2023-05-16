import Head from "next/head";

import ShowReviews from "@/components/ShowReviews";

export default function MovieDetailsPage({}: {}) {
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
      <ShowReviews />
    </>
  );
}
