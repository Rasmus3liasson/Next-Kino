import style from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ScreeningProps } from "../../types/screeningTypes";
import { DateTime } from "luxon";

/*
 * Component renders a Link component with elements with data
 * from the given prop screeningData.
 * TODO: Fix image src to an URL matching the movie.
 */
export default function Screening({
  screeningData,
}: {
  screeningData: ScreeningProps;
}) {
  const screeningId = screeningData.screening;
  const link = `/movies/${screeningData.title}/booking/${Date.parse(screeningId)}`;
  return (
    <Link style={{ textDecoration: "none" }} href={link} className={style.card}>
      <Image
        className={style.img}
        height={520}
        width={500}
        priority
        src={screeningData.poster}
        alt={`The poster for ${screeningData.title}`}
      />
      <h3 className={`${style.title} ${style.cardItem}`}>
        {screeningData.title}
      </h3>
      <small className={`${style.date} ${style.cardItem}`}>
        {DateTime.fromISO(screeningData.screening, { zone: "utc" }).toFormat(
          "dd LLL HH:mm"
        )}
      </small>
      <small className={`${style.location} ${style.cardItem}`}>
        {screeningData.location}
      </small>
    </Link>
  );
}
