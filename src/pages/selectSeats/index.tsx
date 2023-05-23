import Head from "next/head";
import Saloon from "@/components/Saloon";
import BuyTickets from "@/components/BuyTickets";
import { ScreeningType } from "@/util/types";

import getBookings from "../api/bookings/GET";
import Link from "next/link";
import connectMongo from "@/util/connectMongo";
import Booking from "../../../models/booking";

// TODO: Add database functions here.

export async function getServerSideProps() {
  const res = await fetch(
    "http://localhost:3000/api/movies/Ariel/bookings/2023-08-16T12:16:21.856+00:00"
  );
  const seats = await res.json();
  const seatsData = seats.occupiedSeats;

  return {
    props: {
      seatsData,
    },
  };
}

export default function SelectSeats({ seatsData }: { seatsData: any }) {
  return (
    <>
      <Head>
        <title>Lule Northern Light Cinema</title>
        <meta name="description" content="Kino project in next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Saloon seatsData={seatsData} />
      <BuyTickets screenings />
    </>
  );
}
