import { useState, useEffect } from "react";
import style from "./style.module.scss";
import React from "react";

interface SeatProps{
    seatId: Number;
    onData: (data: Number) => void;
    id: string;
    displayDate: string;
}

const Seat: React.FC<SeatProps> = ({seatId, onData, id, displayDate}) => {

    const [selected, setIsSelected] = useState(false);
    const [unavailable, setUnavailable] = useState(false);
    let currentState: String;

    const handleClick = () => {
        setIsSelected(!selected);
        const data = seatId;
        onData(data);    
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

    const date = new Date(displayDate)
    const dbResponse = await fetch(`api/movies/${id}/bookings/${date}`)
                                                                                
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
  
export default Seat;