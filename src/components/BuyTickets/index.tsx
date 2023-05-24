import style from "./style.module.scss";
import React from "react";
import Router, { useRouter } from "next/router";

export default function BuyTickets({
  movieData,
  postNewSeats,
}: {
  movieData: any;
  postNewSeats: () => Promise<void>;
}) {
  const Link = `/payment`;

  function handleClick() {
    Router.push(Link);
  }

  const router = useRouter();
  const { date } = router.query;

  //dislpays the time that match url
  const sameScreening = movieData.screenings.find(
    (screening: { displayDate: string }) => {
      return screening.displayDate === date;
    }
  );

  return (
    <div className={style.container}>
      <hr className={style.divider} />
      <h2 className={style.title}>{movieData.title}</h2>
      <p className={style.date}>
        {" "}
        Tid och datum:{" "}
        {sameScreening.displayDate.slice(0, 16).replace("T", " ")}
      </p>
      <p className={style.date}> Plats: {movieData.screenings[0].saloon}</p>
      <button
        onClick={() => {
          postNewSeats();
          handleClick();
        }}
        className={style.confirmButton}
        formAction="Submit"
      >
        Till kassan
      </button>
      <button className={style.cancelButton} formAction="Cancel">
        Avbryt
      </button>
    </div>
  );
}
