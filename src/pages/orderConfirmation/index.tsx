import Head from "next/head";
import OrderConfirmation from "@/components/ OrderConfirmation";

import { ScreeningType } from "@/util/types";

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function orderConfirmed() {
  return (
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
