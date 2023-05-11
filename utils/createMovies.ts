import Movie from "../models/movie";
import mongoose from "mongoose";


export default function renderMovies() {
  const db = mongoose.connection;

  db.once("open", async () => {
    const movie = new Movie();
    console.log('creating');
    if ((await Movie.countDocuments().exec()) > 0) return;
    Movie.create({
      title: "Shrek",
      description: "Robins favourite movie",
      imgUrl:
        "https://i-viaplay-com.akamaized.net/viaplay-prod/993/800/1613762117-f07774c22a81b35740522f9e1b18e1e03331bc19.jpg?width=400&height=600",
      duration: 86,
      screenings: [],
      reviews: [],
    });
  });
}

// {
//   "title": "Shrek",
//   "description": "Robins favourite movie",
//   "imgUrl": "https://i-viaplay-com.akamaized.net/viaplay-prod/993/800/1613762117-f07774c22a81b35740522f9e1b18e1e03331bc19.jpg?width=400&height=600",
//   "duration": "86",
//   "screenings": "[]",
//   "reviews": "[]"
// }