import type { NextApiRequest, NextApiResponse } from "next";
import { verify } from "jsonwebtoken";

export default function getUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method !== "GET") {
    return res.status(405).end();
  }

  if(req) {
    const token = req.cookies.get("AuthToken")

    const decoded = verify(token.get("AuthToken"), process.env.JWTKEY)
    return res.status(200).json(decoded)
  } 

}
