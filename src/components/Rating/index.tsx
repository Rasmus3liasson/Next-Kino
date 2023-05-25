import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { MovieProps } from "@/util/types";
import { ReviewProps } from "@/types/reviewTypes";

interface RatingProps {
  movieData: MovieProps;
}

const Rating: React.FC<RatingProps> = ({ movieData }) => {
  const [rating, setRating] = useState<number | null>(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch("/api/rating/get");
        const data = await response.json();

        if (response.ok) {
          const movie = data.movies.find(
            (m: { title: string }) => m.title === movieData.title
          );

          if (movie) {
            const averageRating =
              movie.reviews?.reduce(
                (total: number, review: { rating: number }) =>
                  total + review.rating,
                0
              ) / movie.reviews?.length;
            const roundedRating = Math.round(averageRating);
            setRating(roundedRating);
          }
        } else {
          console.log("Error response:", response.status, response.statusText);
        }
      } catch (error) {
        console.log("Error fetching movie rating:", error);
      }
    };

    fetchMovieData();
  }, [movieData.title]);

  const generateStars = () => {
    if (rating === null) {
      return null;
    }

    const fullStars = Math.floor(rating);

    const stars = [];

    for (let i = 1; i <= fullStars; i++) {
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
    </div>
  );
};

export default Rating;
