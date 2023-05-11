import connectMongo from "../../../../utils/connectMongo";
import Movie from "../../../../models/movie";
import { IMovie } from "../../../../models/movie"

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function postMovie(req:any, res:any) {
    try {
        await connectMongo();
        const movie = await Movie.create(req.body);
        res.json({ movie});
    } catch(error) {
        console.log(error);
        res.json({error});
    }
}