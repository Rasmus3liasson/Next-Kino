import style from "./style.module.scss";
import React from "react";

export default function OrderConfirmation() {
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
            <button className={style.returnButton} formAction="">Tillbaka till startsida</button>    
        </section>
    )
}