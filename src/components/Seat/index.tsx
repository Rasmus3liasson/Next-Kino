import { useState, useRef, useEffect } from "react";
import style from "./style.module.scss";
import React from "react";

export default function Seat() {
    const [selected, setSelected] = useState(false);  

    const handleClick = () => {
        setSelected(!selected)
      }

    return (
        <div
            className = {selected ? style.selectedSeat : style.availableSeat} onClick={handleClick} ><span className={style.noRotation}></span>    
        </div>
    );
  }