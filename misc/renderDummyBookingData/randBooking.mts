import { IBooking } from "../../models/booking";
import fs from "fs/promises";

export default async function randBooking(
  title: string,
  displayDate: Date,
  seatNr: number
) {
  // const lastNames: string = await getNames("./last-names.json");
  const lastNames = [
    "Shrek",
    "LordFarquaad",
    "PrincessFiona",
    "Donkey",
    "PussInBoots",
    "FairyGodmother",
    "PrinceCharming",
  ];
  const randLastName = lastNames[randArrElem(lastNames.length)];
  const ID = "User" + randLastName;
  const email = ID + "@gmail.com";
  const booking: IBooking = {
    userID: ID,
    email: email,
    movieTitle: title,
    date: displayDate,
    seats: [seatNr],
  };
  return booking;
}

// async function getNames(URL: string) {
//   const data = await fs.readFile(URL);
//   return JSON.parse(data.toString());
// }
  
export function randArrElem(arrLength: number) {
  return Math.floor(Math.random() * arrLength);
}
