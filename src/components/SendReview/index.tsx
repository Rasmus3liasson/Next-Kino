import { useState } from "react";
import { useRouter } from "next/router";
import style from "./style.module.scss";

export default function SendReview() {
  //gets id from url
  const router = useRouter();
  const { id } = router.query;

  const [rating, setRating] = useState<number>(1);
  const [comment, setComment] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [toggleBtn, setToggleBtn] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  //post new review
  async function updateReview() {
    event?.preventDefault();

    const updatedReviews = {
      reviewerName: name,
      reviewerText: comment,
      postDate: new Date().toISOString(),
      rating: rating,
    };
    await fetch(`/api/reviews/${id}/sendReview`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedReviews),
    });

    setToggleBtn(true);
    setIsActive(false);
  }

  //toggle form
  function toggleSendReviewForm() {
    setIsActive(!isActive);
  }

  return (
    <>
      <div className={style.sendReviewContainer}>
        {!isActive && !toggleBtn && (
          <button className={style.toggleBtn} onClick={toggleSendReviewForm}>
            Lämna Recension
          </button>
        )}
        {!isActive && toggleBtn && (
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
              name && comment !== "" && rating >= 1 && rating <= 5
                ? updateReview()
                : setSubmitted(true);
            }}
          >
            <div className={style.container}>
              <h3>Skicka Recension</h3>
              <input
                className={submitted && comment === "" ? style.errorBorder : ""}
                placeholder="Lämna en kommentar"
                type="text"
                value={comment}
                onChange={(e) => {
                  const input = e.target.value;
                  const FirstLetterUpperCase =
                    input.charAt(0).toUpperCase() + input.slice(1);
                  setComment(FirstLetterUpperCase);
                }}
              />

              <input
                className={submitted && name === "" ? style.errorBorder : ""}
                type="text"
                placeholder="Ditt namn"
                value={name}
                onChange={(e) => {
                  const input = e.target.value;
                  const FirstLetterUpperCase =
                    input.charAt(0).toUpperCase() + input.slice(1);
                  setName(FirstLetterUpperCase);
                }}
              />
              <p>Lämna Betyg</p>
              <input
                className={
                  submitted && (rating > 5 || rating < 1)
                    ? style.errorBorder
                    : ""
                }
                type="number"
                value={rating}
                onChange={(e) => setRating(parseInt(e.target.value))}
                min={1}
                max={5}
                required
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
