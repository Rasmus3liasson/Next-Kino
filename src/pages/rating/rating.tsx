import { useEffect, useState } from "react";
import Rating from "../../components/Rating/index";
import { ScreeningType } from "@/util/types";

const RatingPage = () => {
  const [rating, setRating] = useState("");
  const movieData: ScreeningType = {
    id: "1235",
    date: "2023-05-12",
    title: "Movie Title",
    location: "Movie Location",
    spokenLang: "English",
    subLang: "",
    poster: "",
    screeningId: "",
    rating: "",
  };

  useEffect(() => {
    // Fetch the rating data for movie ID "1235" and update the rating state
    const fetchRatingData = async () => {
      try {
        const response = await fetch(`/api/ratings/${movieData.id}`);
        const data = await response.json();
        setRating(data.rating);
      } catch (error) {
        console.error("Error fetching rating data:", error);
      }
    };

    fetchRatingData();
  }, []);

  return (
    <>
      <h1>Movie Rating</h1>
      <Rating movieData={movieData} rating={rating} />
    </>
  );
};

export default RatingPage;
