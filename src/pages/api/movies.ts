import { MovieProps } from "@/types/movieTypes";
import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "@/util/connectMongo";
import Movie from "../../../models/movie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieProps[]>
) {
  const data = await getTenMovies();

  res.status(200).json(data);
}
export async function getTenMovies() {
  await connectMongo();

  const tenRandomMovies = Movie.aggregate([
    { $sample: { size: 10 } },
    { $project: { _id: 0, title: "$title", poster: "$imgUrl" } },
  ]);
  const result = await tenRandomMovies.exec();
  return result;
}
