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
        const response = await fetch("/api/movies/ratings");
        const data = await response.json();

        if (response.ok) {
          // Assuming the ratings data is returned as an array of objects
          // with each object containing the movie title and rating
          const movie = data.movies.find(
            (m: { title: string; reviews: { rating: number }[] }) =>
              m.title === movieData.title
          );

          if (movie) {
            setRating(movie.reviews.rating);
            return;
          }
        }
      } catch (error) {
        console.log("Error fetching movie rating:", error);
      }

      // If rating is not found in the ratings data, set it to a default value
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
