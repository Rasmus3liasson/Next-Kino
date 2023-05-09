import { useState } from "react";
import style from "./style.module.scss";

export default function Seat() {
    const [available, setAvailability] = useState(true);
    const changeAvailability = () => setAvailability(false);
    return (
        <div className={style.seat}><span className={style.noRotation}>10</span></div>
    );
  }