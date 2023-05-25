import { createContext } from "react";
import { BookingInterface } from "@/types/booking";

export const bookingInfoContext = createContext<{
  bookingInfo: BookingInterface;
  setBookingInfo: React.Dispatch<React.SetStateAction<{}>>;
}>({
  bookingInfo: {} as BookingInterface,
  setBookingInfo: () => {},
});
