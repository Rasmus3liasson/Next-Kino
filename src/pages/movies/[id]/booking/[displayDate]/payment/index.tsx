import Head from "next/head";
import Payment from "@/components/Payment";
import ConfirmPurchase from "@/components/ConfirmPurchase";
import { ScreeningProps } from "@/types/screeningTypes";
import { getTenScreenings } from "@/pages/api/screenings";

  export async function getServerSideProps() {
    return {
      props: {
        screenings: await getTenScreenings()
      },
    };
  }

export default function SelectSeats({ screenings}: { screenings: ScreeningProps}) {
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
