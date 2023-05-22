import Head from "next/head";
import Saloon from "@/components/Saloon";
import BuyTickets from "@/components/BuyTickets";
import { ScreeningType } from "@/util/types";
import { getData } from "../api/screenings";
import { getMovies } from "../api/movies";
import getBookings from "../api/bookings/GET";
import Link from "next/link";
import getUser from "../api/auth/GetUser";
import User from "../../../models/user";

  
  // TODO: Add database functions here.
  const req = 1;
  const res = "";

  export async function getServerSideProps() {
    return {
      props: {
        screenings: (await getData()).at(0),
        movies: await getMovies(),
        bookings: await getBookings(req,res),
        User: (await getUser)                            
      },
    };
  }

  const fetchUnavailableSeats = () => {
    fetch 
  }

export default function SelectSeats({ screenings}: { screenings: ScreeningType[]}) {
    return(
      <>
        <Head>
          <title>Lule Northern Light Cinema</title>
          <meta name="description" content="Kino project in next.js" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Saloon props={getServerSideProps}/>
        <BuyTickets props={getServerSideProps} />
      </>
    );
  }