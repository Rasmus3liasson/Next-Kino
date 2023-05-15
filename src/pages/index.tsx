import Head from "next/head";
import Saloon from "@/components/Saloon";
import ScreeningsHome from "../components/ScreeningsHome";
import { ScreeningType } from "@/util/types";
import { getData } from "./api/screenings";
import BuyTickets from "@/components/BuyTickets";
import Payment from "@/components/Payment";
import confirmPurchase from "@/components/ConfirmPurchase";

// TODO: Add database functions here. 
export async function getServerSideProps() {
  const data = await getData();
  return {
    props: {
      screenings: data,
      selectedSeats: data
    },
  };
}

export default function Home({ screenings }: { screenings: ScreeningType[] }) {
  return (
    <>
      <Head>
        <title>Lule Northern Light Cinema</title>
        <meta name="description" content="Kino project in next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Payment></Payment>

    </>
  );
}
