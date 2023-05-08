import Link from "next/link";
import Image from "next/image";
import style from './style.module.scss';
import { MovieType } from "@/util/types";

//TODO: Change src on line :21 to correct property for images.

export default function Movie({movieData}: {movieData: MovieType}) {
    const link = `/movies/${movieData.id}`
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
          src={"/dummy.jpg"}
          alt={`The poster for ${movieData.title}`}
        />
      </Link>
    </>
  );
}
