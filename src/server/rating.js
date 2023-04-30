import express from "express";
import fetch from "node-fetch";

export const displayRating = express.Router();

async function getRatingData(id) {
  const response = await fetch(
    "https://plankton-app-xhkom.ondigitalocean.app/api/reviews?filters%5Bmovie%5D=" +
      id
  );
  const reviewData = await response.json();
  const data = reviewData.data;
  return data;
}

export function roundRating(passInData) {
  //removing value of null if it exist
  let nullValue = null;
  let filterData = passInData.filter((item) => item !== nullValue);

  let sum = filterData.reduce(function (a, b) {
    return a + b;
  });

  let result = sum / passInData.length;

  let roundedRating = Math.round(result * 10) / 10;

  return roundedRating;
}

displayRating.get("/movies/:id/rating", async (req, res) => {
  const movieID = req.params.id;

  const data = await getRatingData(movieID);

  let allRating = data.map((rating) => {
    return rating.attributes.rating;
  });

  let roundedRating = roundRating(allRating);

  if (allRating.length >= 5) {
    res.status(200).send({ body: roundedRating });
  } else {
    //här ska funktion med imbd api in
    return;
  }
});
