import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import connectMongo from "@/util/connectMongo";
import User, { IUser } from "../../../../models/user";


export default async function login(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userName, password } = req.body;

  try {
    await connectMongo();
    const user = await User.findOne({ userName: userName }).exec() as IUser;

    if (user) {
      const match = await bcrypt.compare(password, user.passwordHash);

      if (match) {
        const authToken = jwt.sign({ user }, process.env.JWTKEY);

        res.setHeader(
          "Set-Cookie",
          serialize("AuthToken", authToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60,
            path: "/",
          })
        );
        res.status(200).json(user);
      }
    } else res.status(401).end();

  } catch (error) {
    console.error(error);
  }
}
