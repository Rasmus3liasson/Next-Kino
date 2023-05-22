import connectMongo from "@/util/connectMongo";
import Movie from "../../../../../../../models/movie";
import Booking from "../../../../../../../models/booking";
import { screening } from "../../../../../../../models/movie";
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

export default async function getBookings(
  req: NextApiRequest,
  res: NextApiResponse<number[]>
) {
  let { id, date } : any = req.query;

  date = new Date(date);
  console.log(date);
  await connectMongo();

  const movie = await Movie.findOne({ title: id });
  console.log(movie);
  // screeningDate  = new Date(screeningDate);
  const result = movie.screenings.find(({_id}) => _id.toString() === "6469dc2ac808aa01e9536224");
  console.log(result);

  return;
}
