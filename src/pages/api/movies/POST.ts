import connectMongo from "../../../util/connectMongo";
import Movie from "../../../../models/movie";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function createMovie(req: any, res: any) {
  try {
    await connectMongo();
    const movie = await Movie.create(req.body);
    res.json({ movie });
    
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
