import connectMongo from "../../../../../util/connectMongo";
import Movie from "../../../../../../models/movie";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function createReview(req: any, res: any) {
  try {
    const { movieId } = req.query;

    await connectMongo();

    // Finds movie by title
    const movie = await Movie.findOne({ title: movieId });

    // if movieId dont match
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    // New review object
    const newReview = {
      reviewerName: req.body.reviewerName,
      reviewerText: req.body.reviewerText,
      postDate: new Date(),
      rating: req.body.rating,
    };

    // Add the new review to reviews array
    movie.reviews.push(newReview);

    // Saves
    await movie.save();

    res.json({ movie });
  } catch (error) {
    res.status(500).json({ error: "Failed to create review" });
  }
}
