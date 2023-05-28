import Head from "next/head";
import Payment from "@/components/Payment";
import ConfirmPurchase from "@/components/ConfirmPurchase";
import { ScreeningProps } from "@/types/screeningTypes";
import { getTenScreenings } from "@/pages/api/screenings";
import { GetServerSidePropsContext } from "next";
import { getMovie } from "@/util/dbAggregations";
import { MovieProps } from "@/util/types";
import { useRouter } from "next/router";

  export async function getServerSideProps(context: GetServerSidePropsContext) {
    const {req, res, query, params} = context;
    const id = params?.id ?? 0;
    const displayDate = params?.displayDate ?? null;
    return {
      props: {
        screenings: await getTenScreenings(),
        id: id,
        displayDate: displayDate,   
        movieData: await getMovie(id.toString()),
      },
    };
  }

  function getQuery(): string{
    const router = useRouter();
    const { query } = router;
    return query.toString()
  }

export default function SelectSeats({ screenings, id, movieData}: { screenings: ScreeningProps, id: string, movieData: MovieProps}) {
    return(
      <>
        <Head>
          <title>Lule Northern Light Cinema</title>
          <meta name="description" content="Kino project in next.js" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ConfirmPurchase movieData={movieData}/>
        <Payment screenings= {screenings} movieId={id} selectedSeatIds={getQuery()}/>
      </>
    ); 
  }
