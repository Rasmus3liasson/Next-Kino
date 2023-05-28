import style from "./style.module.scss";
import { ScreeningProps } from "@/types/screeningTypes";
import React, { useState } from "react";
import  { useRouter } from 'next/router';
import { NumberContextProvider } from "@/util/NumberContext";
import { MovieProps } from "@/util/types";

export default function BuyTickets({ screenings, selectedSeatIds, id, displayDate, movieData}: { screenings: ScreeningProps, selectedSeatIds: number[], id: string, displayDate: string, movieData: MovieProps}) {
  const [seats, setSeats] = useState(selectedSeatIds)
  const testSeats = [1,2];
  let dateAndTime = new Date(parseInt(displayDate))
  //console.log(dateAndTime)
  //const ISOdate = dateAndTime.toISOString();
  //const offsetFormattedDate = ISOdate.replace("Z", "+00:00");
  const dateAndTimeString = (dateAndTime.toLocaleDateString() + " " + dateAndTime.toLocaleTimeString())
  const Link = `/movies/${id}/booking/${dateAndTime}/payment?${testSeats}`;
  const router = useRouter();
  function handleClick() {
    setSeats(selectedSeatIds)
    console.log("BuyTickets_after: " + seats)
    router.push(Link);
  }
  return (
    
    <div className={style.container}>
      <NumberContextProvider numberArray={selectedSeatIds}></NumberContextProvider>
      <hr className={style.divider}/>
      <h2 className={style.title }>{movieData.title}</h2>
      <p className={style.date}> Tid och datum: {dateAndTimeString}</p>
      <p className={style.date}> Plats: {"Stora salongen"}</p>
      <button onClick={handleClick} className={style.confirmButton} formAction="Submit">Till kassan</button>
      <button className={style.cancelButton} formAction="Cancel">Avbryt</button>  
    </div>
    
  )
}