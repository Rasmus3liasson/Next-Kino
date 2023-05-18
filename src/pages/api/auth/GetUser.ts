import type { NextApiRequest, NextApiResponse } from "next";
import { verify } from "jsonwebtoken";
// WONT BE NEEDED, BUT SAVING FOR POSSIBLE FUTURE CLIENTSIDE FETCH TO VALIDATE TOKEN
export default function getUser(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const token = req.cookies["AuthToken"];
  if (token) {
    const decoded = verify(token, process.env.JWTKEY);
    return res.status(200).json(decoded);
  }
}
