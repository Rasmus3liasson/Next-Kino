import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { MovieType } from "@/util/types";

interface RatingProps {
  movieData: MovieType;
}

const Rating: React.FC<RatingProps> = ({ movieData }) => {
  const [rating, setRating] = useState<number | null>(null);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const response = await fetch("/api/rating/get");
        const data = await response.json();

        console.log("API response:", data);

        if (response.ok) {
          const movie = data.movies.find(
            (m: { title: string; reviews: { rating: number }[] }) =>
              m.title === movieData.title
          );

          console.log("Movie:", movie);

          if (movie) {
            setRating(movie.reviews.rating);
            return;
          }
        } else {
          console.log("Error response:", response.status, response.statusText);
        }
      } catch (error) {
        console.log("Error fetching movie rating:", error);
      }

      setRating(null);
    };

    fetchRating();
  }, [movieData.title]);

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
    </div>
  );
};

export default Rating;
