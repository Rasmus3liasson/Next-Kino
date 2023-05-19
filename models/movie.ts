import { Schema, model, models } from "mongoose";

export interface IMovie {
  title: string;
  description: string;
  releaseYear: number;
  genre: string;
  duration: number;
  imgUrl: string;

  screenings: [
    {
      displayDate: Date;
      saloon: string;
      spokenLang: "en-GB" | "se-SV";
      subtitLang: "en-GB" | "se-SV" | null;
    }
  ];

  reviews: [
    {
      reviewerName: string;
      reviewerText: string;
      postDate: Date;
      rating: number;
    }
  ];
}


const movieSchema = new Schema<IMovie>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  genre: { type: String, required: true },
  duration: { type: Number, required: true },
  imgUrl: { type: String, required: true },

  screenings: [
    {
      displayDate: { type: Date, required: true },
      saloon: { type: String, required: true },
      spokenLang: { type: Schema.Types.Mixed, required: true },
      subtitLang: { type: Schema.Types.Mixed, required: true },
    },
  ],

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
