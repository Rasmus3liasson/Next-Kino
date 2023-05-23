import React, { useState } from "react";
import style from "./style.module.scss";
import Seat from "../Seat";

export default function PickSeat() {
  const [unavailable, setUnavailable] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const handleSeatClick = (seatValue: number) => {
    if (!unavailable) {
      setSelectedSeats((arr) => {
        if (arr.includes(seatValue)) {
          return arr.filter((seat) => seat !== seatValue); //removing seat
        } else {
          return [...arr, seatValue]; // adding seat to array
        }
      });
    }
  };

  const seatBoard = () => {
    const rows = 5;
    const seatsPerRow = 10;
    const seats = [];

    let seatNumber = 1;

    for (let row = 1; row <= rows; row++) {
      const rowSeats = [];

      for (let seat = 1; seat <= seatsPerRow; seat++) {
        rowSeats.push(
          <Seat
            value={seatNumber}
            onSeatClick={handleSeatClick}
            isSelected={selectedSeats.includes(seatNumber)}
          />
        );
        seatNumber++;
      }

      seats.push(<div>{rowSeats}</div>);
    }

    return seats;
  };

  return <section className={style.container}>{seatBoard()}</section>;
}
