import style from "./style.module.scss";

export default function Seat() {
    return (
        <div className={style.seat}><span className={style.noRotation}>10</span></div>
    );
  }