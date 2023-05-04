import Screening from "../Screening/index";
import { ScreeningType } from "@/util/types";
import { useState, useEffect } from "react";

import style from "./style.module.scss";

//TODO: Change screenings to a state that fetches data
const howManyScreeningsToShowAtStart = 3;

export default function ScreeningsHome({
  screenings,
}: {
  screenings: ScreeningType[];
}) {
  const [list, setList] = useState<ScreeningType[]>([]);
  
  //Sets the initial amount of screenings on render
  //TODO connect to api
  useEffect(() => {
    setList([...screenings.slice(0,3)]);
    console.log(list);
  }, []);

  // When the component loads the first time, 3 screenings should show
  // useEffect to set screenings state to contain the three first indexes from data
  // when button is clicked, add the rest. 

  return (
    <section className={style.container}>
      <h1 className={style.title}>Kommande visningar</h1>
      {list.map((screening: ScreeningType) => (
        <Screening movieData={screening} />
      ))}
      <button className={style.button}>Se alla visningar</button>
    </section>
  );
}
