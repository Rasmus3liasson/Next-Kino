import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserType } from "@/util/types";
import { serialize } from "cookie";
//import connectMongo from "@/src/util.connectMongo"
//import User from "/models/user"

type ResType = {
  authenticated: boolean;
  message?: string;
};
type LoginParams = {
  userName: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResType>
) {
  const { userName, password }: LoginParams = req.body;

  
  try {
    await connectMongo();
    await User.findOne(
      { userName: userName },
      (err: Error | null, user: UserType) => {
        if (user) {
          bcrypt.compare(password, user.password, (err, match) => {
            if (match) {
              const authToken = jwt.sign(
                {
                  user: user.firstName,
                },
                process.env.JWTKEY
              );

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
          });
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(401).json({ authenticated: false });
  }
}
