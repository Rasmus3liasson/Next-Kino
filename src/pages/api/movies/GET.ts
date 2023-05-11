import connectMongo from "../../../../utils/connectMongo";
import Movie from "../../../../models/movie";
import renderMovies from "../../../../utils/createMovies";

export default async function getMovies(req: any, res: any) {
  renderMovies();
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    console.log("FETCHING MOVIES");
    const movies = await Movie.find();
    console.log("MOVIES FETCHED");

    res.json({ movies });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
