import { useState, useEffect } from "react";
import style from "./style.module.scss";
import React from "react";

export default function Seat({
  value,
  onSeatClick,
  isSelected,
}: {
  value: number;
  onSeatClick: (seatValue: number) => void;
  isSelected: boolean;
}) {
  const [unavailable, setUnavailable] = useState(false); // to see if seat is already selected

  useEffect(() => {
    const getBookedSeats = async () => {
      try {
        const res = await fetch(
          "api/movies/Ariel/bookings/2023-08-16T12:16:21.856+00:00"
        );
        const { occupiedSeats } = await res.json();
        setUnavailable(occupiedSeats.includes(value));
      } catch (error) {
        console.error("Error", error);
      }
    };

    getBookedSeats();
  }, [value]);

  //check that only free chair can be selected
  const handleClick = () => {
    if (!unavailable) {
      onSeatClick(value);
    }
  };

  return (
    <div
      className={`${style.seat} ${
        isSelected ? style.selectedSeat : style.availableSeat
      } ${unavailable && style.unavailableSeat}`}
      onClick={handleClick}
    ></div>
  );
}
