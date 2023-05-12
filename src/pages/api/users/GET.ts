import connectMongo from "../../../../utils/connectMongo";
import User from "../../../../models/user";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function getUsers(req: any, res: any) {
  try {
    await connectMongo();
    const users = await User.find();
    res.json({ users: users });
    
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
