import style from "./style.module.scss";
import PickSeat from "../PickSeat";
import Seat from "../Seat";
import React from "react";

export default function Saloon({ seatsData }: { seatsData: number[] }) {
  return (
    <div className={style.saloon}>
      <div className={style.screen}>Bioduk</div>
      <PickSeat bookedSeats={seatsData} />
      <div className={style.legend}>
        <div className={style.seat_legend_free}></div>
        <p className={style.legendText_free}>Tillgänglig</p>
        <div className={style.seat_legend_unavailable}></div>
        <p className={style.legendText_unavailable}>Ej tillgänglig</p>
        <div className={style.seat_legend_selected}></div>
        <p className={style.legendText_selected}>Vald</p>
      </div>
    </div>
  );
}
