# Lule Northern Lights Cinema

This project is the result of working with a re-design we did of an earlier project.
The task was to implement additional features to the project and refactor the site
to a NEXT.js environment. 

## Resources
- [Design spec](https://www.figma.com/file/r1FdsPU5rcK8M8oKTJ9Dem/Final-Lule-Bio-Site?type=design&node-id=0%3A1&t=aGhZaZU9aCQCsIQv-1) on figma.

## Getting Started

To build and view the project locally use the following steps. 

```bash
npm install

npm run build

npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deployment on Netlify

The [site](https://address_to_netlify) is deployed on Netlify. 



# API Endpoints
===============

This document contains the API endpoints for our cinema that applies for:

- booking a ticket,
- handle reviews,
- information about movies
- handle accounts

## Screening

`GET /api/screenings`

Returns a list of 10 movie screenings, including information about the movie, date, time, language and theater. Sorted by date.

## Upcoming Screenings

`GET /api/upcoming-screenings/:id`

Returns a list of 10 upcoming screenings for a specific movie, specified by its id.
Sorted by date and grouped by day.

## Reviews

`GET /api/reviews/:id`

Returns the reviews for a specific movie, specified by its id.

## Sending Reviews

`POST /api/movies/:id/sendReview`

Allows a user to post a review for a specific movie, specified by its id.

## Booking

`GET /api/movies/:id/booking/:displayDate`

Returns the available seats for a specific movie screening, specified by its date.

## Payment

`POST /api/movies/:id/payment`

Allows a user to make a payment for a specific movie screening, specified by its id.

## Authentication

`POST /api/login`

Allows a user to log in to the application.

`POST /api/createUser`

Allows a user to create an account for the application.


Routes
===============

`GET /`

Homepage that shows movies available

`GET /movies/:id`

Information about movie that match id

`GET /movies/:id/booking`

Book movie that match id

## Static

`GET /about`

Static page about our cinema

`GET /contact`

Static page with contact information

`GET /openinghours`

Static page with opening hours

