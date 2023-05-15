import { Schema, model, models } from "mongoose";

export interface IBooking {
  userID: string | null; // string = inloggad | null = ej inloggad
  email: string;
  movieTitle: string;
  date: Date;
  seats: number[];
}

const bookingSchema = new Schema<IBooking>({
  userID: Schema.Types.Mixed,
  email: String,
  movieTitle: String,
  date: Date,
  seats: [Number],
});

const Booking = models.Booking || model<IBooking>("Booking", bookingSchema);

export default Booking;
