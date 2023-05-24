import Head from "next/head";

import ConfirmPurchase from "@/components/ConfirmPurchase";
import Payment from "@/components/Payment";
/* import Payment from "@/components/Payment";
import ConfirmPurchase from "@/components/ConfirmPurchase";
import { ScreeningType } from "@/util/types"; */

/* export async function getServerSideProps() {
  return {
    props: {
      screenings: (await getData()).at(0),
    },
  };
} */

export default function SelectSeats({}) {
  return (
    <>
      <>
        <Head>
          <title>Lule Northern Light Cinema</title>
          <meta name="description" content="Kino project in next.js" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {/*  <ConfirmPurchase screenings={screenings}/>
      <Payment screenings= {screenings}/> */}
        <h1>hejsam</h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
        sunt. Sunt exercitationem, nemo asperiores necessitatibus impedit
        repellendus cupiditate harum accusantium omnis amet neque delectus
        aliquid, repudiandae itaque quae sequi adipisci. Harum eaque eligendi
        necessitatibus debitis culpa magnam accusamus iste, officia quibusdam
        amet possimus impedit quia nobis earum tenetur deleniti voluptas
        mollitia animi, et deserunt ipsa iusto consectetur vel in? Sunt. Laborum
        rerum nam fugiat ut voluptates voluptas repellendus odio commodi at
        neque nisi laboriosam adipisci eaque sequi provident, vel tenetur eum
        animi optio praesentium temporibus illo tempore veritatis! Repellendus,
        quaerat! Fuga quas vitae tempora rerum dolor aperiam unde harum nostrum
        temporibus facilis incidunt eaque itaque soluta deleniti a modi animi
        similique provident numquam odio, odit placeat distinctio vero? Rem,
        fugit? Impedit ab dolorum, in rem ullam, voluptatem ratione expedita
        architecto officia exercitationem enim optio dicta laboriosam labore
        illum accusamus obcaecati eius blanditiis tempore ut iusto nesciunt.
        Ipsam dicta eaque error!
      </>
      <ConfirmPurchase />
      <Payment />
    </>
  );
}
