import { useState } from "react";
import { ScreeningType } from "@/util/types";
import SpecificMovieScreening from "../SpecificMovieScreening";
import style from './style.module.scss';

export default function AllSpecificMovieScreenings({
  specificScreenings,
}: {
  specificScreenings: ScreeningType[];
}) {
  console.log(specificScreenings);
  const [expanded, setExpanded] = useState(false);
  const list = expanded ? specificScreenings : specificScreenings.slice(0, 3);

  function handleClick() {
    expanded ? setExpanded(false) : setExpanded(true);
  }
  return (
    <section className={style.screeningList}>
      <h3>Kommande visningar</h3>
      <ul>
        <SpecificMovieScreening screening={specificScreenings[0]} />
        {/* {list.map((screening: ScreeningType) => {
        <SpecificMovieScreening screening={screening} />;
      })} */}
      </ul>
      <button className={style.showMoreButton} onClick={handleClick}>Se fler visningar</button>
    </section>
  );
}
