export type ReviewType = {
  movieId: string;
  reviews: {
    rating: number;
    comment: string;
    reviewer: string;
    date: string;
  }[];
};

const swedishDate = new Date().toLocaleString("sv-SE", {
  timeZone: "Europe/Stockholm",
});

export const reviewData: ReviewType[] = [
  {
    movieId: "1235",
    reviews: [
      {
        rating: 5,
        comment: "Bra film",
        reviewer: "Rasmus Eliasson",
        date: swedishDate,
      },
      {
        rating: 2,
        comment: "Okej",
        reviewer: "Hamster Peter",
        date: swedishDate,
      },
      {
        rating: 4,
        comment: "Helt klart sevärd",
        reviewer: "Henrik",
        date: swedishDate,
      },
    ],
  },
  {
    movieId: "6589",
    reviews: [
      {
        rating: 1,
        comment: "Dålig",
        reviewer: "Rasmus Eliasson",
        date: swedishDate,
      },
      {
        rating: 4,
        comment: "Sevärd",
        reviewer: "Klas Peter",
        date: swedishDate,
      },
      {
        rating: 2,
        comment: "Helt klart sevärd",
        reviewer: "Henrik",
        date: swedishDate,
      },
    ],
  },
];
