import { IBooking } from "../../models/booking";
import fs from "fs/promises";

export default async function randBooking(
  title: string,
  displayDate: Date,
  seatNr: number
) {
  async function getNames(URL: string) {
    const data = await fs.readFile(URL);
    return JSON.parse(data.toString());
  }

  const lastNames: any = await getNames("./last-names.json");
  const randLastName = await lastNames[randArrElem(lastNames.length)];
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

export function randArrElem(arrLength: number) {
  return Math.floor(Math.random() * arrLength);
}
