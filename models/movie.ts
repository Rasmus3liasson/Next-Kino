import { Schema, model, models } from "mongoose";

export interface IMovie {
  title: string;
  description: string;
  imgUrl: string;
  duration: number;
  screenings: Date[];
  reviews: [
    {
      reviewerName: string;
      reviewerText: string;
      postDate: Date;
      rating: number;
    }
  ] | [];
}

const movieSchema = new Schema<IMovie>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true },
  duration: { type: Number, required: true },
  screenings: [Date],
  reviews: [
    {
      reviewerName: { type: String, required: true },
      reviewerText: { type: String, required: true },
      postDate: { type: Date, required: true },
      rating: { type: Number, min: 1, max: 5, required: true },
    },
  ],
});

const Movie = models.Movie || model<IMovie>("Movie", movieSchema);

export default Movie;
