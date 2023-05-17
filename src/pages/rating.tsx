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

/* import { NextApiRequest, NextApiResponse } from "next";
import { movieDataArray } from "../util/mockMovieData";

const ratingHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { movieId } = req.query;

  if (!movieId) {
    return res.status(400).json({ error: "Movie ID is required" });
  }

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

import Rating from "../../src/components/Rating/index";
import { NextApiRequest, NextApiResponse } from "next";
import { movieDataArray } from "../util/mockMovieData";

const ratingHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { movieId } = req.query;

  if (!movieId) {
    return res.status(400).json({ error: "Movie ID is required" });
  }

  const movie = movieDataArray.find((movie) => movie.id === movieId);

  if (movie) {
    const { rating } = movie;
    console.log("Movie found:", movie);
    console.log("Rating:", rating);
    const ratingComponent = <Rating movieData={movie} rating={rating} />;
    res.status(200).send(ratingComponent);
  } else {
    console.log("Movie not found");
    res.status(404).json({ error: "Movie not found" });
  }
};

export default ratingHandler;
