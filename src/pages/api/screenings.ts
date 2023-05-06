import type { NextApiRequest, NextApiResponse } from "next";
import { ScreeningType } from "@/util/types";
import { movieDataArray } from "@/util/mockMovieData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ScreeningType[]>
) {
    //TODO: Add database util function that
    // finds 10 upcoming screenings regardless
    // of movie.
    const data = movieDataArray;

  res.status(200).json(data);
}
