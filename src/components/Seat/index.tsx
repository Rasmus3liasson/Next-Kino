import { useState, useRef, useEffect } from "react";
import style from "./style.module.scss";
import React from "react";
import { ScreeningType } from "@/util/types";


export default function Seat({ seatId, movieData}: { seatId: Number, movieData: ScreeningType}) {
    const [selected, setIsSelected] = useState(false);
    const [counter, setSeatCounter] = useState(0);  
    const [unavailable, setUnavailable] = useState(false);

    const handleClick = () => {
        setIsSelected(!selected)
        updateUnavailableSeats()
        setSeatCounter(counter+1)
    }

    useEffect(() => {
        updateUnavailableSeats();
    });
  
    
async function updateUnavailableSeats() {
    event?.preventDefault();

    
    const dbResponse = await fetch("api/movies/Ariel/bookings/2023-08-16T12:16:21.856+00:00");                                                                                            
    const data = dbResponse.json();
    data.then((data) => {
        const occupiedSeats = data.occupiedSeats;
        for (let i=0;i<occupiedSeats.length;i++){
            if (occupiedSeats[i] === seatId){
                setUnavailable(true);
            }
        }
    })

    
}
return (

    <div
        className = {unavailable ? style.unavailableSeat : style.availableSeat} onClick={handleClick} ><span className={style.noRotation}></span>    
    </div>
)

};
  
