import type { NextApiRequest, NextApiResponse } from "next";
import { ScreeningType } from "@/util/types";
import { movieDataArray } from "@/util/mockMovieData";
import sortByDayAndTime from "@/util/datehandler";

type SortedScreenings = {
  movieId: string;
  dayScreenings: Date[][];
};
interface idQuery extends NextApiRequest {
    query: {
        id: string;
    };
}

export default async function GET(
  req: idQuery,
  res: NextApiResponse<SortedScreenings>
) {
  // Pass params to function below to
  const data = await getMovieScreenings(req.query.id);

  res.status(200).json(data);
}

export async function getMovieScreenings(
  idQuery: string
): Promise<SortedScreenings> {
  //TODO: Add database util function that
  // finds 10 upcoming screenings of movie.

  // @rasmus-eliasson
  const screeningData = movieDataArray.find(
    (movieObj: { id: string | string[] | undefined | number }) =>
      movieObj.id === idQuery
  );
  if (screeningData !== undefined) {
    const responseData: SortedScreenings = {
      movieId: screeningData.id,
      dayScreenings: sortByDayAndTime(screeningData.screenings),
    };
    return responseData;
  } else {
    throw new Error("No Screenings found for provided id");
  }
}
