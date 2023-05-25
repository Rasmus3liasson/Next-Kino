import Head from "next/head";
import Saloon from "@/components/Saloon";
import BuyTickets from "@/components/BuyTickets";
import { ScreeningType } from "@/util/types";
import { getTenScreenings } from "../api/screenings";
import Link from "next/link";

const handleDataFromSaloon = (selectedSeatIds: Number[]) => {
  console.log('Data received from Saloon:', selectedSeatIds);
};

  export async function getServerSideProps() {
    return {
      props: {
        screenings: (await getTenScreenings()                   
      )},
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
        <Saloon screenings onData={handleDataFromSaloon}/>
        <BuyTickets screenings selectedSeatIds/>
      </>
    );
  }
  