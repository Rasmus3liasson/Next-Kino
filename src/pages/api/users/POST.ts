import connectMongo from "../../../util/connectMongo";
import User from "../../../../models/user";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function createUser(req: any, res: any) {
  try {
    await connectMongo();
    const user = await User.create(req.body);
    res.json({ user: user });

  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
