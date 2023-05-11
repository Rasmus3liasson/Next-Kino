import type { NextApiRequest, NextApiResponse } from "next";
import { reviewData } from "@/util/mockReview";
import { ReviewType } from "@/util/mockReview";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReviewType>
) {
  res.status(200).json(reviewData);
}
