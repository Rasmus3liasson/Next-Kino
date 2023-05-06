import type { NextApiRequest, NextApiResponse } from "next";
import { ScreeningType } from "@/util/types";
import { movieDataArray } from "@/util/mockMovieData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ScreeningType[]>
) {
  const data = await getData();
  
  res.status(200).json(data);
}

export async function getData(){
  //TODO: Add database util function that
  // finds 10 upcoming screenings regardless
  // of movie.
  return movieDataArray;
}
