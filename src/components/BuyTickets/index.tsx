import Link from "next/link";
import style from "./style.module.scss";
import { ScreeningType } from "@/util/types";


export default function BuyTickets({ movieData }: { movieData: ScreeningType }) {
  const link = `/movie/${movieData.id}/booking?screening=${movieData.screeningId}`;
  
  return (
    <Link style={{ textDecoration: "none" }} href={link} className={style.card}>
      <h2 className={`${style.title} ${style.cardItem}`}>{movieData.title}</h2>
      <small className={`${style.date} ${style.cardItem}`}>
        {movieData.spokenLang}
      </small>
      <small className={`${style.location} ${style.cardItem}`}>
        {movieData.location+movieData.date}
      </small>
    </Link>
  );
}


/*
export default function BuyTickets({ movieData }: { movieData: ScreeningType }) {
    const link = `/movie/${movieData.id}/booking?screening=${movieData.screeningId}`;
  
    return (
      <Link style={{ textDecoration: "none" }} href={link} className={style.card}>
        <h2 className={`${style.title} ${style.cardItem}`}>{movieData.title}</h2>
        <small className={`${style.date} ${style.cardItem}`}>
          {movieData.spokenLang}
        </small>
        <small className={`${style.location} ${style.cardItem}`}>
          {movieData.location+movieData.date}
        </small>
      </Link>
    );
  }
  */