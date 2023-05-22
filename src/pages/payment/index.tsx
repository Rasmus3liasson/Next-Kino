import Head from "next/head";
import Payment from "@/components/Payment";
import ConfirmPurchase from "@/components/ConfirmPurchase";
import { ScreeningType } from "@/util/types";
import { getData } from "../api/screenings";
  
  export async function getServerSideProps() {
    return {
      props: {
        screenings: (await getData()).at(0)
      },
    };§§§§§§§§
  }

  const bookingData: Booking[] = Booking.map((review: booking) => ({
    reviewerText: Bookigg.reviewerText,
    reviewerName: review.reviewerName,
    postDate: review.postDate.toString(), //converts date
    rating: review.rating,
  }));
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