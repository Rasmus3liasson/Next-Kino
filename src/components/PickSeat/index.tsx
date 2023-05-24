import React, { useState } from "react";
import style from "./style.module.scss";
import Seat from "../Seat";
import { useRouter } from "next/router";

export default function PickSeat({ bookedSeats }: { bookedSeats: number[] }) {
  const [unavailable, setUnavailable] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const router = useRouter();
  const { id, date } = router.query;

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

  //post new seat booking
  async function postNewSeats() {
    try {
      await fetch(`/api/movies/${id}/bookings/${date}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          occupiedSeats: {
            userID: "nils",
            email: "rse@hotmail.com",
            movieTitle: id,
            date: date,
            seats: selectedSeats.sort((a: number, b: number) => a - b),
          },
        }),
      });
      console.log("Seats updated");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  console.log(selectedSeats);

  return (
    <section className={style.container}>
      {seatBoard()}
      <button onClick={postNewSeats}>hejsan</button>
    </section>
  );
}
