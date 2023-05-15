import style from "./style.module.scss";
import PickSeat from "../PickSeat";
import Seat from "../Seat";

export default function Saloon() {
    return (
        <div className={style.saloon}>
            <div className={style.screen}>Bioduk</div>
            <PickSeat></PickSeat>
            <div className={style.legend}>  sš
                <div className={style.seat_legend_free}><Seat></Seat></div>
                <p className={style.legendText_free}>Tillgänglig</p>
                <div className={style.seat_legend_unavailable}><Seat></Seat></div>
                <p className={style.legendText_unavailable}>Ej tillgänglig</p>
                <div className={style.seat_legend_selected}><Seat></Seat></div>
                <p className={style.legendText_selected}>Vald</p>
               
            </div>
        </div>
    );
  }