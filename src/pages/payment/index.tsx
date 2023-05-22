import Head from "next/head";
import Payment from "@/components/Payment";
import ConfirmPurchase from "@/components/ConfirmPurchase";
import { ScreeningType } from "@/util/types";
import { getData } from "../api/screenings";
import getUser from "../api/auth/GetUser";
import User from "../../../models/user";

  
  export async function getServerSideProps() {
    return {
      props: {
        screenings: (await getData()).at(0),
        User: (await getUser)
      },
    };
  }

  // New booking object
  const newBooking = {
    email: User.,
    movieTitle: " ",//title supposed to be here, cant use scer
    date: new Date(),
    seats: [6,7,8,9]
  };

export default function SelectSeats({ screenings}: { screenings: ScreeningType[]}) {
    return(
      <>
        <Head>
          <title>Lule Northern Light Cinema</title>
          <meta name="description" content="Kino project in next.js" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ConfirmPurchase screenings={screenings}/>
        <Payment screenings= {screenings}/>
      </>
    ); 
  }