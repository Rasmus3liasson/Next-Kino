import { getMovie } from "@/util/dbAggregations";
import Head from "next/head";
import connectMongo from "@/util/connectMongo";
import Saloon from "@/components/Saloon";
import BuyTickets from "@/components/BuyTickets";
import { getTenScreenings } from "@/pages/api/screenings";
import { ScreeningProps } from "@/types/screeningTypes";
import { GetServerSidePropsContext } from "next";

    export async function getServerSideProps(context: GetServerSidePropsContext) {
        const {req, res, query, params} = context

        const id = params?.id ?? null;
        const displayDate = params?.displayDate ?? null;
      return {
        props: {
          screenings: await getTenScreenings(),
          id: id,
          displayDate: displayDate                       
        },
      };
    }

    export default function SelectSeats({ screenings, id, displayDate }: { screenings: ScreeningProps, id: string, displayDate: string}) {
      let seats: number[] = []
      const handleDataFromSaloon = (selectedSeatIds: number[]) => {
        let seats = selectedSeatIds;
      };

      return(
          <>
            <Head>
              <title>Lule Northern Light Cinema</title>
              <meta name="description" content="Kino project in next.js" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Saloon onData={handleDataFromSaloon} id={id} displayDate={displayDate}/>
            <BuyTickets screenings={screenings} selectedSeatIds={seats} id={id} displayDate={displayDate}/>
          </>
        );
      }