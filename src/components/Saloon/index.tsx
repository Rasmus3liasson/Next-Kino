import style from "./style.module.scss";
import React from "react";
import Seat from "../Seat";
    interface SaloonProps{
        onData: (data: number[]) => void;
        id: string;
        displayDate: string;
        dbResponse: Response;
    }

    let selectedSeats: number[] = [];
   
    const Saloon: React.FC<SaloonProps> = ({ onData, id, displayDate, dbResponse}) =>{

    const handleDataFromSeat = (seatNumber: number) => {
        if(selectedSeats.includes(seatNumber,0)){
            const index = selectedSeats.indexOf(seatNumber,0)
            if(index > -1){
                selectedSeats.splice(index,1);
            }
        }else{
            selectedSeats.push(seatNumber);
        }
        onData(selectedSeats);
    }

    return (
        <div className={style.saloon}>
            <div className={style.screen}>Bioduk</div>
            <section className={style.seatContainer}>
                <div><Seat seatId={1} onData={handleDataFromSeat} id={id} displayDate={displayDate} dbResponse={dbResponse} /> <Seat seatId={2} onData={handleDataFromSeat} id={id} displayDate={displayDate} dbResponse={dbResponse} /><Seat seatId={3} onData={handleDataFromSeat} dbResponse={dbResponse} id={id} displayDate={displayDate} /> <Seat dbResponse={dbResponse} seatId={4} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={5} onData={handleDataFromSeat} id={id} displayDate={displayDate}/> <Seat dbResponse={dbResponse} seatId={6} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={7} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat dbResponse={dbResponse} seatId={8} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={9} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat dbResponse={dbResponse} seatId={10} id={id} displayDate={displayDate} onData={handleDataFromSeat} /></div>
                <div><Seat dbResponse={dbResponse} seatId={11} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat dbResponse={dbResponse} seatId={12} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={13} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat dbResponse={dbResponse} seatId={14} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={15} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat dbResponse={dbResponse} seatId={16} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={17} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat dbResponse={dbResponse} seatId={18} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={19} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={20} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={21} onData={handleDataFromSeat} id={id} displayDate={displayDate}  /></div>
                <div><Seat dbResponse={dbResponse} seatId={22} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat dbResponse={dbResponse} seatId={23} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={24} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat dbResponse={dbResponse} seatId={25} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={26} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat dbResponse={dbResponse} seatId={27} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={28} id={id} displayDate={displayDate} onData={handleDataFromSeat} /> <Seat dbResponse={dbResponse} seatId={29} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={30} onData={handleDataFromSeat} id={id} displayDate={displayDate} /></div>
                <div><Seat dbResponse={dbResponse} seatId={31} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat dbResponse={dbResponse} seatId={32} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={33} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat dbResponse={dbResponse} seatId={34} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={35} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={36} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={37} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={38} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={39} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat dbResponse={dbResponse} seatId={40} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={41} onData={handleDataFromSeat} id={id} displayDate={displayDate} /></div>
                <div><Seat dbResponse={dbResponse} seatId={42} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat dbResponse={dbResponse} seatId={43} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={44} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat dbResponse={dbResponse} seatId={45} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={46} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat dbResponse={dbResponse} seatId={47} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={48} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat dbResponse={dbResponse} seatId={49} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={50} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat dbResponse={dbResponse} seatId={51} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={52} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={53} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat dbResponse={dbResponse} seatId={54} id={id} displayDate={displayDate} onData={handleDataFromSeat} /></div>
            </section>

                                                                                                    
            <div className={style.legend}>
                <div className={style.seat_legend_free}></div>
                <p className={style.legendText_free}>Tillgänglig</p>
                <div className={style.seat_legend_unavailable}></div>
                <p className={style.legendText_unavailable}>Ej tillgänglig</p>
                <div className={style.seat_legend_selected}></div>
                <p className={style.legendText_selected}>Vald</p>
            </div>
        </div>
    )};
export default Saloon;
