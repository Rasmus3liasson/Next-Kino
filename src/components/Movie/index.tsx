import Link from "next/link";
import Image from "next/image";
import style from "./style.module.scss";
import { MovieType } from "@/util/types";

//TODO: Change src on line :21 to correct property for images.

/*
 *  Renders a link for from given props that has a background of a
 *  movie poster. The poster can either be an image served statically
 *  or a link to an external source. Each instance of this component is
 *  clickable and routes to /movies/:id
 */
export default function Movie({ movieData }: { movieData: MovieType }) {
  const link = `/movies/${movieData.title}`;
  return (
    <figure className={style.card}>
      <Link
        style={{ textDecoration: "none" }}
        passHref
        href={link}
      >
        <Image
          className={style.img}
          height={120}
          width={90}
          priority
          src={movieData.poster}
          alt={`The poster for ${movieData.title}`}
        />
      </Link>
    </figure>
  );
}
