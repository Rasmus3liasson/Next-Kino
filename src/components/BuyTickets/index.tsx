import Link from "next/link";
import style from "./style.module.scss";
import { ScreeningType } from "@/util/types";
import React from "react";
import Router from "next/router";


export default function BuyTickets({ screenings }: { screenings: ScreeningType }) {
  const Link = `/api/movies/${screenings.id}/payment`;
  

  function handleClick() {
    Router.push(Link);
  }
  return (
  
    <div className={style.container}>
      <hr className={style.divider}/>
      <h2 className={style.title }>{screenings.title}</h2>
      <p className={style.date}> Tid och datum: {screenings.date}</p>
      <button onClick={handleClick} className={style.confirmButton} formAction="Submit">Till kassan</button>
      <button className={style.cancelButton} formAction="Cancel">Avbryt</button>  
    </div>
  );
}


/*
export default function BuyTickets({ movieData }: { movieData: ScreeningType }) {
    const link = `/movie/${movieData.id}/booking?screening=${movieData.screeningId}`;
  
    return (
      <Link style={{ textDecoration: "none" }} href={link} className={style.card}>
        <h2 className={`${style.title} ${style.cardItem}`}>{movieData.title}</h2>
        <small className={`${style.date} ${style.cardItem}`}>
          {movieData.spokenLang}
        </small>
        <small className={`${style.location} ${style.cardItem}`}>
          {movieData.location+movieData.date}
        </small>
      </Link>
    );
  }
  */