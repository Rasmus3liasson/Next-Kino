import { IBooking } from "../../models/booking";
import randBooking from "./randBooking.mjs";

// Link to the movie file: https://www.meilisearch.com/movies.json

// Command to run this file in CMD:
// ts-node --esm populateBookingCollection.mts

async function getAllMovies() {
  const seatCount = 54;
  const response = await fetch("http://localhost:3000/api/movies/GET");
  const data = await response.json();
  const movies = data.movies;
  const bookings: IBooking[] = [];

  for (let m = 0; m < movies.length; m++) {

    for (let s = 0; s < movies[m].screenings.length; s++) {

      for (let i = 0; i < seatCount; i++) {

        const randInt = randomInteger(1, 3);
        if (randInt === 1) {
          const booking: IBooking = await randBooking(
            movies[m].title,
            new Date(movies[m].screenings[s].displayDate),
            i
          );
          bookings.push(booking);
        }
      }
    }
  }

  try {
    const res = await fetch("http://localhost:3000/api/bookings/POSTMANY", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(bookings),
    });
    console.log(res);
    if (res.statusText === "OK") {
      console.log(`Array of bookings was successfully POSTED`);
    }
  } catch (e) {
    console.log(e);
  }
}

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

getAllMovies();
