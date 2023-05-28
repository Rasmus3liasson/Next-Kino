import { useState, useEffect, useContext } from "react";
import style from "./style.module.scss";
import React from "react";

interface SeatProps{
    seatId: number;
    onData: (data: number) => void;
    id: string;
    displayDate: string;
    dbResponse: number[];
}

const Seat: React.FC<SeatProps> = ({seatId, onData, id, displayDate, dbResponse}) => {
    const [selected, setIsSelected] = useState(false);
    const [unavailable, setUnavailable] = useState(false);
    const [unavailableArrayFromDb, setUnavailableArrayFromDb] = useState([])
    let currentState: String;

    // Array booked seats is logged in browser console
   console.log(dbResponse)
   
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
  
        setUnavailableArrayFromDb(dbResponse);
    
}

return (

    <div
        className = {`${stylingName}`}onClick={handleClick} ><span className={style.noRotation}></span> 
    </div>
)

};
  
export default Seat;