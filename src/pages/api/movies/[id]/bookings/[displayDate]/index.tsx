import connectMongo from "@/util/connectMongo";
import Booking from "../../../../../../../models/booking";

export default async function getBookings(req: any, res: any) {
  try {
    const { id, displayDate }: any = req.query;

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

    res.status(200).json({ occupiedSeats: occupiedSeats });
  } catch (e) {
    console.log("Database error: ", e);
  }
}
