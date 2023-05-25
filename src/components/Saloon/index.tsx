import style from "./style.module.scss";
import React from "react";
import Seat from "../Seat";
    interface SaloonProps{
        onData: (data: Number[]) => void;
    }

    let selectedSeats: Number[] = [];
   
    const Saloon: React.FC<SaloonProps> = ({ onData}) =>{
        const sendDataToParent = () => {
            const data = [1,6,8,9]
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
                <div><Seat seatId={1} onData={handleDataFromSeat} /> <Seat seatId={2} onData={handleDataFromSeat} /><Seat seatId={3} onData={handleDataFromSeat} /> <Seat seatId={4} onData={handleDataFromSeat} /><Seat seatId={5} onData={handleDataFromSeat} /> <Seat seatId={6} onData={handleDataFromSeat} /><Seat seatId={7} onData={handleDataFromSeat} /> <Seat seatId={8} onData={handleDataFromSeat} /><Seat seatId={9} onData={handleDataFromSeat} /> <Seat seatId={10} onData={handleDataFromSeat} /></div>
                <div><Seat seatId={11} onData={handleDataFromSeat} /> <Seat seatId={12} onData={handleDataFromSeat} /><Seat seatId={13} onData={handleDataFromSeat} /> <Seat seatId={14} onData={handleDataFromSeat} /><Seat seatId={15} onData={handleDataFromSeat} /> <Seat seatId={16} onData={handleDataFromSeat} /><Seat seatId={17} onData={handleDataFromSeat} /> <Seat seatId={18} onData={handleDataFromSeat} /><Seat seatId={19} onData={handleDataFromSeat} /><Seat seatId={20} onData={handleDataFromSeat} /><Seat seatId={21} onData={handleDataFromSeat}  /></div>
                <div><Seat seatId={22} onData={handleDataFromSeat}/> <Seat seatId={23} onData={handleDataFromSeat} /><Seat seatId={24} onData={handleDataFromSeat} /> <Seat seatId={25} onData={handleDataFromSeat} /><Seat seatId={26} onData={handleDataFromSeat} /> <Seat seatId={27} onData={handleDataFromSeat} /><Seat seatId={28} onData={handleDataFromSeat} /> <Seat seatId={29} onData={handleDataFromSeat} /><Seat seatId={30} onData={handleDataFromSeat} /></div>
                <div><Seat seatId={31} onData={handleDataFromSeat} /> <Seat seatId={32} onData={handleDataFromSeat} /><Seat seatId={33} onData={handleDataFromSeat} /> <Seat seatId={34} onData={handleDataFromSeat} /><Seat seatId={35} onData={handleDataFromSeat} /><Seat seatId={36} onData={handleDataFromSeat} /><Seat seatId={37} onData={handleDataFromSeat} /><Seat seatId={38} onData={handleDataFromSeat} /><Seat seatId={39} onData={handleDataFromSeat} /> <Seat seatId={40} onData={handleDataFromSeat} /><Seat seatId={41} onData={handleDataFromSeat} /></div>
                <div><Seat seatId={42} onData={handleDataFromSeat} /> <Seat seatId={43} onData={handleDataFromSeat} /><Seat seatId={44} onData={handleDataFromSeat} /> <Seat seatId={45} onData={handleDataFromSeat} /><Seat seatId={46} onData={handleDataFromSeat} /> <Seat seatId={47} onData={handleDataFromSeat} /><Seat seatId={48} onData={handleDataFromSeat} /> <Seat seatId={49} onData={handleDataFromSeat} /><Seat seatId={50} onData={handleDataFromSeat} /> <Seat seatId={51} onData={handleDataFromSeat} /><Seat seatId={52} onData={handleDataFromSeat} /><Seat seatId={53} onData={handleDataFromSeat} /><Seat seatId={54} onData={handleDataFromSeat} /></div>
            </section>

                                                                                                    
            <div className={style.legend}>
                <div className={style.seat_legend_free}></div>
                <p className={style.legendText_free}>Tillgänglig</p>
                <div className={style.seat_legend_unavailable}></div>
                <p className={style.legendText_unavailable}>Ej tillgänglig</p>
                <div className={style.seat_legend_selected}></div>
                <p className={style.legendText_selected}>Vald</p>
                <button onClick={sendDataToParent}>Send Data to Parent</button>
            </div>
        </div>
    )};
export default Saloon;
