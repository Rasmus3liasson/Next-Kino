import Head from "next/head";

import ConfirmPurchase from "@/components/ConfirmPurchase";
import Payment from "@/components/Payment";
import connectMongo from "@/util/connectMongo";
import Movie from "../../../../../models/movie";
import { MovieInterFace } from "@/types/movie";

export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  await connectMongo();

  //finds correct movie based on id
  const movie = await Movie.findOne({ title: id });

  return {
    props: {
      movie: JSON.parse(JSON.stringify(movie)), // Convert movie object to JSON serializable format
    },
  };
}

export default function SelectSeats({ movie }: { movie: MovieInterFace }) {
  return (
    <>
      <Head>
        <title>Lule Northern Light Cinema</title>
        <meta name="description" content="Kino project in next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ConfirmPurchase movieData={movie} />
      <Payment />
    </>
  );
}
