import type { NextApiRequest, NextApiResponse } from "next";
import { ScreeningType } from "@/util/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ScreeningType>
) {
    const data: ScreeningType[] = [];


  res.status(200).json(data);
}
