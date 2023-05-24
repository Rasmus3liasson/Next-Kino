import Link from "next/link";
import style from "./style.module.scss";
import Seat from "../Seat";
import { ScreeningType } from "@/util/types";

export default function PickSeat( {movieData}: {movieData: ScreeningType} ) {
    return (
        <section className={style.container}>
            <div><Seat key={1}/> <Seat key={2}/><Seat key={3}/> <Seat key={4}/><Seat key={5}/> <Seat key={6}/><Seat key={7}/> <Seat key={8}/><Seat key={9}/> <Seat key={10}/></div>
            <div><Seat key={11}/> <Seat key={12} /><Seat key={13}/> <Seat key={14}/><Seat key={15}/> <Seat key={16}/><Seat key={17}/> <Seat key={18}/><Seat key={19}/> <Seat key={20}/><Seat key={21}/></div>
            <div><Seat key={22}/> <Seat key={23}/><Seat key={24}/> <Seat key={25}/><Seat key={26}/> <Seat key={27}/><Seat key={28}/> <Seat key={29}/><Seat key={30}/></div>
            <div><Seat key={31}/> <Seat key={32}/><Seat key={33}/> <Seat key={34}/><Seat key={35}/> <Seat key={36}/><Seat key={37}/> <Seat key={38}/><Seat key={39}/> <Seat key={40}/><Seat key={41}/></div>
            <div><Seat key={42}/> <Seat key={43}/><Seat key={44}/> <Seat key={45}/><Seat key={46}/> <Seat key={47}/><Seat key={48}/> <Seat key={49}/><Seat key={50}/> <Seat key={51}/><Seat key={52}/><Seat key={53}/><Seat key={54}/></div>
        </section>
    );
  }