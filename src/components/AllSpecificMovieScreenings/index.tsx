import { useState } from "react";
import { ScreeningType } from "@/util/types";
import SpecificMovieScreening from "../SpecificMovieScreening";

export default function AllSpecificMovieScreenings(
   { specificScreenings }: { specificScreenings: ScreeningType[]}
) {
    console.log(specificScreenings);
    const [expanded, setExpanded] = useState(false); 
    const list = expanded ? specificScreenings : specificScreenings.slice(0,3);

function handleClick(){
    expanded ? setExpanded(false) : setExpanded(true);
}
  return (
    <section>
      <h3>Kommande visningar</h3>
      <SpecificMovieScreening screening={specificScreenings[0]}/>
      {/* {list.map((screening: ScreeningType) => {
        <SpecificMovieScreening screening={screening} />;
      })} */}
      <button onClick={handleClick}>Se fler visningar</button>
    </section>
  );
}
 