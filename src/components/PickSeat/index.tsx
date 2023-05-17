import Link from "next/link";
import style from "./style.module.scss";
import Seat from "../Seat";
import { ScreeningType } from "@/util/types";

export default function PickSeat( {movieData}: {movieData: ScreeningType} ) {
    return (
        <section className={style.container}>
            <div><Seat/> <Seat /><Seat/> <Seat /><Seat/> <Seat /><Seat/> <Seat /><Seat/> <Seat /></div>
            <div><Seat/> <Seat /><Seat/> <Seat /><Seat/> <Seat /><Seat/> <Seat /><Seat/> <Seat /><Seat /></div>
            <div><Seat/> <Seat /><Seat/> <Seat /><Seat/> <Seat /><Seat/> <Seat /><Seat/></div>
            <div><Seat/> <Seat /><Seat/> <Seat /><Seat/> <Seat /><Seat/> <Seat /><Seat/> <Seat /><Seat /></div>
            <div><Seat/> <Seat /><Seat/> <Seat /><Seat/> <Seat /><Seat/> <Seat /><Seat/> <Seat /><Seat /><Seat /><Seat /></div>
        </section>

    );
  }