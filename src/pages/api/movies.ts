import { MovieType } from "@/util/types";
import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "@/util/connectMongo";
import Movie from "../../../models/movie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieType[]>
) {
  const data = await getTenMovies();

  res.status(200).json(data);
}
export async function getTenMovies() {
  //TODO: Add database util function that
  // finds 10 upcoming screenings regardless
  // of movie.

  await connectMongo();

  const tenRandomMovies = Movie.aggregate([{ $sample: { size: 10 } }]);

  const data = (await tenRandomMovies).map((movie) => {
    return {
      title: movie.title,
      poster: movie.imgUrl,
    };
  });

  return data;
}