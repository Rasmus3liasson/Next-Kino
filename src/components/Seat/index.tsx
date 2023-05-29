import { useState, useEffect } from "react";
import style from "./style.module.scss";
import React from "react";

interface SeatProps {
  seatId: number;
  onData: (data: number) => void;
  id: string;
  displayDate: string;
  dbResponse: number[];
}

const Seat: React.FC<SeatProps> = ({
  seatId,
  onData,
  id,
  displayDate,
  dbResponse,
}) => {
  const [selected, setIsSelected] = useState(false);
  const [unavailableArrayFromDb, setUnavailableArrayFromDb] = useState<number[]>([]);

  const handleClick = () => {
    setIsSelected(!selected);
    const data = seatId;
    onData(data);
  };

  useEffect(() => {
    const updateUnavailableSeats = () => {
      if (dbResponse != null && dbResponse.length > 0) {
        setUnavailableArrayFromDb(dbResponse);
      }
    };

    updateUnavailableSeats();
  }, [dbResponse]);

  let stylingName = style.availableSeat;

  if (unavailableArrayFromDb.includes(seatId)) {
    stylingName = style.unavailableSeat;
  } else if (selected) {
    stylingName = style.selectedSeat;
  }

  return (
    <div className={stylingName} onClick={handleClick}>
      <span className={style.noRotation}></span>
    </div>
  );
};

export default Seat;
