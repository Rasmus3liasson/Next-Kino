import fetch from "node-fetch";

  //Get all reviews for a movie
  export async function loadReviews(movieID,page){
    //URL to API
    const reviewbaseUrl = "https://plankton-app-xhkom.ondigitalocean.app/api/reviews/";
    //Result from call to API
    const res = await fetch(reviewbaseUrl + "?filters[movie]=" + movieID+"&pagination[pageSize]=5&pagination[page]="+page);
    //Convert to JSON
    
    //Get JSON data and metadata for pagination and return info
    const data = await res.json();
    const pages = data.meta;
      return {
        reviews: data,
        pages: pages
      };
  }