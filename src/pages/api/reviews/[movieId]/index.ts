import { NextApiRequest, NextApiResponse } from "next";
import { reviewData, ReviewType } from "@/util/mockReview";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { movieId } = req.query;

  //filter the movies that match
  const specificMovieReview = reviewData.find(
    (review) => review.movieId === movieId
  );

  //if no movies match
  if (!specificMovieReview) {
    res.status(404).json({ message: "No reviews found for this specic movie" });
    return;
  }

  res.status(200).json(specificMovieReview);
}
