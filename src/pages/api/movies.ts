import type { NextApiRequest, NextApiResponse } from "next";
import { MovieType } from "@/util/types";
import  mockMovies from "@/util/mockMovies";
import { movieData } from "@/util/mockMovieData";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieType[]>
) {
  const data = await getMovies();
  
  res.status(200).json(data);
}

export async function getMovies(){
  //TODO: Add database util function that
  // finds 10 upcoming screenings regardless
  // of movie.
  return mockMovies;
}
export async function getMovieData() {
  return movieData;
}