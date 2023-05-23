import type { NextApiRequest, NextApiResponse } from "next";
import { SortedScreenings } from "../../types/screeningTypes";
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
  try {
    const data = await getMovieScreenings(req.query.id);

    if (data === undefined) {
      res.status(500).json({ error: data });
    } else {
      res.status(200).send(data);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieScreenings(
  idQuery: string
): Promise<SortedScreenings | string> {
  await connectMongo();

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

  const result = JSON.stringify(movieScreenings);
  return result;
}
