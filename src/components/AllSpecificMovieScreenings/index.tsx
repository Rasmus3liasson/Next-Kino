import { useState } from "react";
import SpecificMovieScreening from "../SpecificMovieScreening";
import style from "./style.module.scss";
import { DateTime } from 'luxon';
import { SortedScreenings } from "@/util/types";

function ScreeningDay({
  screeningDay,
  movieId,
  location,
}: {
  screeningDay: string[];
  movieId: string;
  location: string;
}) {
  const dayList = screeningDay;
  return (
    <ul className={style.day}>
      {dayList.map((time) => {
        return (
          <SpecificMovieScreening
            location={location}
            time={time}
            hrefLink={movieId}
          />
        );
      })}
    </ul>
  );
}
/*
*  Renders a list of screenings for each day with the help
*   of the ScreeningDay component.
*/
export default function AllSpecificMovieScreenings({
  screenings,
}: {
  screenings: SortedScreenings;
}) {
  const [expanded, setExpanded] = useState(false);
  const parsedScreenings: string[][] = JSON.parse(screenings.dayScreenings);
  
  const today = DateTime.now().toISODate();
  const tomorrow = DateTime.now().plus({days: 1}).toISODate();

  //TODO: This is static at the moment, needs to be changed into a result
  const list = expanded
    ? parsedScreenings
    : parsedScreenings.slice(0, 2);
  function handleClick() {
    expanded ? setExpanded(false) : setExpanded(true);
  }
  return (
    <section className={style.screeningList}>
      <h3>Kommande visningar</h3>
      {list.map((screeningDay) => {
        const dayOfScreening = DateTime.fromISO(screeningDay[0]).toISODate();
        return (
          <div className={style.dayContainer}>
            <h6 className={style.dateHeader}>
              {today === dayOfScreening
                ? "Idag"
                : tomorrow === dayOfScreening
                ? "Imorgon"
                : DateTime.fromISO(dayOfScreening).toFormat('dd/MM')}
            </h6>
            <ScreeningDay
              movieId={screenings.movieId}
              screeningDay={screeningDay}
              location={screenings.location}
            />
          </div>
        );
      })}
      <button className={style.showMoreButton} onClick={handleClick}>
        Se fler visningar
      </button>
    </section>
  );
}
