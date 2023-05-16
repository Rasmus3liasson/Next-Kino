import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import style from "./style.module.scss";
import Image from "next/image";
import SendReview from "../SendReview";

interface ReviewData {
  reviewerText: string;
  reviewerName: string;
  postDate: string;
  rating: number;
}
[];

export default function ShowReviews() {
  const router = useRouter();
  const { id } = router.query;

  const [isOpen, setIsOpen] = useState(true);
  const [reviewData, setReviewData] = useState<ReviewData[]>([]);

  useEffect(() => {
    const getReviewData = async () => {
      const res = await fetch(`/api/reviews/${id}`);
      const data = await res.json();
      setReviewData(data);
    };
    getReviewData();
  }, [id]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {<button onClick={toggleDropdown}>testknapp</button>}
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
                          alt="hej"
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
              <SendReview />
            </ul>
          </section>
        </>
      )}
    </>
  );
}
