import connectMongo from "../../../util/connectMongo";
import Booking from "../../../../models/booking";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function getBookings(req: any, res: any) {
  try {
    await connectMongo();
    const bookings = await Booking.find();
    res.json({ bookings: bookings });

  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
