import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {UserType} from "@/util/types"
import { cookies } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";
//import UserModel from "@/models/........."
//import connectMongoDB from "@/src/lib/......"

type ResType = {
  authenticated: boolean;
  message?: string;
};
type LoginDataType = {
  username: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResType>
) {
  const { userName, password } = req.body;

  try {
    await connectMongoDB();
    UserModel.findOne({ userName: userName }, (err: Error | null, user: UserType) => {
      if (!err) {
        bcrypt.compare(password, user.password, (err, isApproved) => {
          if (!err) {
            
            const sessionData = {
              currentUser: user.firstName,
            } 
            const response = new NextResponse()
            const jwtToken = jwt.sign(sessionData, process.env.JWTKEY)
            response.cookies.set("session", jwtToken)
            res.status(202).json({ authenticated: isApproved });
          }
        });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(401).json({ authenticated: false });
  }

}


