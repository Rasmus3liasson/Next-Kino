import { Schema, model, models} from "mongoose";
import { type } from "os";

interface IMovie {
  title: string,
  description: string,
  imgUrl: string,
  duration: number,
  screenings: Date,
  reviews: Review[],
}

const movie = new Schema<IMovie>({
    title: String,
    description: String,
    imgUrl: String,
    duration: Number,
    screenings: [Date],
    reviews: [Review],
});

type Review = {
  reviewerName: String,
  reviewerText: String, 
  postDate: String,
  rating: Number,
};
