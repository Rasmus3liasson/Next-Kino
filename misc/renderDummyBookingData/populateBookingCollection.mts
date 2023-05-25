import { IMovie } from "./../../models/movie";

async function getAllMovies() {
  const response = await fetch("http://localhost:3000//api/movies/GET");
  const data = await response.json();
  const movies = data.movies;

  for (let i = 0; i < movies.length; i++) {

    movies.forEach((movie: IMovie) => {
      console.log(movie.screenings);

      for (let i = 0; i < movie.screenings.length; i++) {
        
      }
    });
  }
}

getAllMovies();
