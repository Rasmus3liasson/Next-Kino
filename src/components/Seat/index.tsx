import { useState, useRef, useEffect } from "react";
import style from "./style.module.scss";
import React from "react";
import { ScreeningType } from "@/util/types";


export default function Seat({ movieData }: { movieData: ScreeningType }) {
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

  
  async function updateUnavailableSeats() {
    event?.preventDefault();

    const occupiedSeats = await fetch(`/api/movies/${movieData.title}/bookings/${movieData.date}`);
    occupiedSeats.map
      
    });
    

    setIsSelected(true);
  }

    return (
        <div
            className = {selected ? style.selectedSeat : style.availableSeat} onClick={handleClick} ><span className={style.noRotation}></span>    
        </div>
    );
  }