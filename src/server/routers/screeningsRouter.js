import express from 'express';
import { getScreeningsWithMovies, getScreeningsList } from '../screeningsList.js';

export const screeningsRouter = express.Router();

screeningsRouter.get("/", async (req, res) => {
    const screenings = await getScreeningsList(getScreeningsWithMovies);

    if(screenings){
        res.send(screenings);
    } else {
        res.status(500).send();
    }
  });