import connectMongo from "@/util/connectMongo";
import Movie from "@/components/Movie";
import type { NextApiRequest, NextApiResponse } from "next";

export default function getAvailSeats(
  req: NextApiRequest,
  res: NextApiResponse<number[]>
) {
  const { id, date } = req.query;
  console.log("id: ", id);
  console.log("date: ", date);
}
