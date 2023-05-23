import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { MovieType } from "@/util/types";

interface RatingProps {
  movieData: MovieType;
}

const Rating: React.FC<RatingProps> = ({ movieData }) => {
  const [rating, setRating] = useState<number | null>(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch("/api/rating/get");
        const data = await response.json();

        console.log("API response:", data);

        if (response.ok) {
          const movieData = data.movies.map((movie: any) => {
            const ratings =
              movie.reviews?.map((review: any) => review.rating) ?? [];
            const averageRating = calculateAverageRating(ratings);
            const roundedRating = Math.round(averageRating);
            return {
              title: movie.title,
              rating: roundedRating,
            };
          });

          console.log("Movie Data:", movieData);

          const movie = movieData.find(
            (m: { title: string }) => m.title === movieData.title
          );

          console.log("Movie:", movie);

          if (movie) {
            setRating(movie.rating);
            console.log("Average Rating:", movie.rating);
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

    fetchMovieData();
  }, [movieData.title]);

  const calculateAverageRating = (ratings: number[]) => {
    if (ratings.length === 0) {
      return 0;
    }
    const sum = ratings.reduce((total, rating) => total + rating, 0);
    return sum / ratings.length;
  };

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
