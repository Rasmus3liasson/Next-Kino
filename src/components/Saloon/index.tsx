import style from "./style.module.scss";
import PickSeat from "../PickSeat";
import Seat from "../Seat";
import React from "react";
import Link from "next/link";
import { MovieType, ScreeningType } from "@/util/types";

export default function Saloon({ screenings }: { screenings: ScreeningType }) {
    return (
        <div className={style.saloon}>
            <div className={style.screen}>Bioduk</div>
            <PickSeat movieData={screenings}/> 
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
