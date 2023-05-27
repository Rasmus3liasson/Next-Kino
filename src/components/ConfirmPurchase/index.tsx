import style from "./style.module.scss";
import React from "react";
import { MovieProps } from "@/util/types";

export default function ConfirmPurchase({ movieData }: { movieData: MovieProps }) {
    return (
        <section className={style.purchase}>
            <h2 className={style.headline}>Bekräfta order</h2>
            <img className={style.poster} src={movieData.poster} alt="A picture of the movie cover" />
            <p className={style.movieTitle}>{movieData.title}</p>
        </section>
    );
  }