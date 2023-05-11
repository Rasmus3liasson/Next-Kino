/* import { useState, useEffect } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { ScreeningType } from "@/util/types";

interface MovieProps {
  movieData: ScreeningType;
}

const Rating: React.FC<MovieProps> = ({ movieData }) => {
  const [rating, setRating] = useState("");

  useEffect(() => {
    fetch(`/api/reviews/${movieData.id}`)
      .then((response) => response.json())
      .then((data) => {
        const imdbRating = data.rating;
        setRating(imdbRating);
      })
      .catch((error) => {
        console.log("Error fetching movie rating:", error);
      });
  }, [movieData.id]);

  const link = `/movie/${movieData.id}/reviews`;

  return (
    <Link href={link} passHref>
      <a className={style.card}>
        <div className={style.rating}>IMDB Rating: {rating || "N/A"}</div>
      </a>
    </Link>
  );
};

export default Rating;
 */

import { useState, useEffect } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { ScreeningType } from "@/util/types";
import { movieDataArray } from "src/util/mockMovieData.tsx";

interface MovieProps {
  movieData: ScreeningType;
}

const Rating: React.FC<MovieProps> = ({ movieData }) => {
  const [rating, setRating] = useState("");

  useEffect(() => {
    const movie = movieDataArray.find((movie) => movie.id === movieData.id);
    if (movie) {
      setRating(movie.rating);
    }
  }, [movieData.id]);

  const link = `/movie/${movieData.id}/reviews`;

  return (
    <Link href={link} passHref>
      <a className={style.card}>
        <div className={style.rating}>Rating: {rating || "N/A"}</div>
      </a>
    </Link>
  );
};

export default Rating;
