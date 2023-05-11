import { useRouter } from "next/router";
import { getData } from "@/pages/api/screenings";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.scss";
import { useState } from "react";

export async function getServerSideProps() {
  const data = await getData();
  return {
    props: {
      screenings: data,
    },
  };
}

export default function Review({ screenings }) {
  const router = useRouter();
  const { id } = router.query;

  // Find the screening object that matches the ID in your path
  const screeningData = screenings.find(
    (screeningObj: { id: string | string[] | undefined | number }) =>
      screeningObj.id === id
  );
  console.log(screeningData.id);

  return (
    <>
      <section>
        <h1>hej</h1>
      </section>
    </>
  );
}
