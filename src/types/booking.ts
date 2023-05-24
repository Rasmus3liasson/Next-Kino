export interface Booking {
  _id: string;
  userID: string;
  email: string;
  movieTitle: string;
  date: string;
  seats: number[];
}
