import { useState } from "react";
import { ScreeningType } from "@/util/types";
import SpecificMovieScreening from "../SpecificMovieScreening";
import style from "./style.module.scss";
import { SortedScreenings } from "@/util/types";

// Helper component to render screenings by day
function ScreeningDay({
  screeningDay,
  movieId,
}: {
  screeningDay: string[];
  movieId: string;
}) {
  const dayList = screeningDay;
  return (
    <ul className={style.day}>
      {dayList.map((time) => {
        return <SpecificMovieScreening time={time} hrefLink={movieId} />;
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
  console.log(tomorrow);

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
          <div>
            <h4>
              {today.toLocaleDateString() === dayOfScreening
                ? "Idag"
                : tomorrow.toLocaleDateString() === dayOfScreening
                ? "Imorgon"
                : dayOfScreening}
            </h4>
            <ScreeningDay
              movieId={screenings.movieId}
              screeningDay={screeningDay}
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
