import { useState } from "react";
import { ScreeningType } from "@/util/types";
import SpecificMovieScreening from "../SpecificMovieScreening";
import style from "./style.module.scss";
import sortByDayAndTime from "@/util/datehandler";

type DayScreenings = {
  date: string;
  screenings: ScreeningType[];
};

const dates = [
  new Date('2023-05-10T09:30:00'), 
  new Date('2023-05-10T14:45:00'), 
  new Date('2023-05-10T16:15:00'), 
  new Date('2023-05-11T10:00:00'), 
  new Date('2023-05-11T14:30:00'), 
  new Date('2023-05-11T11:30:00'), 
  new Date('2023-05-12T13:45:00'),
];
console.log(sortByDayAndTime(dates));
// pass n to render
// render the date and then n
// if n + 1 is the same day as n
// render n + 1
// if n + 1 is not the same day as n
// render the date of n + 1 
// and render n + 1


// Helper component to render screenings by day
function ScreeningDay(screeningDay: DayScreenings) {
  const dayList = screeningDay.screenings;
  return (
    <>
      <h4>{screeningDay.date}</h4>
      <ul className={style.day}>
        {dayList.map((screening) => {
          return <SpecificMovieScreening screening={screening} />;
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
  specificScreenings,
}: {
  specificScreenings: ScreeningType[];
}) {
  console.log(sortByDayAndTime(dates));

  // console.log(specificScreenings);
  const [expanded, setExpanded] = useState(false);
  const list = expanded ? specificScreenings : specificScreenings.slice(0, 2);

  function handleClick() {
    expanded ? setExpanded(false) : setExpanded(true);
  }
  return (
    <section className={style.screeningList}>
      <h3>Kommande visningar</h3>
      {data.map((screening: string, index: number) => {
         return <ScreeningDay screeningDay={screening} />;
      })}
      <button className={style.showMoreButton} onClick={handleClick}>
        Se fler visningar
      </button>
    </section>
  );
}
