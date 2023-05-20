import { screening } from "../models/movie";


const saloons = ["Matsalen", "Stora Salongen", "Lilla Salongen"];
const spokenLangs = ["en-GB", "en-SV"];
const subtitLangs = ["en-GB", "en-SV", null];

export function randScreening() {
  if (spokenLangs )
  const randScreening: screening = {
    displayDate: randDate(),
    saloon: saloons[Math.floor(Math.random()*saloons.length)],
    spokenLang: spokenLangs[Math.floor(Math.random()*saloons.length)],


  }
}

export function randDate() {
  const startDate = new Date(); // now
  const endDate = new Date("2023-08-13");
  const timeDiff = endDate.getTime() - startDate.getTime();

  const randomTime = Math.random() * timeDiff;
  const randomDate = new Date(startDate.getTime() + randomTime);

  return randomDate;
}

// export type screening = {
//   displayDate: Date;
//   saloon: string;
//   spokenLang: "en-GB" | "se-SV";
//   subtitLang: "en-GB" | "se-SV" | null;
// };

export function randMins() {
  return Math.floor(Math.random() * 61) + 60;
}