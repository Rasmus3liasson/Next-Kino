import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "@/util/connectMongo";
import Movie from "../../../models/movie";

export default async function handler(req: NextApiRequest, res: MovieLink) {
  const data = await getTenScreenings();

  res.status(200).json(data);
}
interface MovieLink extends NextApiResponse {
  title: string;
  poster: string;
  screeningDate: Date;
}
export async function getTenScreenings() {
  await connectMongo();

  const tenScreenings = await Movie.aggregate([
    {
      $unwind: "$screenings",
    },
    {
      $sort: { 'screenings.displayDate': 1 }
    },
    {
      $limit: 10,
    },
    {
      $project: { 
        'screening': '$screenings.displayDate',
        'location': '$screenings.saloon',      
        'title': 1,
        'poster' : '$imgUrl',
      }
    }
  ]).exec();
  const result = JSON.stringify(tenScreenings)
  return result;
}