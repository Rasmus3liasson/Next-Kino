import connectMongo from "../../../../../../util/connectMongo";
import Booking from "../../../../../../../models/booking";

export default async function createBooking(req: any, res: any) {
  try {
    const { userID, email, movieTitle, date, seats } = req.body.occupiedSeats;

    // Create a new booking object
    const newBooking = {
      userID: userID,
      email: email,
      movieTitle: movieTitle,
      date: date,
      seats: seats,
    };

    await connectMongo();

    const booking = await Booking.create(newBooking);

    res.json({ booking: booking });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
