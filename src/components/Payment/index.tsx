import style from "./style.module.scss";

export default function Payment() {
    return (
        <section className={style.paymentContainer}>
            <h2 className={style.Headline}>Hur vill du betala?</h2>
            <img src="" alt="A picture of the movie cover" />
            <ul>
                <li><input type="radio"/>Betala med mina poäng</li>
                <li><input type="radio"/>Bankkort</li>
                <li><input type="radio"/>Swish</li>
            </ul>
            <p>Sparat bankkort</p>
            <div className="SavedCreditCard">1
               <img src="../public/visa-logo.png" alt="Image of credit card company"></img>
           <p className = "cardNumber">**** **** **** 5454</p>
               <p>Visa</p>
            </div>
            <p className = "totalAmountToPay">Totalt att betala</p>
            <button formAction="Submit">Bekräfta</button>
            <button formAction="Cancel">Avbryt</button>    
        </section>
    )
}