import type { NextApiRequest, NextApiResponse } from "next";

interface SubmitedUserResponse {
    userCreated: boolean;
    errors: string[];
  }
  

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SubmitedUserResponse>
) {
  console.log("reached")
  res.status(200).json({ userCreated: true, errors: ["bonk", "stonk"] });
}
