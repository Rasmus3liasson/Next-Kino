import style from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ScreeningType } from "@/util/types";

// Helper component to render language flags
function LangComponent ({language, form = ''}: {language: string, form: string}) {
  return (
  <span>
      {form}
      <Image alt={language} src={`/${language}.svg`} width={40} height={15} />
  </span>
  )
}

export default function SpecificMovieScreening({
  screening
}: {
  screening: ScreeningType;
}) {
  const link = `/movie/${screening.id}/booking?screening=${screening.screeningId}`;
  return (
    <li>
      {/* <h4>
        {screening || "21:00"} {screening || "Salong 2"}
      </h4>
      <LangComponent language="gb" form="ENG Tal" />
      <LangComponent language="se" form="SV Text" />
      <Link passHref>
        <button href={link}>Biljetter</button>
      </Link> */}
    </li>
  );
}
