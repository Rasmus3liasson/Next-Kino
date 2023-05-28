import connectMongo from "../../../util/connectMongo";
import Booking from "../../../../models/booking";

export const config = {
    api: {
      bodyParser: {
        sizeLimit: '10mb',
      },
    },
  }

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function createBooking(req: any, res: any) {
    console.log(req.body)
  try {
    await connectMongo();
    const bookings = await Booking.insertMany(req.body);
    res.json({ bookings: bookings });
    
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
