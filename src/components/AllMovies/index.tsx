import style from "./style.module.scss";
import { useState } from "react";
import Movie from "../Movie";
import { MovieType } from "@/util/types";

/*
    Create a container for the component X
        Container component with an subcomponent for each movie X
    Container should have a Header, a list of links, and a button att the bottom. X
        use a button at the bottom and style it to look like text.  X
    Each item in the list should be a movieposter and be clickable X
        use Link to make each component of movie. X
    the bottom button should expand the list with all the said movies. X
        use a boolean state to expand the list with the props recieved from the server. X

*/

const howManyMoviesToShowAtStart = 6;
export default function AllMovies({ movieData }: { movieData: MovieType[] }) {
  const [expanded, setExpanded] = useState(false);
  const list = expanded
    ? movieData
    : movieData.slice(0, howManyMoviesToShowAtStart);

  function handleClick() {
    expanded ? setExpanded(false) : setExpanded(true);
  }
  return (
    <>
      <h1 className={style.title}>På Bio just nu</h1>
      <section className={style.container}>
        {list.map((movie: MovieType) => (
          <Movie key={movie.id} movieData={movie} />
        ))}
      </section>
      <button onClick={handleClick} className={style.button}>
        {expanded ? "Dölj filmer" : "Se fler filmer"}
      </button>
    </>
  );
}
