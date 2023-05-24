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

  async function postNewSeats() {
    try {
      await fetch(
        "api/movies/Forrest%20Gump/bookings/2023-08-17T12:16:21.856+00:00/update",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            occupiedSeats: {
              userID: "rasmus",
              email: "ras.muse@jfslk.com",
              movieTitle: "Forrest Gump",
              date: "2023-08-17T12:16:21.856+00:00",
              seats: selectedSeats.sort((a: number, b: number) => a - b),
            },
          }),
        }
      );
      console.log("Seats updated");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <section className={style.container}>
      {seatBoard()}
      <button onClick={postNewSeats}>hejsan</button>
    </section>
  );
}

async function bookedSeats() {
  const res = await fetch(
    "api/movies/Ariel/bookings/2023-08-16T12:16:21.856+00:00"
  );
  const dataSeats = await res.json();
  return dataSeats;
}
bookedSeats();
