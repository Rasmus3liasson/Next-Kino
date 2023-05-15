import type { NextApiRequest, NextApiResponse } from "next";
import una


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<[]>
) {
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<unavailableSeats[]>
  ) {
    const data = await getData();
    
    res.status(200).json(data);
  }
  
  export async function getData(){
    
    return unavailableSeats;
  }