import style from "./style.module.scss";
import React from "react";
import Seat from "../Seat";
    interface SaloonProps{
        onData: (data: Number[]) => void;
        id: string;
        displayDate: string;
    
    }

    let selectedSeats: Number[] = [];
   
    const Saloon: React.FC<SaloonProps> = ({ onData, id, displayDate}) =>{
        const sendDataToParent = () => {
            const data = selectedSeats
            onData(data);
        }

    const handleDataFromSeat = (seatNumber: Number) => {
        if(selectedSeats.includes(seatNumber,0)){
            const index = selectedSeats.indexOf(seatNumber,0)
            if(index > -1){
                selectedSeats.splice(index,1);
            }
        }else{
            selectedSeats.push(seatNumber);
        }
        console.log(selectedSeats)
    }

    return (
        <div className={style.saloon}>
            <div className={style.screen}>Bioduk</div>
            <section className={style.seatContainer}>
                <div><Seat seatId={1} onData={handleDataFromSeat} id={id} displayDate={displayDate}/> <Seat seatId={2} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={3} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat seatId={4} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={5} onData={handleDataFromSeat} id={id} displayDate={displayDate}/> <Seat seatId={6} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={7} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat seatId={8} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={9} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat seatId={10} id={id} displayDate={displayDate} onData={handleDataFromSeat} /></div>
                <div><Seat seatId={11} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat seatId={12} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={13} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat seatId={14} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={15} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat seatId={16} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={17} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat seatId={18} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={19} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={20} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={21} onData={handleDataFromSeat} id={id} displayDate={displayDate}  /></div>
                <div><Seat seatId={22} onData={handleDataFromSeat} id={id} displayDate={displayDate}/> <Seat seatId={23} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={24} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat seatId={25} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={26} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat seatId={27} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={28} id={id} displayDate={displayDate} onData={handleDataFromSeat} /> <Seat seatId={29} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={30} onData={handleDataFromSeat} id={id} displayDate={displayDate} /></div>
                <div><Seat seatId={31} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat seatId={32} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={33} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat seatId={34} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={35} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={36} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={37} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={38} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={39} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat seatId={40} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={41} onData={handleDataFromSeat} id={id} displayDate={displayDate} /></div>
                <div><Seat seatId={42} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat seatId={43} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={44} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat seatId={45} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={46} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat seatId={47} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={48} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat seatId={49} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={50} onData={handleDataFromSeat} id={id} displayDate={displayDate} /> <Seat seatId={51} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={52} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={53} onData={handleDataFromSeat} id={id} displayDate={displayDate} /><Seat seatId={54} id={id} displayDate={displayDate} onData={handleDataFromSeat} /></div>
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
