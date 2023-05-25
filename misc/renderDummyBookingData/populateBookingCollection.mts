import { IMovie } from "./../../models/movie";
import { screening } from "./../../models/movie";
import booking from "./../../models/booking";
import randBooking from "./randBooking.mjs";

async function getAllMovies() {
  const seatCount = 54;
  const response = await fetch("http://localhost:3000//api/movies/GET");
  const data = await response.json();
  const movies = data.movies;

  for (let i = 0; i < movies.length; i++) {
    movies.forEach(async (movie: IMovie) => {
      movie.screenings.forEach(async (screening: screening) => {
        for (let i = 0; i < seatCount; i++) {
          const randInt = randomInteger(1, 3);
          if (randInt === 1) {
            const booking = await randBooking(
              movie.title,
              screening.displayDate,
              i
            );
            console.log(booking);
            try {
              await new Promise(resolve => setTimeout(resolve, 500));
              const res = await fetch("http://localhost:3000/api/bookings/POST", {
                method: "POST",
                headers: { "Content-type": "application/json"},
                body: JSON.stringify(booking),
              });
              console.log(res);
              if (res.statusText === "OK") {
                console.log(
                  `Booking for movie: ${movie.title} at date ${screening.displayDate} was created`
                );
              }
            } catch(e) {
              console.log(e);
            }
          }
          return;
        }
      });
    });
  }
}

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

getAllMovies();
