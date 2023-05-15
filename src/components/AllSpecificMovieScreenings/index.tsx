import { useState } from "react";
import { ScreeningType } from "@/util/types";
import SpecificMovieScreening from "../SpecificMovieScreening";
import style from "./style.module.scss";
import sortByDayAndTime from "@/util/datehandler";

type DayScreenings = {
  date: string;
  screenings: ScreeningType[];
};

// pass n to render
// render the date and then n
// if n + 1 is the same day as n
// render n + 1
// if n + 1 is not the same day as n
// render the date of n + 1 
// and render n + 1


// Helper component to render screenings by day
function ScreeningDay({ screeningDay, movie }: {screeningDay: string[], movieId: string}) {
  
  const dayList = screeningDay;
  console.log('ScreeningDay',dayList)
  return (
    <>
      <h4>{screeningDay[0]}</h4>
      <ul className={style.day}>
        {dayList.map((time) => {
          return <SpecificMovieScreening time={time} hrefLink={movieId} />;
        })}
      </ul>
    </>
  );
}
/*
 *  Renders a list of screenings for each day with the help
 *   of the ScreeningDay component.
 */
export default function AllSpecificMovieScreenings({
  movie,
}: {
  movie: ScreeningType[];
}) {
  console.log('Movie object', movie)
  const screenings = movie[0].screenings;
  const movieId = movie[0].id;
  const [expanded, setExpanded] = useState(false);

  //TODO: This is static at the moment, needs to be changed into a result
  const list = expanded ? screenings : screenings.slice(0, 2);

  function handleClick() {
    expanded ? setExpanded(false) : setExpanded(true);
  }
  console.log('AllSpecificScreenings',list)
  return (
    <section className={style.screeningList}>
      <h3>Kommande visningar</h3>
      <ScreeningDay screeningDay={list} movieId={movieId} />;
      {/* {list.map((screening: string) => {
      })} */}
      <button className={style.showMoreButton} onClick={handleClick}>
        Se fler visningar
      </button>
    </section>
  );
}
