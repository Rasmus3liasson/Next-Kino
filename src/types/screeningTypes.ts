
export type ScreeningProps = {
    _id: number;
    title: string;
    poster: string;
    screening: string;
    location?: string;
  }
  export type SortedScreenings = {
    title: string;
    screeningsByDay: SortedScreeningsByDay[]
  };
  export type SpecificScreening = {
    displayDate: string;
    saloon: string;
    spokenLang: "en-GB" | "se-SV";
    subtitLang: "en-GB" | "se-SV" | null;
  };
  export type SortedScreeningsByDay = {
        displayDate: string;
        screenings: SpecificScreening[]
  }