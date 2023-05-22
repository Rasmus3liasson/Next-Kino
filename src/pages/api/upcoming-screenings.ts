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
  res: NextApiResponse<SortedScreenings | { error: string } | string>
) {
  // Pass params to function below to
  try {
    const data = await getMovieScreenings(req.query.id);

    if (data === undefined) {
      res.status(500).json({ error: data });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieScreenings(
  idQuery: string
): Promise<SortedScreenings> {
  await connectMongo();

  // @rasmus-eliasson
  const movieScreenings = await Movie.aggregate([
    {
      $match: { title: idQuery },
    },
    {
      $unwind: "$screenings",
    },
    {
      $group: {
        _id: {
          $dateToString: {
            format: '%Y-%m-%d',
            date: '$screenings.displayDate'
          }
        },
        screenings: {
          $push: '$screenings'
        },
          title: {
            $first: '$title',
        }
      }
    },
    {
      $sort: {
        '_id': 1
      }
    },
    {
      $group: {
        _id: null,
        title: {
          $first: '$title'
        },
        screeningsByDay: {
          $push: {
            date: '$_id',
            screenings: '$screenings'
          }
        }
      }
    },
    {
      $project: {
        _id: 0,
      }
    }
  ]).exec();

  
  // if (screeningData === null) {
  //   return "No Screenings found for provided id";
  // } else {
  //   const responseData: SortedScreenings = {
  //     movieId: screeningData.title,
  //     //location: screeningData.location, Not implemented
  //     dayScreenings: JSON.stringify(sortByDayAndTime(screeningData.screenings)),
  //   };
  return movieScreenings;
}
