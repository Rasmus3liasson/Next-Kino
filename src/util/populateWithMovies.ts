const fs = require("fs/promises");

const count = 100;

async function populate() {
  const movies: any = [];
  try {
    const res = await fs.readFile("../../movies.json");
    const movieData = JSON.parse(res.toString());

    for (let i = 0; i < count; i++) {
      const newMov: IMovie = {
        title: movieData[i].title,
        description: movieData[i].overview,
        imgUrl: movieData[i].poster,
        duration: randMins(),
        screenings: [],
        reviews: []
      };

      const res = await fetch("http://localhost:3000/api/movies/POST", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMov),
      });
      console.log(`movie "${movieData[i].title}" was created`);
      console.log(res);
    }
  } catch (err) {
    console.log("Failed to create movies.");
    console.log(err);   
  }
}

populate();

interface IMovie {
  title: string;
  description: string;
  imgUrl: string;
  duration: number;
  screenings: Date[];
  reviews:
    | [
        {
          reviewerName: string;
          reviewerText: string;
          postDate: Date;
          rating: number;
        }
      ]
    | [];
}

function randMins() {
  return Math.floor(Math.random() * 61) + 60;
}
