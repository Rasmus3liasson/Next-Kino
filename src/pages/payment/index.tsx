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
