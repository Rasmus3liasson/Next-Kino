import Link from "next/link";
import style from "./style.module.scss";
import React from "react";
import Router from "next/router";
import { ScreeningType } from "@/util/types";

export default function Payment({ movieData }: { movieData: ScreeningType }) {
    const link = `/api/movies/${movieData.id}/payment`;

    function handleClick() {
        Router.push(link);
      }
    return (
        <section className={style.paymentContainer}>
            <h2 className={style.Headline}>Hur vill du betala?</h2>

            <ul>
                <li className={style.paymentMethod}><input type="radio"/>Betala med mina poäng</li>
                <li className={style.paymentMethod}><input type="radio"/>Bankkort</li>
                <li className={style.paymentMethod}><input type="radio"/>Swish</li>
            </ul>
            <p className ={style.savedCreditCardTitle}>Sparat bankkort</p>
            <div className="SavedCreditCard">
                <img className = {style.creditCardIssuerImage}src="/visa-logo.png" alt="Image of credit card company"></img>
                <p className={style.cardNumber}>**** **** **** 5454</p>
                <p className={style.creditCardIssuer}>Visa</p>
            </div>
            <p className={style.totalAmountToPay}>Totalt att betala</p>
            <button onClick={handleClick} className={style.confirmButton} formAction="Submit">Bekräfta</button>
            <button className={style.cancelButton} formAction="Cancel">Avbryt</button>    
        </section>
    )
}