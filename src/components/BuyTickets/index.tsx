import style from "./style.module.scss";
import React, { useContext } from "react";
import Router, { useRouter } from "next/router";
import { accountStateContext } from "@/pages/_app";

export default function BuyTickets({
  movieData,
  postNewSeats,
}: {
  movieData: any;
  postNewSeats: () => Promise<void>;
}) {
  const { accountState } = useContext(accountStateContext);
  const router = useRouter();
  const { id, date } = router.query;

  const Link = `/movies/${id}/payment/${date}`;

  function handleClick() {
    Router.push(Link);
  }

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
        //disabled button if user isnt logged in
        disabled={!accountState}
        onClick={() => {
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
