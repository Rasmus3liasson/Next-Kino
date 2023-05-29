import { screening } from "../../models/movie";
import fs from "fs/promises";
import { IMovie } from "../../models/movie";
import { review } from "../../models/movie";
import randReview from "./randReview.mjs";
import randScreening from "./randScreening.mjs";

// Link to the movie file: https://www.meilisearch.com/movies.json

// Command to run this file in CMD:
// ts-node --esm populateMovieCollection.mts

const movieCount = 50;

const maxRevsPerMovie = 15;
const maxScreensPerMovie = 15;

async function createReviews() {
  const count = Math.floor(Math.random() * maxRevsPerMovie) + 1;
  const reviews: review[] = [];
  for (let i = 0; i < count; i++) {
    const review = await randReview();
    reviews.push(review);
  }
  return reviews;
}

async function createScreenings() {
  const count = Math.floor(Math.random() * maxScreensPerMovie) + 1;
  const screenings: screening[] = [];
  for (let i = 0; i < count; i++) {
    const screening = await randScreening();
    screenings.push(screening);
  }
  return screenings;
}

async function populate() {
  const movies = [];
  try {
    const data = await fs.readFile("./movies.json");
    const movieData = JSON.parse(data.toString());

    for (let i = 0; i < movieCount; i++) {
      const randScreenings = await createScreenings();
      const randReviews = await createReviews();

      const newMov: IMovie = {
        title: movieData[i].title,
        description: movieData[i].overview,
        releaseDate: new Date(movieData[i].release_date * 1000),
        genres: movieData[i].genres,
        duration: randMovieDuration(),
        imgUrl: movieData[i].poster,
        screenings: randScreenings,
        reviews: randReviews,
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

function randMovieDuration() {
  return Math.floor(Math.random() * 61) + 60;
}
