import fs from "fs/promises";
import { IMovie } from "../models/movie";
import { randMins } from "./helperFuncs.mjs";

// Command to run this file in CMD:
// ts-node --esm populateMovieCollection.mts

const movieCount = 1;

async function populate() {
  const movies = [];
  try {
    const data = await fs.readFile("./movies.json");
    const movieData = JSON.parse(data.toString());
    console.log(movieData[1]);

    for (let i = 0; i < movieCount; i++) {
      const newMov: IMovie = {
        title: movieData[i].title,
        description: movieData[i].overview,
        releaseDate: new Date(movieData[i].release_date * 1000),
        genres: movieData[i].genres,
        duration: randMins(),
        imgUrl: movieData[i].poster,
        screenings: [],
        reviews: [],
      };

      const res = await fetch("http://localhost:3000/api/movies/POST", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMov),
      });
      if (res.statusText === "OK") {
        console.log(`movie "${movieData[i].title}" was created.`);
      } else {
        console.log("movie creation failed.");
      }
    }
  } catch (err) {
    console.log(err);
  }
}

populate();
