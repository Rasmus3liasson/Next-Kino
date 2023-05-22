import style from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ScreeningProps } from "../../../types/screeningTypes";

/*
 * Component renders a Link component with elements with data
 * from the given prop screeningData.
 * TODO: Fix image src to an URL matching the movie. 
 */
export default function Screening({ screeningData }: { screeningData: ScreeningProps }) {
  const link = `/movie/${screeningData.title}/booking?screening=${Date.parse(screeningData.screening)}`;
  return (
    <Link style={{ textDecoration: "none" }} href={link} className={style.card}>
      <Image
        className={style.img}
        height={120}
        width={90}
        priority
        src={screeningData.poster}
        alt={`The poster for ${screeningData.title}`}
      />
      <h3 className={`${style.title} ${style.cardItem}`}>{screeningData.title}</h3>
      <small className={`${style.date} ${style.cardItem}`}>
        {screeningData.screening}
      </small>
      <small className={`${style.location} ${style.cardItem}`}>
        {screeningData.location}
      </small>
    </Link>
  );
}
