import fs from "fs/promises";
import { review } from "../../models/movie";
import { randArrElem, randDate } from "./utils.mjs";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 6,
    min: 1,
  },
  wordsPerSentence: {
    max: 12,
    min: 4,
  },
});

async function getNames(URL: string) {
  const data = await fs.readFile(URL);
  return JSON.parse(data.toString());
}

export default async function randReview() {
  const firstNames: any = await getNames("./first-names.json");
  const lastNames: any = await getNames("./last-names.json");

  const randFirstName = firstNames[randArrElem(firstNames.length)];
  const randLastName = lastNames[randArrElem(lastNames.length)];
  const randFullname = randFirstName + " " + randLastName;

  const randReview: review = {
    reviewerName: randFullname,
    reviewerText: lorem.generateParagraphs(1),
    postDate: randDate(new Date("2023-06-19"), new Date("2023-09-10")),
    rating: Math.floor(Math.random() * 5) + 1,
  };

  return randReview;
}
