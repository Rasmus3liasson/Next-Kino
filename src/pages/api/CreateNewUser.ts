import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { SubmitedUserResponse } from "@/util/types";
/* prefixed imports */
//import connectMongoDB from "@/src/*path*"
//import user from "@/models/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SubmitedUserResponse>
) {
  // connectMongoDB is not available atm, waiting for database import
  // row 22,24,25,37 & 46 is based on planned Schemas and connectionapproach
  try {
    await connectMongoDB();
    const { userName, firstName, lastName, eMail, password } = req.body
    const userNameTaken = await User.Find({ userName: userName })
    const eMailTaken = await User.Find({ email: eMail });
    const errorMessages = []


    if (userNameTaken || eMailTaken) {

      userNameTaken && errorMessages.push("Username already exist")
      eMailTaken && errorMessages.push("Email already exist")
      res.status(409).json({ userCreated: false, errors: errorMessages })

    } else {

      const newUser = new User({
        userName,
        firstName,
        lastName,
        eMail,
        password: await bcrypt.hash(password, 2)

      });

      await newUser.save()
      res.status(201).json({ userCreated: true, errors: [] });
    }

  } catch (e) {
    console.log("Database error: ", e)
  }


}







