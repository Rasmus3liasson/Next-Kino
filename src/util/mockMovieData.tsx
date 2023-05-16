import { ScreeningType } from "./types";

export const movieData: ScreeningType = {
  id: "1235",
  date: "21:00 2023-02-27",
  title: "The Shawshank Redemption",
  description:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reprehenderit quo nemo pariatur facilis animi suscipit quibusdam magnam, enim saepe neque quasi sapiente, expedita ea! Accusamus quisquam odio recusandae",
  location: "Stora salongen",
  spokenLang: "ENG",
  subLang: "SWE",
  screeningId: "34213",
  screenings: [
    new Date('2023-05-10T09:30:00').toISOString(), 
    new Date('2023-05-10T14:45:00').toISOString(), 
    new Date('2023-05-10T16:15:00').toISOString(), 
    new Date('2023-05-11T10:00:00').toISOString(), 
    new Date('2023-05-11T14:30:00').toISOString(), 
    new Date('2023-05-11T11:30:00').toISOString(), 
    new Date('2023-05-12T13:45:00').toISOString(),
  ],
  rating: 5,
  poster:
    "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
};

export const movieDataArray: ScreeningType[] = [
  {
    id: "1235",
    date: "21:00 2023-05-09",
    title: "The Shawshank Redemption",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reprehenderit quo nemo pariatur facilis animi suscipit quibusdam magnam, enim saepe neque quasi sapiente, expedita ea! Accusamus quisquam odio recusandae",
    location: "Stora salongen",
    spokenLang: "ENG",
    subLang: "SWE",
    screeningId: "12255",
    screenings: [
      new Date('2023-05-10T09:30:00').toISOString(), 
      new Date('2023-05-10T14:45:00').toISOString(), 
      new Date('2023-05-10T16:15:00').toISOString(), 
      new Date('2023-05-11T10:00:00').toISOString(), 
      new Date('2023-05-11T14:30:00').toISOString(), 
      new Date('2023-05-11T11:30:00').toISOString(), 
      new Date('2023-05-12T13:45:00').toISOString(),
    ],
    rating: 3,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "6589",
    date: "19:00 2023-02-27",
    title: "The Usual Suspects",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reprehenderit quo nemo pariatur facilis animi suscipit quibusdam magnam, enim saepe neque quasi sapiente, expedita ea! Accusamus quisquam odio recusandae",
    location: "Matsalen",
    spokenLang: "SWE",
    subLang: "SWE",
    screeningId: "98467",
    screenings: [
      new Date('2023-05-10T09:30:00').toISOString(), 
      new Date('2023-05-10T14:45:00').toISOString(), 
      new Date('2023-05-10T16:15:00').toISOString(), 
      new Date('2023-05-11T10:00:00').toISOString(), 
      new Date('2023-05-11T14:30:00').toISOString(), 
      new Date('2023-05-11T11:30:00').toISOString(), 
      new Date('2023-05-12T13:45:00').toISOString(),
    ],
    rating: 3,
    poster:
      "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "3754",
    date: "21:00 2023-05-09",
    title: "Avengers: Endgame",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reprehenderit quo nemo pariatur facilis animi suscipit quibusdam magnam, enim saepe neque quasi sapiente, expedita ea! Accusamus quisquam odio recusandae",
    location: "Lilla Salongen",
    spokenLang: "SWE",
    subLang: "SWE",
    screeningId: "98235",
    screenings: [
      new Date('2023-05-10T09:30:00').toISOString(), 
      new Date('2023-05-10T14:45:00').toISOString(), 
      new Date('2023-05-10T16:15:00').toISOString(), 
      new Date('2023-05-11T10:00:00').toISOString(), 
      new Date('2023-05-11T14:30:00').toISOString(), 
      new Date('2023-05-11T11:30:00').toISOString(), 
      new Date('2023-05-12T13:45:00').toISOString(),
    ],
    rating: 1,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "9876",
    date: "19:00 2023-02-28",
    title: "Min Granne Totoro",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reprehenderit quo nemo pariatur facilis animi suscipit quibusdam magnam, enim saepe neque quasi sapiente, expedita ea! Accusamus quisquam odio recusandae",
    location: "Stora salongen",
    spokenLang: "ENG",
    subLang: "SWE",
    screeningId: "73245",
    screenings: [
      new Date('2023-05-10T09:30:00').toISOString(), 
      new Date('2023-05-10T14:45:00').toISOString(), 
      new Date('2023-05-10T16:15:00').toISOString(), 
      new Date('2023-05-11T10:00:00').toISOString(), 
      new Date('2023-05-11T14:30:00').toISOString(), 
      new Date('2023-05-11T11:30:00').toISOString(), 
      new Date('2023-05-12T13:45:00').toISOString(),
    ],
    rating: 2,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "2322",
    date: "21:00 2023-02-27",
    title: "The Shawshank Redemption",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reprehenderit quo nemo pariatur facilis animi suscipit quibusdam magnam, enim saepe neque quasi sapiente, expedita ea! Accusamus quisquam odio recusandae",
    location: "Anexxet",
    spokenLang: "ENG",
    subLang: "SWE",
    screeningId: "19573",
    screenings: [
      new Date('2023-05-10T09:30:00').toISOString(), 
      new Date('2023-05-10T14:45:00').toISOString(), 
      new Date('2023-05-10T16:15:00').toISOString(), 
      new Date('2023-05-11T10:00:00').toISOString(), 
      new Date('2023-05-11T14:30:00').toISOString(), 
      new Date('2023-05-11T11:30:00').toISOString(), 
      new Date('2023-05-12T13:45:00').toISOString(),
    ],
    rating: 4,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
  },
];
