import type { NextApiRequest, NextApiResponse } from "next";
//import mongoose from "mongoose";

interface SubmitedUserResponse {
  userCreated: boolean;
  errors: string[];
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SubmitedUserResponse>
) {

  const { userName, firstName, lastName, eMail, password } = req.body

  res.status(200).json({ userCreated: true, errors: [userName, password] });
}
