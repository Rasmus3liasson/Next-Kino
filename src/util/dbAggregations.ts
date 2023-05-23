import connectMongo from "./connectMongo";
import Movie from "../../models/movie";

export async function getMovie(idQuery: string) {

    await connectMongo();
  
    const movie = Movie.aggregate([
      { $match: { title: idQuery } },
      { $project: { _id: 0, title: "$title", poster: "$imgUrl", description: '$description' } },
      { $limit: 1 },
    ])

    const result = await movie.exec();
    const document = result[0];

    return document;
}