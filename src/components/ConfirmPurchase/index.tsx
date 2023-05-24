import style from "./style.module.scss";
import React from "react";
import { ScreeningType } from "@/util/types";
import Image from "next/image";
import { MovieInterFace } from "@/types/movie";

export default function ConfirmPurchase({
  movieData,
}: {
  movieData: MovieInterFace;
}) {
  return (
    <section className={style.purchase}>
      <h2 className={style.headline}>Bekräfta order</h2>
      <Image
        alt="poster of movie"
        src={movieData.imgUrl}
        width={300}
        height={300}
      ></Image>
    </section>
  );
}
