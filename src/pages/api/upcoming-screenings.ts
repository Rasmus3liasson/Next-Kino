import type { NextApiRequest, NextApiResponse } from "next";
import sortByDayAndTime from "@/util/datehandler";
import { SortedScreenings } from "@/util/types";
import connectMongo from "@/util/connectMongo";
import Movie from "../../../models/movie";


interface idQuery extends NextApiRequest {
    query: {
        id: string;
    };
}

export default async function GET(
  req: idQuery,
  res: NextApiResponse<SortedScreenings | {error: string} | string>
) {
  // Pass params to function below to
  try {
    const data = await getMovieScreenings(req.query.id);

    if(data === undefined){
      res.status(500).json({error: data});
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieScreenings(
  idQuery: string
): Promise<SortedScreenings | string > {
 
  await connectMongo();
  
  // @rasmus-eliasson
  const screeningData = await Movie.findOne({title: idQuery});

  if (screeningData === null) {
    return "No Screenings found for provided id";
  } else {
    const responseData: SortedScreenings = {
      movieId: screeningData.title,
      //location: screeningData.location, Not implemented
      dayScreenings: JSON.stringify(sortByDayAndTime(screeningData.screenings)),
    };
    return responseData;
  }
}
