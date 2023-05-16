export type ScreeningType = {
    id: string;
    date: string;
    title: string;
    location: string;
    spokenLang: string;
    subLang: string;
    poster: string;
    screeningId: string;
    screenings: Date[];
    description: string;
    rating: number;
  };
  export type MovieType = {
    id: number;
    title: string;
    poster: string;
}
