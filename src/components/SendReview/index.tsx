import { useState } from "react";
import { useRouter } from "next/router";
import style from "./style.module.scss";

import { reviewData } from "@/util/mockReview";

export default function SendReview() {
  const router = useRouter();
  const { id } = router.query;

  const [rating, setRating] = useState<number>(1); //change that this isn't a number in the real database
  const [comment, setComment] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [toggleBtn, setToggleBtn] = useState<boolean>(false);

  //filter the movies that match
  const specificMovieReview = reviewData.find(
    (review) => review.movieId === id
  );

  //can't test if it updates the reviews in my mocked data just because it is mocked and
  //no actuall data. But request goes through in networks panel and expect to change the reviews
  async function updateReview() {
    event?.preventDefault();
    if (specificMovieReview) {
      const updatedReviews = [
        ...specificMovieReview.reviews,
        {
          rating: rating,
          comment: comment,
          reviewer: name,
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

    setToggleBtn(true);
    setIsActive(false);
  }

  function toggleSendReviewForm() {
    setIsActive(!isActive);
  }

  return (
    <>
      <div className={style.sendReviewContainer}>
        {!isActive && !toggleBtn ? (
          <button className={style.toggleBtn} onClick={toggleSendReviewForm}>
            Lämna Recension
          </button>
        ) : (
          <button
            disabled
            className={style.toggleBtn}
            onClick={toggleSendReviewForm}
          >
            Inskickad
          </button>
        )}

        {isActive && (
          <form
            className={style.sendReviewForm}
            onSubmit={() => {
              event?.preventDefault();
              name && comment !== "" && updateReview();
            }}
          >
            <div className={style.container}>
              <h3>Skicka Recension</h3>
              <input
                placeholder="Lämna en kommentar"
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />

              <input
                type="text"
                placeholder="Ditt namn"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p>Lämna Betyg</p>
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(parseInt(e.target.value))}
                min={1}
                max={5}
              />
              <div className={style.buttonContainer}>
                <button>Skicka in</button>
                <button
                  className={style.returnBtn}
                  type="button"
                  onClick={toggleSendReviewForm}
                >
                  Avbryt
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
