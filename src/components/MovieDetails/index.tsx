import Image from "next/image";
import style from "./style.module.scss";
import { MovieProps } from "@/util/types";
import Rating from "@/components/Rating";

export default function MovieDetails({ movieData }: { movieData: MovieProps }) {
  return (
    <div className={style.container}>
      <Image
        className={style.img}
        priority
        src={movieData.poster}
        alt={`Poster of ${movieData.title}`}
        width={400}
        height={500}
      />
      <p className={style.title}>{movieData.title}</p>
      <Rating movieData={movieData} />
      <p className={style.description}>{movieData.description}</p>
    </div>
  );
}
