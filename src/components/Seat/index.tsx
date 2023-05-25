import { useState, useRef, useEffect } from "react";
import style from "./style.module.scss";
import React from "react";
import { ScreeningType } from "@/util/types";


export default function Seat({ seatId, movieData}: { seatId: Number, movieData: ScreeningType}) {
    const [selected, setIsSelected] = useState(false);
    const [unavailable, setUnavailable] = useState(false);
    let currentState: String;

    const handleClick = () => {
        setIsSelected(!selected)
    }

    useEffect(() => {
        updateUnavailableSeats();
    });

   
        if(unavailable){
            currentState = "unavailable"        
        }else if(selected){
            currentState = "selected"
        }else{
            currentState = "available"
        }
        let stylingName = '';
        if (currentState === "unavailable"){
            stylingName = style.unavailableSeat;
        }else if(currentState === "selected"){
            stylingName = style.selectedSeat;
        }else{
            stylingName = style.availableSeat;
        }
    
  
    
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
        className = {`${stylingName}`}onClick={handleClick} ><span className={style.noRotation}></span> 
    </div>
)

};
  
