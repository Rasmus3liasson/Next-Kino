import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { verify } from "jsonwebtoken";


export default function getUser(
  req: NextRequest,
  res: NextApiResponse
) {
  if(req.method === "GET") {
    const token = req.cookies?.get("AuthToken")
    if(token) {
      const decoded = verify(token?.value, process.env.JWTKEY)
      res.status(200).json(decoded)
      return
    }
  } 

  res.status(405).end();


}
