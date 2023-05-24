export interface MovieInterFace {
  title: string;
  description: string;
  releaseDate: string;
  genres: string[];
  duration: number;
  imgUrl: string;
  screenings: Screening[];
  reviews: Review[];
}

interface Screening {
  displayDate: string;
  saloon: string;
  spokenLang: string;
  subtitLang: string;
}

interface Review {
  reviewverName: string;
  reviewverText: string;
  postDate: string;
  rating: number;
}
