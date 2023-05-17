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
      <p className={style.date}> Plats: {screenings.location}</p>
      <button onClick={handleClick} className={style.confirmButton} formAction="Submit">Till kassan</button>
      <button className={style.cancelButton} formAction="Cancel">Avbryt</button>  
    </div>
  );
}