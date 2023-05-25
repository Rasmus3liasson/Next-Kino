import React, { useState } from "react";
import style from "./style.module.scss";
import Seat from "../Seat";

export default function PickSeat({
  bookedSeats,
  handleSeatClick,
  selectedSeats,
}: {
  bookedSeats: number[];
  handleSeatClick: () => void;
  selectedSeats: number[];
}) {
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
            bookedSeats={bookedSeats}
            key={seat}
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

  return (
    <>
      <section className={style.container}>{seatBoard()}</section>
    </>
  );
}
