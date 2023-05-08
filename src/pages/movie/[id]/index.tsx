import { useRouter } from "next/router";
import { getData } from "@/pages/api/screenings";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps() {
  const data = await getData();
  return {
    props: {
      screenings: data,
    },
  };
}

export default function MovieBookingPage({ screenings }) {
  const router = useRouter();
  const { id } = router.query;

  // Find the screening object that matches the ID in your path
  const screeningData = screenings.find(
    (screeningObj: { id: string | string[] | undefined | number }) =>
      screeningObj.id === id
  );

  //adds stars to array depending on rating
  const stars = [];
  for (let i = 0; i < screeningData.rating; i++) {
    stars.push(
      <Image src={"/rating-star.png"} alt="star" width={20} height={20} />
    );
  }

  // Determine which flag images to display based on the spokenLang and subLang codes
  let spokenLangFlag = null;
  let subLangFlag = null;

  //check what language it is
  switch (screeningData.spokenLang) {
    case "ENG":
      spokenLangFlag = (
        <Image
          src={"/english-flag.png"}
          alt="English flag"
          width={30}
          height={30}
        />
      );
      break;
    case "SWE":
      spokenLangFlag = (
        <Image
          src={"/swedish-flag.png"}
          alt="English flag"
          width={30}
          height={30}
        />
      );
      break;
    default:
      break;
  }

  switch (screeningData.subLang) {
    case "ENG":
      subLangFlag = (
        <Image
          src={"/english-flag.png"}
          alt="English flag"
          width={30}
          height={30}
        />
      );
      break;
    case "SWE":
      subLangFlag = (
        <Image
          src={"/swedish-flag.png"}
          alt="English flag"
          width={30}
          height={30}
        />
      );
      break;
    // Add cases for other languages here
    default:
      break;
  }

  return (
    <>
      <div>
        <Image
          src={"/dummy.jpg"}
          alt="Poster of Image"
          width={400}
          height={500}
        />
        <p>Title: {screeningData.title}</p>
        <div>
          <p>
            Rating:
            {stars.length !== 0 &&
              stars.map((star, index) => <span key={index}>{star}</span>)}
          </p>
          <p>Se resensioner</p>
        </div>
      </div>
      <div>
        <h2>Kommande Visningar</h2>
        <p>{screeningData.date.substring(11)}</p>
        <div>
          <p>{screeningData.date.slice(0, 5)}</p>
          <p>Tal: {spokenLangFlag}</p>
          <p> Text: {subLangFlag}</p>
          <Link
            href={`/movie/${screeningData.id}/booking?screening=${screeningData.screeningId}`}
          >
            <button>Biljetter</button>
          </Link>
        </div>
      </div>
    </>
  );
}
