import Head from "next/head";
import OrderConfirmation from "@/components/OrderConfirmation";
import { ScreeningType } from "@/util/types";
import { getTenScreenings } from "@/pages/api/screenings";


  export async function getServerSideProps() {
    return {
      props: {
        screenings: (await getTenScreenings())
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
        <OrderConfirmation />
      </>
    ); 
  }