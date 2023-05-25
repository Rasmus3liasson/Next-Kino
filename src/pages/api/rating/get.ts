import connectMongo from "../../../util/connectMongo";
import { NextApiRequest, NextApiResponse } from "next";
import Movie from "../../../../models/movie";

export default async function getMovieRatings(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    const movies = await Movie.find(
      {},
      { _id: 0, title: 1, "reviews.rating": 1 }
    ).exec();
    res.json({ movies });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
