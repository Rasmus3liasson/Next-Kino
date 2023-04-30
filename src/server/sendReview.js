import express from "express";
import fetch from "node-fetch";
import validateReviews from "./validateReviews.js";
import { body, validationResult } from "express-validator";
export const sendReviewServer = express.Router();

sendReviewServer.post("/movies/:id/review", async (req, res) => {
  const validationResult = validateReviews(req,res)
  await fetch("https://plankton-app-xhkom.ondigitalocean.app/api/reviews", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body, validationResult),
  });
});

export default function reviewData(reviewMovie) {
  return reviewMovie.data.map((elements) => {
    return {
      rating: elements.attributes.rating,
    };
  });
}