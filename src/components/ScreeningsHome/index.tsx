import Screening from "../Screening/index";
import { ScreeningType } from "@/util/types";
import { useState } from "react";
import { movieDataArray } from "@/util/mockMovieData";
import style from "./style.module.scss";

//TODO: Change screenings to a state that fetches data
const screenings = movieDataArray;

export default function ScreeningsHome({
  screenings,
}: {
  screenings: ScreeningType[];
}) {
  return (
    <section className={style.container}>
      <h1 className={style.title}>Kommande visningar</h1>
      {screenings.map((screening: ScreeningType) => (
        <Screening movieData={screening} />
      ))}
      <button className={style.button}>Se alla visningar</button>
    </section>
  );
}
