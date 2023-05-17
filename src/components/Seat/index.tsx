import { useState, useEffect } from "react";
import style from "./style.module.scss";
import React from "react";

export default function Seat() {
    const [selected, setSelected] = useState(false);  


    function handleClick() {
        selected ? setSelected(false) : setSelected(true);
      }
    return (
        <div onClick={handleClick} className={style.seat}><span className={style.noRotation}></span></div>
    );
  }