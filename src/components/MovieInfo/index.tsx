// import { useRouter } from "next/router";
import { getData } from "@/pages/api/screenings";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.scss";
import { useEffect, useState } from "react";



export default function MovieInfoPage({ screenings, params }) {
  // const router = useRouter();

  //NOTE: By passing context.params to MovieInfoPage as props,
  // we dont need to use 'useRouter'

  const { id } = params
  console.log('movieInfo, ', id);

  // NOTE: These arent stored as states. but are served depending on what prop is
  // passed to an img element in nested component in SpecificScreening.
  const [spokenLangFlag, setSpokenLangFlag] = useState("/english-flag.png");
  const [subLangFlag, setSubLangFlag] = useState("/swedish-flag.png");


  //NOTE: This is sort of implemented, it does store an array of dates for all screenings that are sorted by day.
  // Find the screening object that matches the ID in your path
  const screeningData = screenings.find(
    (screeningObj: { id: string | string[] | undefined | number }) =>
      screeningObj.id === id
  );

  //variable for date in database, might need to change slice with the correct database
  const dateFromDatabase = screeningData?.date.slice(11).replace("-", "/");

  //adds stars to array depending on rating
  const stars = [];
  for (let i = 0; i < screeningData.rating; i++) {
    stars.push(
      <Image src={"/rating-star.png"} alt="star" width={20} height={20} />
    );
  }

  //NOTE: This code should be implemented in the code that views date.
  //display "Idag" or "Imorgon" if screening date is the same
  //options to show 2 digit
  type typeOptions = {
    month: "2-digit";
    day: "2-digit";
  };
  const options: typeOptions = { month: "2-digit", day: "2-digit" };

  //convert todays date to match mock and design
  const date = new Date();
  const orderDate = date
    .toLocaleDateString("sv-SE", options)
    .split("/")
    .reverse()
    .toString()
    .replace(",", "/");

  //Tommorows date
  let dateTomorrow = new Date();
  dateTomorrow.setDate(dateTomorrow.getDate() + 1);
  const orderTomorrowDate = dateTomorrow
    .toLocaleDateString("sv-SE", options)
    .replace(/\./g, "/");

    //NOTE: This is served statically depending on what prop an img element has.
  // Determine which flag images to display based on the spokenLang and subLang
  useEffect(() => {
    if (screeningData.spokenLang === "SWE") {
      setSpokenLangFlag("/swedish-flag.png");
    }
    if (screeningData.subLang === "SWE") {
      setSubLangFlag("/swedish-flag.png");
    }
  }, [screeningData.spokenLang, screeningData.subLang]);

  return (
    <>
      <div className={style.container}>
        <div>
          <Image
            src={"/dummy.jpg"}
            alt="Poster of Image"
            width={400}
            height={500}
            />
          <p className={style.text}>{screeningData.title}</p>
          <p className={style.description}>{screeningData.description}</p>
          <div className={style.upcoming}>
            <p>
              Rating:
              {stars.length !== 0 &&
                stars.map((star, index) => <span key={index}>{star}</span>)}
            </p>
            <Link
              className={style.linkReviews}
              href={`/movie/${screeningData.id}/reviews`}
              >
              {
              // Will not implement rating/review. 
            }
              <p>Se resensioner</p>
            </Link>
          </div>
        </div>
        <div>
          <p className={style.text}>Kommande Visningar</p>
          <div className={style.upcoming}>
            <div>
              <div className={style.upcoming}>
                <p>
                  {dateFromDatabase === orderDate
                    ? "Idag"
                    : dateFromDatabase === orderTomorrowDate
                    ? "Imorgon"
                    : dateFromDatabase}
                </p>
                <p>{screeningData.location}</p>
              </div>
              {//implemented
              }
              <div className={style.time}>
                <p>{screeningData.date.slice(0, 5)}</p>
                <p>
                  Tal:
                  {
                    <Image
                      src={subLangFlag}
                      alt="Spoken language of movie"
                      width={30}
                      height={30}
                    />
                  }
                </p>
                <p>
                  Text:
                  {
                    <Image
                      src={spokenLangFlag}
                      alt="Text language of movie"
                      width={30}
                      height={30}
                    />
                  }
                </p>
              </div>
            </div>
            <div>{ //implemented
            }
              <Link
                href={`/movie/${screeningData.id}/booking?screening=${screeningData.screeningId}`}
              >
                <button className={style.ticketButton}>Biljetter</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
