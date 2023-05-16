import style from "./style.module.scss";

export default function Payment() {
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
            <button className={style.confirmButton} formAction="Submit">Bekräfta</button>
            <button className={style.cancelButton} formAction="Cancel">Avbryt</button>    
        </section>
    )
}