/* **** Working code i didn´t want to delete (for now) **** */

/* import React from "react";
import style from "./style.module.scss";
import { ScreeningType } from "@/util/types";
import Link from "next/link";

interface RatingProps {
  movieData: ScreeningType;
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ movieData, rating }) => {
  const generateStars = () => {
    const stars = [];

    for (let i = 1; i <= rating; i++) {
      stars.push(
        <span key={i} className={`star selected`}>
          &#9733;
        </span>
      );
    }

    return stars;
  };

  return (
    <div className={style.card}>
      <div className={style.rating}>{generateStars()}</div>
      <Link href={`/movie/${movieData.id}/reviews`} passHref>
        <button className={style.link}>Visa recensioner</button>
      </Link>
    </div>
  );
};

export default Rating; */

/* ********************************* */

import React from "react";
import style from "./style.module.scss";
import { ScreeningType } from "@/util/types";
import Link from "next/link";
// import connectMongo from "../../../../../util/connectMongo";
// import mongoose from "mongoose";
import { movieDataArray } from "../../util/mockMovieData";

interface RatingProps {
  movieData: ScreeningType;
}

const Rating: React.FC<RatingProps> = ({ movieData }) => {
  const [rating, setRating] = React.useState<number | null>(null);

  React.useEffect(() => {
    const fetchRating = async () => {
      // Try fetching rating from the database
      // try {
      //   await connectMongo();

      //   const Movie = mongoose.model("Movie");
      //   const movie = await Movie.findOne({ _id: movieData.id });

      //   if (movie) {
      //     setRating(movie.rating);
      //     return;
      //   }
      // } catch (error) {
      //   console.log("Error fetching movie rating:", error);
      // }

      // If rating is not found in the database, fallback to mockMovieArray
      const mockMovie = movieDataArray.find(
        (movie: ScreeningType) => movie.id === movieData.id
      );

      if (mockMovie) {
        setRating(mockMovie.rating);
      }
    };

    fetchRating();
  }, [movieData.id]);

  const generateStars = () => {
    if (rating === null) {
      return null;
    }

    const stars = [];

    for (let i = 1; i <= rating; i++) {
      stars.push(
        <span key={i} className={`star selected`}>
          &#9733;
        </span>
      );
    }

    return stars;
  };

  return (
    <div className={style.card}>
      <div className={style.rating}>{generateStars()}</div>
      <Link href={`/movie/${movieData.id}/reviews`} passHref>
        <button className={style.link}>Visa recensioner</button>
      </Link>
    </div>
  );
};

export default Rating;
