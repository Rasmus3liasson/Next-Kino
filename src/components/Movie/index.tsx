import Link from "next/link";
import Image from "next/image";
import style from './style.module.scss';
import { MovieType } from "@/util/types";

export default function Movie(movieData: MovieType) {
    const link = `/movie/${movieData.id}`
  return (
    <>
      <Link
        style={{ textDecoration: "none" }}
        href={link}
        className={style.card}
      >
        <Image
          className={style.img}
          height={120}
          width={90}
          src={movieData.poster || "/dummy.jpg"}
          alt={`The poster for ${movieData.title}`}
        />
      </Link>
    </>
  );
}
