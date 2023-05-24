import Head from "next/head";
import Saloon from "@/components/Saloon";
import BuyTickets from "@/components/BuyTickets";
import connectMongo from "@/util/connectMongo";
import Movie from "../../../../../../models/movie";
import { Booking } from "@/types/booking";

// TODO: Add database functions here.

export async function getServerSideProps(context) {
  const { id, date } = context.params;
  const res = await fetch(
    `http://localhost:3000/api/movies/${id}/bookings/${date}`
  );
  const seats = await res.json();
  const seatsData = seats.occupiedSeats;

  await connectMongo();

  //finds correct movie based on id
  const movie = await Movie.findOne({ title: id });

  return {
    props: {
      seatsData,
      movie: JSON.parse(JSON.stringify(movie)), // Convert movie object to JSON serializable format
    },
  };
}

export default function SelectSeats({
  seatsData,
  movie,
}: {
  seatsData: number[];
  movie: Booking;
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
