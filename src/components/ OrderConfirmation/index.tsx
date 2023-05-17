import style from "./style.module.scss";
import React from "react";
import Router from "next/router";

export default function OrderConfirmation() {
    const link = `/`;

    function handleClick() {
        Router.push(link);
      }

    return (
        <section className={style.container}>
            <img src="/order-confirmed.png" alt="Big green circle with a checkmark inside" />
            <h2 className={style.Headline}>Order bekräftad</h2>
            <div className ={style.userInfo}>
                <p>Name</p>
                <p>UserName</p>
                <p>Mobilnummer</p>
                <p>0701234456</p>
                <p>Email</p>
                <p>UserMail</p>
                <p>Ordernummer</p>
                <p>UserName</p>
            </div>
            <button onClick={handleClick} className={style.returnButton} formAction="">Tillbaka till startsida</button>    
        </section>
    )
}