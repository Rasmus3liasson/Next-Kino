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
    console.log("ID:" + id);
    console.log("DispDate: "+ displayDate);
    const newMillisecondValue = parseInt(displayDate) - (0); //Same time but UTC timezone
    let date = new Date(newMillisecondValue)
    const ISOdate = date.toISOString();
    const offsetFormattedDate = ISOdate.replace("Z", "+00:00");

    console.log("ConvertedDate: "+ offsetFormattedDate);
    const url = `api/movies/${id}/bookings/${offsetFormattedDate}`;
    const hardURL = "api/movies/Ariel/bookings/2023-06-20T16:46:39.129+00:00"
    const haraURL = "api/movies/Million Dollar Baby/bookings/2023-06-26T21:54:30.117+00:00"
    console.log(url);
    const dbResponse = await fetch(offsetFormattedDate);
                                                                                
    const data = dbResponse.json();
    data.then((data) => {
        const occupiedSeats = data.occupiedSeats;
        console.log(occupiedSeats);
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