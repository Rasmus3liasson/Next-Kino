import connectMongo from "../../../util/connectMongo";
import Booking from "../../../../models/booking";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function createBooking(req: any, res: any) {
  try {

    // New booking object
    const newBooking = {
      email: req.body.userEmail,
      movieTitle: req.body.movieTitle,
      date: new Date(),
      seats: [6,7,8,9]
    };

    await connectMongo();
    const booking = await Booking.create(req.body);
    res.json({ booking: booking });
    
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

