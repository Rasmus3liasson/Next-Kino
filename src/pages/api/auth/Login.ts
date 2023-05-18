import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import connectMongo from "@/util/connectMongo";
import User from "../../../../models/user";

type ResType = {
  authenticated: boolean;
  message?: string;
};

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse<ResType>
) {
  const { userName, password } = req.body;

  try {
    await connectMongo();
    const user = await User.findOne({ userName: userName }).exec();

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

        res.status(201).json({ authenticated: true });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(401).json({ authenticated: false });
  }
}
