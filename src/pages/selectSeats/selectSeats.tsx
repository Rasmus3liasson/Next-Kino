import Head from "next/head";
import Saloon from "@/components/Saloon";
import BuyTickets from "@/components/BuyTickets";
import { ScreeningType, MovieType } from "@/util/types";
import { getData } from "../api/screenings";
import { getMovies } from "../api/movies";
  
  // TODO: Add database functions here.
  export async function getServerSideProps() {
    return {
      props: {
        screenings: (await getData()).at(0),
        movies: await getMovies(),
      },
    };
  }

export default function SelectSeats({ screenings}: { screenings: ScreeningType[]}) {
    return(
      <>
        <Head>
          <title>Lule Northern Light Cinema</title>
          <meta name="description" content="Kino project in next.js" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Saloon screenings= {screenings}/>
        <BuyTickets screenings={screenings} />
      </>
    );
  }