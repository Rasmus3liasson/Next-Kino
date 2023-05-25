import Head from "next/head";
import Saloon from "@/components/Saloon";
import BuyTickets from "@/components/BuyTickets";
import { ScreeningType } from "@/util/types";
import { getData } from "../api/screenings";
import { getMovies } from "../api/movies";
import getBookings from "../api/bookings/GET";
import Link from "next/link";
  
  // TODO: Add database functions here.
  const req = 1;
  const res = "";

  export async function getServerSideProps() {
    return {
      props: {
        screenings: (await getData()).at(0),
        movies: await getMovies()                        
      },
    };
  }


export default function SelectSeats({ selectedSeatIds, screenings}: { selectedSeatIds: [Number], screenings: ScreeningType[]}) {
    return(
      <>
        <Head>
          <title>Lule Northern Light Cinema</title>
          <meta name="description" content="Kino project in next.js" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Saloon screenings selectedSeatIds/>
        <BuyTickets screenings selectedSeatIds/>
      </>
    );
  }