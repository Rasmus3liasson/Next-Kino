import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  kino: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ kino: "our kino project" });
}
