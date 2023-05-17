import Image from "next/image";
import style from "./style.module.scss";
import { ScreeningType } from "@/util/types";

export default function MovieDetails({ movieData } :{movieData: ScreeningType}) {
    console.log('MovieDetails', movieData);
  return (
    <div className={style.container}>
      <Image
      className={style.img}
        src={movieData.poster}
        alt="Poster of Image"
        width={400}
        height={500}
      />
      <p className={style.title}>{movieData.title}</p>
      <p className={style.description}>{movieData.description}</p>
    </div>
  );
}
