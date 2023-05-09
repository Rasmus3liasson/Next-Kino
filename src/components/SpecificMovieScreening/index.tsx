import style from "./style.module.scss";
import Link from "next/link";
import { ScreeningType } from "@/util/types";
import LangComponent from "./LangComponent";

export default function SpecificMovieScreening({
  screening
}: {
  screening: ScreeningType;
}) {
    console.log(1, screening);
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
