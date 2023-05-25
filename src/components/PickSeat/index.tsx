import Link from "next/link";
import style from "./style.module.scss";
import Seat from "../Seat";
import { ScreeningType } from "@/util/types";

export default function PickSeat( {movieData}: {movieData: ScreeningType} ) {
    const row1 = [
        { id: 1, name: 'Seat 1' },
        { id: 2, name: 'Seat 2' },
        { id: 3, name: 'Seat 3' },
        { id: 4, name: 'Seat 4' },
        { id: 5, name: 'Seat 5' },
        { id: 6, name: 'Seat 6' },
        { id: 7, name: 'Seat 7' },
        { id: 8, name: 'Seat 8' },
        { id: 9, name: 'Seat 9' },
        { id: 10, name: 'Seat 10' }
      ];
      const row2 = [
        { id: 11, name: 'Seat 11' },
        { id: 12, name: 'Seat 12' },
        { id: 13, name: 'Seat 13' },
        { id: 14, name: 'Seat 14' },
        { id: 15, name: 'Seat 15' },
        { id: 16, name: 'Seat 16' },
        { id: 17, name: 'Seat 17' },
        { id: 18, name: 'Seat 18' },
        { id: 19, name: 'Seat 19' },
        { id: 20, name: 'Seat 21' }
      ];
      const row3 = [
        { id: 21, name: 'Seat 21' },
        { id: 22, name: 'Seat 22' },
        { id: 23, name: 'Seat 23' },
        { id: 24, name: 'Seat 24' },
        { id: 25, name: 'Seat 25' },
        { id: 26, name: 'Seat 26' },
        { id: 27, name: 'Seat 27' },
        { id: 28, name: 'Seat 28' },
        { id: 29, name: 'Seat 29' },
        { id: 30, name: 'Seat 30' }
      ];
      const row4 = [
        { id: 31, name: 'Seat 31' },
        { id: 32, name: 'Seat 32' },
        { id: 33, name: 'Seat 33' },
        { id: 34, name: 'Seat 34' },
        { id: 35, name: 'Seat 35' },
        { id: 36, name: 'Seat 36' },
        { id: 37, name: 'Seat 37' },
        { id: 38, name: 'Seat 38' },
        { id: 39, name: 'Seat 39' },
        { id: 40, name: 'Seat 40' },
        { id: 41, name: 'Seat 41' }
      ];
      const row5 = [
        { id: 42, name: 'Seat 42' },
        { id: 43, name: 'Seat 43' },
        { id: 44, name: 'Seat 44' },
        { id: 45, name: 'Seat 45' },
        { id: 46, name: 'Seat 46' },
        { id: 47, name: 'Seat 47' },
        { id: 48, name: 'Seat 48' },
        { id: 49, name: 'Seat 49' },
        { id: 50, name: 'Seat 50' },
        { id: 51, name: 'Seat 51' },
        { id: 52, name: 'Seat 52' }
      ];


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