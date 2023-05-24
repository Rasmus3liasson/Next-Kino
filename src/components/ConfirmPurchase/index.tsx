import style from "./style.module.scss";
import React from "react";
import { ScreeningType } from "@/util/types";

export default function ConfirmPurchase({}) {
  return (
    <section className={style.purchase}>
      <h2 className={style.headline}>Bekräfta order</h2>
      {/*   <img
        className={style.poster}
        src={}
        alt="A picture of the movie cover"
      /> */}
      <p className={style.movieTitle}>{}</p>
      <p>price for selected seats</p>
      <p>Medlamsrabatt</p>
    </section>
  );
}
