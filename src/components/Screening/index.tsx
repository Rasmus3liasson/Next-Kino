import style from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ScreeningType } from "@/util/types";

/*
 * Component renders a Link component with elements with data
 * from the given prop movieData.
 * TODO: Fix image src to an URL matching the movie.
 */
export default function Screening({ movieData }: { movieData: ScreeningType }) {
  const link = `/movie/${movieData.id}/booking?screening=${movieData.screeningId}`;

  return (
    <Link style={{ textDecoration: "none" }} href={link} className={style.card}>
      <Image
        className={style.img}
        height={120}
        width={90}
        src={"/dummy.jpg"}
        alt={`The poster for ${movieData.title}`}
      />
      <h3 className={`${style.title} ${style.cardItem}`}>{movieData.title}</h3>
      <small className={`${style.date} ${style.cardItem}`}>
        {movieData.date}
      </small>
      <small className={`${style.location} ${style.cardItem}`}>
        {movieData.location}
      </small>
    </Link>
  );
}
