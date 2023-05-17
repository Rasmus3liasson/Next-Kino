import Head from "next/head";
import OrderConfirmation from "@/components/ OrderConfirmation";
import ConfirmPurchase from "@/components/ConfirmPurchase";
import { ScreeningType } from "@/util/types";
import { getData } from "../api/screenings";

  
  export async function getServerSideProps() {
    return {
      props: {
        screenings: (await getData()).at(0)
      },
    };
  }

export default function orderConfirmed({ screenings}: { screenings: ScreeningType[]}) {
    return(
      <>
        <Head>
          <title>Lule Northern Light Cinema</title>
          <meta name="description" content="Kino project in next.js" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <OrderConfirmation screenings={screenings}/>
      </>
    ); 
  }