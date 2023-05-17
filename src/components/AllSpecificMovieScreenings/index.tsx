import { useState } from "react";
import SpecificMovieScreening from "../SpecificMovieScreening";
import style from "./style.module.scss";
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

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

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

  //TODO: This is static at the moment, needs to be changed into a result
  const list = expanded
    ? screenings.dayScreenings
    : screenings.dayScreenings.slice(0, 2);
  function handleClick() {
    expanded ? setExpanded(false) : setExpanded(true);
  }
  return (
    <section className={style.screeningList}>
      <h3>Kommande visningar</h3>
      {list.map((screeningDay) => {
        const dayOfScreening = new Date(screeningDay[0]).toLocaleDateString();
        return (
          <div className={style.dayContainer}>
            <h6 className={style.dateHeader}>
              {today.toLocaleDateString() === dayOfScreening
                ? "Idag"
                : tomorrow.toLocaleDateString() === dayOfScreening
                ? "Imorgon"
                : dayOfScreening.slice(0, 5)}
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
