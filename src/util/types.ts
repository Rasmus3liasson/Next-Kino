import { screening } from "../../models/movie";

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

export type SortedScreenings = {
  title: string;
  screeningsByDay: {
    displayDate: string;
    screenings: screening[]
  }[]
};

export type SubmitedUserResponse = {
  userCreated: boolean;
  errors: string[];
};

export type UserType = {
  name: {
    first: string;
    last: string;
  };
  userName: string;
  email: string;
  password: string;
};

export type StrengthMeterStyles = {
  25: { style: string; text: string };
  50: { style: string; text: string };
  75: { style: string; text: string };
  100: { style: string; text: string };
};

export type MovieProps = {
  title: string;
  poster: string;
};
export type ScreeningProps = {
  _id: number;
  title: string;
  poster: string;
  screening: string;
  location?: string;
}