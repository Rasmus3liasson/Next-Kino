import { useState, useRef, useEffect } from "react";
import style from "./style.module.scss";
import React from "react";

export default function Seat() {
    const [selected, setIsSelected] = useState(false);
    const [counter, setSeatCount] = useState(0);  

    const handleClick = () => {
        setIsSelected(!selected)
        if (selected){
            counter + 1
        }else{
            counter-1
        }
    }

    //post new review
  async function updateReview() {
    event?.preventDefault();

    const newBooking = {
        email: User
        movieTitle: " ",//title supposed to be here, cant use scer
        date: new Date(),
        seats: [6,7,8,9]
      };
    await fetch(`/api/reviews/${id}/sendReview`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedReviews),
    });

    setIsSelected(false);
  }

    return (
        <div
            className = {selected ? style.selectedSeat : style.availableSeat} onClick={handleClick} ><span className={style.noRotation}></span>    
        </div>
    );
  }