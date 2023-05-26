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
                <p>Namn</p>
                <p>Stig björn Jansson</p>
                <p>Mobilnummer</p>
                <p>0701234456</p>
                <p>Email</p>
                <p>stig-bjorn.jansson@stiiiiig.nu</p>
                <p>Ordernummer</p>
                <p>127354424</p>
                <p>Orderdatum</p>
                <p>2023-02-27</p>
            </div>
            <button onClick={handleClick} className={style.returnButton} formAction="">Tillbaka till startsida</button>    
        </section>
    )
}