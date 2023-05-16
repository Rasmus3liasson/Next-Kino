import connectMongo from "@/util/connectMongo";
import Movie from "../../../../../models/movie";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function getMovies(req: any, res: any) {
  const { movieId } = req.query;

  try {
    await connectMongo();
    const movies = await Movie.find();
    const specificMovieReview = movies.find(
      (review) => review.title === movieId
    );
    res.json(specificMovieReview.reviews);
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
