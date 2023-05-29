export type ScreeningType = {
  id: string;
  date: string;
  title: string;
  location: string;
  spokenLang: string;
  subLang: string;
  poster: string;
  screeningId: string;
  screenings: string[];
  description: string;
  rating: number;
};

export type MovieProps = {
  title: string;
  poster: string;
  description?: string;
  rating: number;
};
