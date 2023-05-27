import style from "./style.module.scss";
import React from "react";
import { ScreeningProps } from "@/types/screeningTypes";

export default function ConfirmPurchase({ screenings }: { screenings: ScreeningProps }) {
    return (
        <section className={style.purchase}>
            <h2 className={style.headline}>Bekräfta order</h2>
            <img className={style.poster} src={screenings.poster} alt="A picture of the movie cover" />
            <p className={style.movieTitle}>{screenings.title}</p>
        </section>
    );
  }