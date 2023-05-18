import style from "./style.module.scss";
import { useState } from "react";
import Movie from "../Movie";
import { MovieType } from "@/util/types";

//Global variable that decided how many movies to show at start
const howManyMoviesToShowAtStart = 6;

/*
* Recieves an array of movie objects as props and renders a 
* Movie Component for each one.
*/
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
