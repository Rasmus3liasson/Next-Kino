import style from "./style.module.scss";
import React, { useContext } from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import { bookingInfoContext } from "@/util/bookingInfoContext";
import { accountStateContext } from "@/pages/_app";

export default function Payment() {
  const link = `/orderConfirmation`;
  const cancelLink = `/`;

  const router = useRouter();

  const { id, date } = router.query;
  console.log(id);
  console.log(date);

  function handleClick() {
    Router.push(link);
  }

  function handleCancelClick() {
    Router.push(cancelLink);
  }

  const { bookingInfo, setBookingInfo } = useContext(bookingInfoContext);
  const { accountState, setAccountState } = useContext(accountStateContext);
  //post new seat booking
  async function postNewSeats() {
    if (!accountState) {
      // if accountState is null
      console.log("Cannot proceed");
      return;
    }

    try {
      await fetch(`/api/movies/${id}/bookings/${date}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          occupiedSeats: {
            useerId: bookingInfo.userID,
            email: bookingInfo.email,
            movieTitle: bookingInfo.movieTitle,
            date: bookingInfo.date,
            seats: bookingInfo.seats,
          },
        }),
      });
      console.log("Seats updated");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <section className={style.paymentContainer}>
      <h2 className={style.Headline}>Hur vill du betala?</h2>
      <ul>
        <li className={style.paymentMethod}>
          <input type="radio" name="paymentMethod" />
          <span className={style.radioText}>Betala med mina poäng (250))</span>
        </li>
        <li className={style.paymentMethod}>
          <input type="radio" name="paymentMethod" />
          <span className={style.radioText}>Bankkort</span>
        </li>
        <li className={style.paymentMethod}>
          <input type="radio" name="paymentMethod" />
          <span className={style.radioText}>Swish</span>
        </li>
      </ul>
      <p className={style.savedCreditCardTitle}>Sparat bankkort</p>
      <div className={style.SavedCreditCard}>
        <Image
          className={style.creditCardIssuerImage}
          src="/visa-logo.png"
          alt="Image of credit card company"
          width={50}
          height={50}
        ></Image>
        <p className={style.cardNumber}>**** **** **** 5454</p>
      </div>
      <p className={style.totalAmountToPay}>Totalt att betala</p>
      <button
        onClick={() => {
          postNewSeats();
          handleClick();
        }}
        className={style.confirmButton}
        formAction="Submit"
      >
        Bekräfta
      </button>
      <button
        onClick={() => {
          handleCancelClick();
        }}
        className={style.cancelButton}
        formAction="Cancel"
      >
        Avbryt
      </button>
    </section>
  );
}
