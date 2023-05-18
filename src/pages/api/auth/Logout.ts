import type { NextApiRequest ,NextApiResponse } from "next";
import { serialize } from "cookie";

export default function logout(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  res.setHeader(
    "Set-Cookie",
    serialize("AuthToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: -1,
      path: "/",
    })
  );
  
  res.status(200).redirect("/").end()
}
