import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<[]>
) {
  const data = await getData();
  
  res.status(200).json(data);
}

export async function getData(){
  
  return ;
}