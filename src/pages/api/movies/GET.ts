import connectMongo from "../../../util/connectMongo";
import Movie from "../../../../models/movie";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function getMovies(req: any, res: any) {
  try {
    await connectMongo();
    const movies = await Movie.find();
    res.json({ movies });
    
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
