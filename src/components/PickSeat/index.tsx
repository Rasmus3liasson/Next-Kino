import Link from "next/link";
import style from "./style.module.scss";
import Seat from "../Seat";
import { ScreeningType } from "@/util/types";

export default function PickSeat( {movieData}: {movieData: ScreeningType} ) {
    
    return (
        <section className={style.container}>
            <div><Seat seatId={1}/> <Seat seatId={2}/><Seat seatId={3}/> <Seat seatId={4}/><Seat seatId={5}/> <Seat seatId={6}/><Seat seatId={7}/> <Seat seatId={8}/><Seat seatId={9}/> <Seat seatId={10}/></div>
            <div><Seat seatId={11}/> <Seat seatId={12} /><Seat seatId={13}/> <Seat seatId={14}/><Seat seatId={15}/> <Seat seatId={16}/><Seat seatId={17}/> <Seat seatId={18}/><Seat seatId={19}/> <Seat seatId={20}/><Seat seatId={21}/></div>
            <div><Seat seatId={22}/> <Seat seatId={23}/><Seat seatId={24}/> <Seat seatId={25}/><Seat seatId={26}/> <Seat seatId={27}/><Seat seatId={28}/> <Seat seatId={29}/><Seat seatId={30}/></div>
            <div><Seat seatId={31}/> <Seat seatId={32}/><Seat seatId={33}/> <Seat seatId={34}/><Seat seatId={35}/> <Seat seatId={36}/><Seat seatId={37}/> <Seat seatId={38}/><Seat seatId={39}/> <Seat seatId={40}/><Seat seatId={41}/></div>
            <div><Seat seatId={42}/> <Seat seatId={43}/><Seat seatId={44}/> <Seat seatId={45}/><Seat seatId={46}/> <Seat seatId={47}/><Seat seatId={48}/> <Seat seatId={49}/><Seat seatId={50}/> <Seat seatId={51}/><Seat seatId={52}/><Seat seatId={53}/><Seat seatId={54}/></div>
        </section>
    );
  }