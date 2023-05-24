import style from "./style.module.scss";
import PickSeat from "../PickSeat";
import Seat from "../Seat";
import React, { useContext, useState } from "react";
import { Booking } from "@/types/booking";
import BuyTickets from "../BuyTickets";
import { useRouter } from "next/router";
import { accountStateContext } from "@/pages/_app";

export default function Saloon({
  seatsData,
  movieData,
}: {
  seatsData: number[];
  movieData: Booking & { postNewSeats: () => Promise<void> };
}) {
  //acces accountstate
  const { accountState } = useContext(accountStateContext);

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
  //post new seat booking
  async function postNewSeats() {
    if (!accountState) {
      // if accountState is null
      console.log("Cannot proceed");
      return;
    }

    try {
      await fetch(`/api/movies/${id}/bookings/${date}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          occupiedSeats: {
            userID: accountState.name.first,
            email: accountState.email,
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

  return (
    <div className={style.saloon}>
      <div className={style.screen}>Bioduk</div>
      <PickSeat
        bookedSeats={seatsData}
        handleSeatClick={handleSeatClick}
        selectedSeats={selectedSeats}
      />
      <div className={style.legend}>
        <div className={style.seat_legend_free}></div>
        <p className={style.legendText_free}>Tillgänglig</p>
        <div className={style.seat_legend_unavailable}></div>
        <p className={style.legendText_unavailable}>Ej tillgänglig</p>
        <div className={style.seat_legend_selected}></div>
        <p className={style.legendText_selected}>Vald</p>
      </div>
      <BuyTickets postNewSeats={postNewSeats} movieData={movieData} />
    </div>
  );
}
