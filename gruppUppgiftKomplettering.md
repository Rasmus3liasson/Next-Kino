# Funktionalitet
 * Inloggning
 * Databas 
 * Statiska infosidor
 * platsbokning

# Verktyg
 * Bootstrap.
 * Typescript.
 * Stable Next.js
 * Prettier

***

# Mainfunktionalitet
 * Sökfunktion
 * Platsval

# Vad ska användaren kunna göra efter inloggning?

 * Boka biljett snabbt och enkelt iom sparade uppgifter?
 * Samla rabbat-poäng per bokning?
 * Möjlighet att förboka premiärer?
 * Nyhetsbrev (valfritt)?
 * Lämna recensioner/betyg?

# Vad ska databasen lagra/bistå med? 
 
 * Spara recensioner/betyg
 * Spara filmer/visningar för aktuella filmer
 * Spara användaruppgifter
 * ex. användaruppgifter
	* Användarnamn & Lösenord
	* Betalningsuppgifter
	* användaren kan spara sina favoritfilmer och få rekommendationer baserat på dem.
	* användaren kan se sina tidigare bokningar och få påminnelser om kommande visningar.
	
# Routes

## Api
 * get /api/screenings
 * get /api/reviews/:id
 * get /api/upcoming-screenings/:id
 * post /api/movies/:id/sendReview
 * post /api/movies/:id/booking

## Pages
 * dynamiska
  * get /movies/:id
  * get /movies/:id/booking

 * statiska
  * get /about