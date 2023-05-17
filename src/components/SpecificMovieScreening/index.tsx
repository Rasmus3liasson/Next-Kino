import style from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

// Helper component to render language flags
function LangComponent({
  language,
  form = "",
}: {
  language: string;
  form: string;
}) {
  return (
    <>
      {form}
      <Image alt={language} src={`/${language}.svg`} width={40} height={15} />
    </>
  );
}
function formatTime(time: string) {
  return `${new Date(time).getHours()}:${new Date(time).getMinutes()}`;
}

export default function SpecificMovieScreening({
  time,
  hrefLink,
  location,
}: {
  time: string;
  hrefLink: string;
  location: string;
}) {
  const screeningLink = `/movie/${hrefLink}/booking?screening=${Date.parse(
    time
  )}`;
  return (
    <li className={style.screeningListItem}>
      <h4 className={style.screeningText}>
        {formatTime(time)} {location}
      </h4>
      <span className={style.languageFlags}>
        <LangComponent language="gb" form="ENG Tal" />
        <LangComponent language="se" form="SV Text" />
      </span>
      <Link className={style.ticketButton} href={screeningLink}>
        <button>Biljetter</button>
      </Link>
    </li>
  );
}
