import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  Grattis: string;
};
type ReservedSeats = {
    SelectedSeats: string[]
}

export default function handler(
  req: NextApiRequest<ReservedSeats>,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ Grattis: "Dina valda platser är bokade" });
}
