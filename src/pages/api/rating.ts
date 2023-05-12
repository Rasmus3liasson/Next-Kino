import { NextApiRequest, NextApiResponse } from "next";
import { movieDataArray } from "../../util/mockMovieData";
const ratingHandler = (req: NextApiRequest, res: NextApiResponse) => {
  // Retrieve the movie ID from the query parameters
  const { movieId } = req.query;

  // Find the movie in the movieDataArray based on the ID
  const movie = movieDataArray.find((movie) => movie.id === movieId);

  if (movie) {
    const { rating } = movie;
    res.status(200).json({ rating });
  } else {
    res.status(404).json({ error: "Movie not found" });
  }
};

export default ratingHandler;
