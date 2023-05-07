import style from "./style.module.scss";
import PickSeat from "../PickSeat";
import Seat from "../Seat";

export default function Saloon() {
    return (
        <section className={style.saloon}>
            <div className={style.screen}></div>
            <PickSeat></PickSeat>
            <div className={style.legend}>
                <div className={`$style.noRotation $style.free`}><span className={style.legendText}>Tillgänglig</span><Seat></Seat></div>
                <div className={`$style.noRotation $style.unavailable`}><span className={style.legendText}>Ej tillgänglig</span><Seat></Seat></div>
                <div className={`$style.noRotation $style.selected`}><span className={style.legendText}>Vald</span><Seat></Seat></div>
            </div>
        </section>
    );
  }