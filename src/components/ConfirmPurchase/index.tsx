import style from "./style.module.scss";
import PickSeat from "../PickSeat";
import Seat from "../Seat";

export default function confirmPurchase() {
    return (
        <section className={style.purchase}>
            <h2 className="Headline">Bekräfta order</h2>
            <img src="" alt="A picture of the movie cover" />
            <p>Movie title goes here</p>
            <p>price for selected seats</p>
            <p>Medlamsrabatt</p>
        </section>
    );
  }