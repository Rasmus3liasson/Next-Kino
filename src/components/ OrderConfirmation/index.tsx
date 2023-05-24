import style from "./style.module.scss";
import React, { useContext } from "react";
import Router from "next/router";
import Image from "next/image";
import { accountStateContext } from "@/pages/_app";

export default function OrderConfirmation() {
  const { accountState } = useContext(accountStateContext);
  const link = `/`;

  function handleClick() {
    Router.push(link);
  }

  //random order number
  const min = 10000; // Minimum 5-digit number
  const max = 99999; // Maximum 5-digit number
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  //format date
  const date = new Date();
  const year = date.getFullYear();
  const orderDate = date.getDate() + "/" + date.getMonth() + "-" + year;

  return (
    <section className={style.container}>
      <Image
        src="/order-confirmed.png"
        alt="Big green circle with a checkmark inside"
        width={300}
        height={300}
      />
      <h2 className={style.Headline}>Order bekräftad</h2>
      <div className={style.userInfo}>
        <p>Namn</p>
        <p>{accountState?.name.first + " " + accountState?.name.last}</p>

        <p>Email</p>
        <p>{accountState?.email}</p>
        <p>Ordernummer</p>
        <p>{randomNumber}</p>
        <p>Orderdatum</p>
        <p>{orderDate}</p>
      </div>
      <button
        onClick={handleClick}
        className={style.returnButton}
        formAction=""
      >
        Tillbaka till startsida
      </button>
    </section>
  );
}
