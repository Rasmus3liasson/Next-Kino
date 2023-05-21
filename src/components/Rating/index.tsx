/* import { useState, useEffect } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { ScreeningType } from "@/util/types";

interface MovieProps {
  movieData: ScreeningType;
}

const Rating: React.FC<MovieProps> = ({ movieData }) => {
  const [rating, setRating] = useState("");

  useEffect(() => {
    fetch(`/api/reviews/${movieData.id}`)
      .then((response) => response.json())
      .then((data) => {
        const imdbRating = data.rating;
        setRating(imdbRating);
      })
      .catch((error) => {
        console.log("Error fetching movie rating:", error);
      });
  }, [movieData.id]);

  const link = `/movie/${movieData.id}/reviews`;

  return (
    <Link href={link} passHref>
      <a className={style.card}>
        <div className={style.rating}>IMDB Rating: {rating || "N/A"}</div>
      </a>
    </Link>
  );
};

export default Rating;
 */

/* import { useState, useEffect } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { ScreeningType } from "@/util/types";

interface RatingProps {
  movieData: ScreeningType;
  rating: string;
}

const Rating: React.FC<RatingProps> = ({ movieData, rating }) => {
  const link = `/movie/${movieData.id}/reviews`;

  useEffect(() => {
    if (window.location.pathname === "/rating" && movieData.id === "1235") {
      console.log("Rating of movie with ID 1235:", rating);
    }
  }, [rating]);

  return (
    <Link href={link} passHref>
      <a className={style.card}>
        <div className={style.rating}>Rating: {rating || "N/A"}</div>
      </a>
    </Link>
  );
};

export default Rating;
 */

/* import { useState, useEffect } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { ScreeningType } from "@/util/types";

interface RatingProps {
  movieData: ScreeningType;
  rating: string;
}

const Rating: React.FC<RatingProps> = ({ movieData, rating }) => {
  const link = `/movie/${movieData.id}/reviews`;

  useEffect(() => {
    if (window.location.pathname === "/rating" && movieData.id === "1235") {
      console.log("Rating of movie with ID 1235:", rating);
    }
  }, [rating]);

  return (
    <Link href={link} passHref>
      <div className={style.card}>
        <div className={style.rating}>Rating: {rating || "N/A"}</div>
      </div>
    </Link>
  );
};

export default Rating;
 */

/* import React, { useState } from "react";
import style from "./style.module.scss";
import { ScreeningType } from "@/util/types";

interface RatingProps {
  movieData: ScreeningType;
}

const Rating: React.FC<RatingProps> = ({ movieData }) => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingSelect = (rating: number) => {
    setSelectedRating(rating);
  };

  const generateStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starClass = i <= selectedRating ? "selected" : "";

      stars.push(
        <span
          key={i}
          className={`star ${starClass}`}
          onClick={() => handleRatingSelect(i)}
        >
          &#9733;
        </span>
      );
    }

    return stars;
  };

  const handleSubmit = () => {
    console.log("Rating:", selectedRating);
  };

  return (
    <div className={style.card}>
      <div className={style.rating}>{generateStars()}</div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Rating; */

import React from "react";
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

export default Rating;
