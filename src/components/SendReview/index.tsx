import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { reviewData } from "@/util/mockReview";

export default function SendReview() {
  const router = useRouter();
  const { id } = router.query;

  const [rating, setRating] = useState<number>(1); //change that this isn't a number in the real database
  const [comment, setComment] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);

  //filter the movies that match
  const specificMovieReview = reviewData.find(
    (review) => review.movieId === id
  );

  //can't test if it updates the reviews in my mocked data just because it is mocked and
  //no actuall data. But request goes through in networks panel
  async function updateReview() {
    if (specificMovieReview) {
      const updatedReviews = [
        ...specificMovieReview.reviews,
        {
          rating: rating,
          comment: comment,
          reviewer: "Rasmus Eliasson",
          date: new Date().toLocaleString("sv-SE", {
            timeZone: "Europe/Stockholm",
          }),
        },
      ];

      const res = await fetch(`/api/reviews/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reviews: updatedReviews,
        }),
      });
    }
  }

  function toggleSendReviewForm() {
    setIsActive(!isActive);
  }

  return (
    <>
      <form>
        {isActive && (
          <>
            <p>Lämna Betyg</p>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
              min={1}
              max={5}
            />
            <p>Lämna en kommentar</p>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <p>Dit namn</p>
            <input type="text" />
            <div>
              <button onClick={updateReview}>Skicka in</button>
            </div>
          </>
        )}
      </form>

      <button onClick={toggleSendReviewForm}>
        {!isActive ? "Lämna recension" : "Avbryt"}
      </button>
    </>
  );
}
