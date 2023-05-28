import connectMongo from "@/util/connectMongo";
import Booking from "../../../../../../../models/booking";

export default async function handler(req: any, res: any) {
  try {
    const { id, displayDate }: any = req.query;
    
    const data = await getBookingsArray(id, displayDate);
    res.status(200).json({ data });
  
  } catch (e) {
    console.log("Database error: ", e);
  }
}
export async function getBookingsArray(id, displayDate){

    await connectMongo();
    const bookings = await Booking.find({ movieTitle: id });

    const filteredBookings = bookings.filter(
      ({ date }) => new Date(date).getTime() === new Date(displayDate).getTime()
    );

    const occupiedSeats = filteredBookings
      .flatMap((item) => {
        return item.seats;
      })
      .sort((a, b) => a - b);
      return occupiedSeats;
}


