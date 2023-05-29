import { screening } from "../../models/movie";
import { randArrElem, randDate } from "./utils.mjs";

const saloons = ["Matsalen", "Stora Salongen", "Lilla Salongen"];
const spokenLangs: any = ["en-GB", "se-SV"];
const subtitLangs: any = ["en-GB", "se-SV", null];

export default function randScreening() {
  const randScreening: screening = {
    displayDate: randDate(new Date("2023-06-19"), new Date("2023-09-10")),
    saloon: saloons[randArrElem(saloons.length)],
    spokenLang: spokenLangs[randArrElem(spokenLangs.length)],
    subtitLang: subtitLangs[randArrElem(subtitLangs.length)],
  };

  return randScreening;
}
