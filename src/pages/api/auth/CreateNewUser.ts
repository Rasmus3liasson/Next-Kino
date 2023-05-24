import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { SubmitedUserResponse } from "@/util/types";
import connectMongo from "@/util/connectMongo";
import User from "../../../../models/user";
import { UserType } from "@/util/types";


export default async function createNewUser(
  req: NextApiRequest,
  res: NextApiResponse<SubmitedUserResponse>
) {
 
  try {
    await connectMongo();
    const { userName, name, email, password }: UserType = req.body
    const userNameTaken = await User.findOne({ userName: userName })
    const eMailTaken = await User.findOne({ email: email });
    const errorMessages = []

    if (userNameTaken || eMailTaken) {

      userNameTaken && errorMessages.push("Username already exist")
      eMailTaken && errorMessages.push("Email already exist")
      res.status(409).json({ userCreated: false, errors: errorMessages })
    } else {

      const newUser = new User({
        name: name,
        userName,
        email,
        passwordHash: await bcrypt.hash(password, process.env.SALT)
      });

      await newUser.save()
      res.status(201).json({ userCreated: true, errors: [] });
    }

  } catch (e) {
    console.log("Database error: ", e)
  }


}
