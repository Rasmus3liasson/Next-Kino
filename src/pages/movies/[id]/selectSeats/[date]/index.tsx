import Head from "next/head";
import Saloon from "@/components/Saloon";
import BuyTickets from "@/components/BuyTickets";
import connectMongo from "@/util/connectMongo";
import Movie from "../../../../../../models/movie";
import { BookingInterface } from "@/types/booking";
import Booking from "../../../../../../models/booking";

// TODO: Add database functions here.

export async function getServerSideProps(context) {
  const { id } = context.params;

  await connectMongo();

  //finds correct movie based on id
  const movie = await Movie.findOne({ title: id });

  const seatsData = await Booking.find({ movieTitle: id });

  return {
    props: {
      seatsData: JSON.parse(JSON.stringify(seatsData)),
      movie: JSON.parse(JSON.stringify(movie)), // Convert movie object to JSON serializable format
    },
  };
}

export default function SelectSeats({
  seatsData,
  movie,
}: {
  seatsData: number[];
  movie: BookingInterface;
}) {
  return (
    <>
      <Head>
        <title>Lule Northern Light Cinema</title>
        <meta name="description" content="Kino project in next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Saloon seatsData={seatsData} movieData={movie} />
    </>
  );
}
