import style from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import { DateTime } from "luxon";
import { SpecificScreening } from "../../../types/screeningTypes";

export default function SpecificMovieScreening({
  screening,
  hrefLink,
}: {
  screening: SpecificScreening;
  hrefLink: string;
}) {
  const screeningLink = `/movies/${hrefLink}/booking?screening=${Date.parse(
    screening.displayDate
  )}`;
  const spokenLang = screening.spokenLang;
  const subtitLang = screening.subtitLang;
  return (
    <li className={style.screeningListItem}>
      <h4 className={style.screeningText}>
        {formatTime(screening.displayDate)} {screening.saloon}
      </h4>
      <span className={style.languageFlags}>
        <LangComponent
          language={spokenLang ? spokenLang.slice(0, 2) : ""}
          form={spokenLang ? spokenLang.slice(3) + " Tal" : "Utan Tal"}
        />
        <LangComponent
          language={subtitLang ? subtitLang.slice(0, 2) : ""}
          form={subtitLang ? subtitLang.slice(3) + " Text" : "Utan Text"}
        />
      </span>
      <Link className={style.ticketButton} href={screeningLink}>
        <button>Biljetter</button>
      </Link>
    </li>
  );
}

// Helper component to render language flags
function LangComponent({
  language,
  form = "",
}: {
  language: string;
  form: string;
}) {
  if (form === "Utan Text") {
    return <>{form}</>;
  }
  return (
    <>
      {form}
      <Image alt={language} src={`/${language}.svg`} width={40} height={15} />
    </>
  );
}
// Helper to format time
function formatTime(time: string) {
  return `${DateTime.fromISO(time).toFormat("HH:mm")}`;
}
