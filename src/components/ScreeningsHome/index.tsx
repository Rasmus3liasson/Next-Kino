import Screening from "../Screening/index";
import { ScreeningType } from "@/util/types";
import { useState } from "react";
import style from "./style.module.scss";

const howManyScreeningsToShowAtStart = 3;

export default function ScreeningsHome({
  screenings,
}: {
  screenings: ScreeningType[];
}) {
  const [expanded, setExpanded] = useState(false);
  const list = expanded
    ? screenings
    : screenings.slice(0, howManyScreeningsToShowAtStart);

  // Handler for updating list with more screenings
  function handleClick() {
    expanded ? setExpanded(false) : setExpanded(true);
  }

  // [x] When the component loads the first time, 3 screenings should show
  // [x]useEffect to set screenings state to contain the three first indexes from data
  // [x]when button is clicked, add the rest.

  return (
    <section className={style.container}>
      <h1 className={style.title}>Kommande visningar</h1>
      {list.map((screening: ScreeningType) => (
        <Screening key={screening.id} movieData={screening} />
      ))}
      <button onClick={handleClick} className={style.button}>
        {expanded ? "Dölj visningar" : "Se fler visningar"}
      </button>
    </section>
  );
}
