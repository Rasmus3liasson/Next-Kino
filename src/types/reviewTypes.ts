export interface ReviewData {
  reviewerText: string;
  reviewerName: string;
  postDate: string;
  rating: number;
}

export interface ReviewProps {
  reviewData: ReviewData[];
}
