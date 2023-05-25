import Screening from "../Screening/index";
import { ScreeningProps } from "../../types/screeningTypes";
import { useState } from "react";
import style from "./style.module.scss";

const howManyScreeningsToShowAtStart = 3;

/*
 * Component accepts an array of screenings and render a
 * Screening component for each index. It renders an amount
 * at start given in the variable above and then fills the rest
 * when the button is clicked at the bottom.
 */
export default function ScreeningsHome({
  screenings,
}: {
  screenings: ScreeningProps[];
}) {
  const [expanded, setExpanded] = useState(false);
  const list = expanded
    ? screenings
    : screenings.slice(0, howManyScreeningsToShowAtStart);

  // Handler for updating list with more screenings
  function handleClick() {
    expanded ? setExpanded(false) : setExpanded(true);
  }

  return (
    <section className={style.container}>
      <h1 className={style.title}>Kommande visningar</h1>
      {list.map((screening: ScreeningProps, index: number) => (
        <Screening key={index} screeningData={screening} />
      ))}
      <button onClick={handleClick} className={style.button}>
        {expanded ? "Dölj visningar" : "Se fler visningar"}
      </button>
    </section>
  );
}
