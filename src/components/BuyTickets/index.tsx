import style from "./style.module.scss";
import { ScreeningProps } from "@/types/screeningTypes";
import React from "react";
import  { useRouter } from 'next/router';
import { NumberContextProvider } from "@/util/NumberContext";

export default function BuyTickets({ screenings, selectedSeatIds, id, displayDate}: { screenings: ScreeningProps, selectedSeatIds: number[], id: string, displayDate: string}) {
  const date = new Date(parseInt(displayDate))
  const ISOdate = date.toISOString();
  const offsetFormattedDate = ISOdate.replace("Z", "+00:00");
  const Link = `/movies/${id}/booking/${offsetFormattedDate}/payment`;const router = useRouter();
  function handleClick() {
    router.push(Link);
  }
  return (
    
    <div className={style.container}>
      <NumberContextProvider numberArray={selectedSeatIds}></NumberContextProvider>
      <hr className={style.divider}/>
      <h2 className={style.title }>{screenings.title}</h2>
      <p className={style.date}> Tid och datum: {screenings.date}</p>
      <p className={style.date}> Plats: {screenings.location}</p>
      <button onClick={handleClick} className={style.confirmButton} formAction="Submit">Till kassan</button>
      <button className={style.cancelButton} formAction="Cancel">Avbryt</button>  
    </div>
    
  )
}