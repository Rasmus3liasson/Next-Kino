import { useState } from "react";
import { ScreeningType } from "@/util/types";
import SpecificMovieScreening from "../SpecificMovieScreening";

export default function AllSpecificMovieScreenings(
   { specificScreenings }: { specificScreenings: ScreeningType[]}
) {
    console.log(specificScreenings);
    const [expanded, setExpanded] = useState(false); 
    const list = expanded ? specificScreenings : specificScreenings.slice(0,3);

  return (
    <section>
      <h3>Kommande visningar</h3>
      {list.map((screening: ScreeningType) => {
        <SpecificMovieScreening screening={screening} />;
      })}
      <button>Se fler visningar</button>
    </section>
  );
}
 