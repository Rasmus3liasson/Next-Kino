import { useState } from "react";
import SpecificMovieScreening from "../SpecificMovieScreening";
import style from "./style.module.scss";
import { DateTime } from "luxon";
import {
  SortedScreeningsByDay,
  SortedScreenings,
} from "../../types/screeningTypes";

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
  const parsedProps = JSON.parse(screenings)[0];

  const today = DateTime.now().toISODate();
  const tomorrow = DateTime.now().plus({ days: 1 }).toISODate();

  const list = expanded
    ? parsedProps.screeningsByDay
    : parsedProps.screeningsByDay.slice(0, 2);

  function handleClick() {
    expanded ? setExpanded(false) : setExpanded(true);
  }
  return (
    <section className={style.screeningList}>
      <h3>Kommande visningar</h3>
      {list.map((screeningsByDay, index: number) => {
        const dayOfScreening = DateTime.fromISO(
          screeningsByDay.date
        ).toISODate();
        return (
          <div key={index} className={style.dayContainer}>
            <h6 className={style.dateHeader}>
              {today === dayOfScreening
                ? "Idag"
                : tomorrow === dayOfScreening
                ? "Imorgon"
                : dayOfScreening !== null &&
                  DateTime.fromISO(dayOfScreening).toFormat("dd LLL")}
            </h6>
            <ScreeningDay
              movieId={parsedProps.title}
              screeningDay={screeningsByDay}
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

// Helper Component
function ScreeningDay({
  screeningDay,
  movieId,
}: {
  screeningDay: SortedScreeningsByDay;
  movieId: string;
}) {
  const dayList = screeningDay.screenings;
  return (
    <ul className={style.day}>
      {dayList.map((screening, index: number) => {
        return (
          <SpecificMovieScreening
            key={index}
            screening={screening}
            hrefLink={movieId}
          />
        );
      })}
    </ul>
  );
}
