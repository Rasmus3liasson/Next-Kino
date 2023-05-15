/* import { NextApiRequest, NextApiResponse } from "next";
import { movieDataArray } from "../../util/mockMovieData";
const ratingHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { movieId } = req.query;

  const movie = movieDataArray.find((movie) => movie.id === movieId);

  if (movie) {
    const { rating } = movie;
    res.status(200).json({ rating });
  } else {
    res.status(404).json({ error: "Movie not found" });
  }
};

export default ratingHandler;
 */

import { NextApiRequest, NextApiResponse } from "next";
import { ScreeningType } from "../../util/types";

const movieDataArray: ScreeningType[] = [
  // Define your movie data objects here
];

const ratingHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const movie = movieDataArray.find((movie) => movie.id === id);

  if (movie) {
    const { rating } = movie;
    res.status(200).json({ rating });
  } else {
    res.status(404).json({ error: "Movie not found" });
  }
};

export default ratingHandler;
