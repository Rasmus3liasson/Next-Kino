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

  const currentDate = new Date();
  console.log(currentDate)

  const tenRandomScreenings = await Movie.aggregate([
    {
      $unwind: "$screenings",
    },
    {
      $sort: { 'screenings.displayDate': -1 }
    },
    {
      $limit: 10,
    },
    {
      $project: { 
        'screenings.displayDate': 1,
        'title': 1,
        'imgUrl': 1,       
      }
    }
  ]).exec();
  return tenRandomScreenings;
}