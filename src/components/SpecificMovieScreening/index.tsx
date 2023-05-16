import style from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ScreeningType } from "@/util/types";

// Helper component to render language flags
function LangComponent({
  language,
  form = "",
}: {
  language: string;
  form: string;
}) {
  return (
    <span className={style.languageFlags}>
      {form}
      <Image alt={language} src={`/${language}.svg`} width={40} height={15} />
    </span>
  );
}

export default function SpecificMovieScreening({
  time, hrefLink
}: {
  time: string, hrefLink: string;
}) {
  console.log('timecheck ' + Date.parse(time))
  const screeningLink = `/movie/${hrefLink}/booking?screening=${Date.parse(time)}`;
  return (
    <li className={style.screeningListItem}>
      <h4 className={style.screeningText}>
        {time.toLocaleString().split(" ")[0]}{" "}
        {/* {screening.location || "Salong 2"} */}
      </h4>
      <LangComponent language="gb" form="ENG Tal" />
      <LangComponent language="se" form="SV Text" />
      <Link className={style.ticketButton} href={screeningLink}>
        <button>Biljetter</button>
      </Link>
    </li>
  );
}
