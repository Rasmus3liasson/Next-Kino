import connectMongo from "../../../../utils/connectMongo";
import Booking from "../../../../models/booking";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function createBooking(req: any, res: any) {
  try {
    await connectMongo();
    const booking = await Booking.create(req.body);
    res.json({ booking: booking });
    
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
