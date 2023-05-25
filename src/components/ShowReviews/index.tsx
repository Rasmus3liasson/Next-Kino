import { useState, useEffect } from "react";
import style from "./style.module.scss";
import Image from "next/image";
import SendReview from "../SendReview";
import { ReviewProps } from "../../types/reviewTypes";

export default function ShowReviews({ reviewData }: ReviewProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {
        <div className={style.toggleBtn}>
          <button onClick={toggleDropdown}>Se Recensioner</button>
        </div>
      }
      {!isOpen && (
        <>
          <section className={style.reviewsContainer}>
            <ul>
              {reviewData?.length > 0 ? (
                reviewData.map((review, index) => (
                  <li key={index}>
                    <div>
                      <p>
                        <span> Betyg:</span>
                      </p>
                      <p>
                        {review.rating}
                        <Image
                          src="/red-star.svg"
                          alt="red star"
                          width={15}
                          height={15}
                        />
                      </p>
                    </div>
                    <div>
                      <p>
                        <span> Kommentar:</span>
                      </p>
                      <p> {review.reviewerText}</p>
                    </div>
                    <div>
                      <p>
                        <span> Namn:</span>
                      </p>
                      <p>{review.reviewerName}</p>
                    </div>
                    <div>
                      <p>
                        <span> Datum:</span>
                      </p>
                      <p>{review.postDate.slice(0, 10)}</p>
                    </div>
                  </li>
                ))
              ) : (
                <p className={style.noReview}>
                  Finns inga recensioner för denna film!
                </p>
              )}
            </ul>
            <SendReview />
          </section>
        </>
      )}
    </>
  );
}
