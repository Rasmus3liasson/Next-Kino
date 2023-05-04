\
API Endpoints
===============

This document contains the API endpoints for our cinema that applies for:

- booking a ticket,
- handle reviews,
- information about movies
- handle accounts

## Screening

`GET /api/screenings`

Returns a list of movie screenings, including information about the movie, date, time, language and theater.

## Reviews

`GET /api/reviews/:id`

Returns the reviews for a specific movie, specified by its id.

## Upcoming Screenings

`GET /api/upcoming-screenings/:id`

Returns a list of upcoming screenings for a specific movie, specified by its id.

## Booking

`GET /api/movies/:id/booking`

Returns the available seats for a specific movie screening, specified by its id.

## Sending Reviews

`POST /api/movies/:id/sendReview`

Allows a user to post a review for a specific movie, specified by its id.

## Payment

`POST /api/movies/:id/payment`

Allows a user to make a payment for a specific movie screening, specified by its id.

## Authentication

`POST /api/login`

Allows a user to log in to the application.

`POST /api/createUser`

Allows a user to create an account for the application.
