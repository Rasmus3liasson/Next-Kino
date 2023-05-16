import { useState } from "react";
import { ScreeningType } from "@/util/types";
import SpecificMovieScreening from "../SpecificMovieScreening";
import style from "./style.module.scss";
import { SortedScreenings } from "@/util/types";

// pass n to render
// render the date and then n
// if n + 1 is the same day as n
// render n + 1
// if n + 1 is not the same day as n
// render the date of n + 1 
// and render n + 1


// Helper component to render screenings by day
function ScreeningDay({ screeningDay, movieId }: {screeningDay: string[], movieId: string}) {
  
  const dayList = screeningDay;
  console.log('ScreeningDay',dayList)
  return (
      <ul className={style.day}>
        {dayList.map((time) => {
          return <SpecificMovieScreening time={time} hrefLink={movieId} />;
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

  //TODO: This is static at the moment, needs to be changed into a result
  const list = expanded ? screenings.dayScreenings : screenings.dayScreenings.slice(0, 2);
  console.log('AllSpecific, ' + list)
  function handleClick() {
    expanded ? setExpanded(false) : setExpanded(true);
  }
  return (
    <section className={style.screeningList}>
      <h3>Kommande visningar</h3>
      {list.map((screeningDay) => {
        return(
          <div>
              <h4>{screeningDay[0].toLocaleString()}</h4>
              <ScreeningDay movieId={screenings.movieId} screeningDay={screeningDay} />
          </div>
        )
      })}
      <button className={style.showMoreButton} onClick={handleClick}>
        Se fler visningar
      </button>
    </section>
  );
}
