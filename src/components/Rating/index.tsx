import style from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { MovieData } from "@/util/types";

interface MovieProps {
  movieData: MovieData;
  rating: number;
}

const Movie: React.FC<MovieProps> = ({ movieData, rating }) => {
  const link = `/movie/${movieData.id}/reviews`;

  return (
    <Link href={link} passHref>
      <a className={style.card}>
        <Image
          className={style.img}
          height={120}
          width={90}
          src="/dummy.jpg"
          alt={`The poster for ${movieData.title}`}
        />
        <h3 className={`${style.title} ${style.cardItem}`}>
          {movieData.title}
        </h3>
        <small className={`${style.date} ${style.cardItem}`}>
          {movieData.date}
        </small>
        <small className={`${style.location} ${style.cardItem}`}>
          {movieData.location}
        </small>
        <small className={`${style.rating} ${style.cardItem}`}>
          IMDB Rating: {rating}
        </small>
      </a>
    </Link>
  );
};

export default Movie;
