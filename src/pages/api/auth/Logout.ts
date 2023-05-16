import type { NextApiResponse } from "next";
import { serialize } from "cookie";

export default function logout(
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
}
